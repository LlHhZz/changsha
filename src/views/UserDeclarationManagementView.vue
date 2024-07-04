<template>
  <!-- Toast容器 -->
    <div class="position-fixed p-3" style="z-index: 5; left: 38vw; top: 8vh;">
      <div id="liveToast" class="toast toast-custom" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <strong class="mr-auto">{{message}}</strong>
        </div>
        <div class="toast-body">
        </div>
      </div>
    </div>

  <div>
    <div class="mainbox">
      <div class="column">
        <table class="table table-striped table-hover">
          <thead>
              <tr>
                  <th scope="col">用户名</th>
                  <th scope="col">申报区域</th>
                  <th scope="col">申报电量</th>
                  <th scope="col">调频容量</th>
                  <th scope="col">电量价格</th>
                  <th scope="col">里程价格</th>
                  <th scope="col">容量价格</th>
                  <th scope="col">审核状态</th>
                  <th scope="col">操作</th>
                  <th scope="col">删除</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(item, idx) in use_list" :key="idx">
                  <td>{{item.username}}</td>
                  <td>{{item.declarationArea}}</td>
                  <td>{{item.declarationElectricity}}</td>
                  <td>{{item.FMCapacity}}</td>
                  <td>{{item.electricityPrice}}</td>
                  <td>{{item.mileagePrice}}</td>
                  <td>{{item.capacityPrice}}</td>
                  <td>{{item.reviewState}}</td>
                  <td v-if="item.reviewState === '待审核'">
                    <button class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#exampleModal_' + item.id">认证确认</button>
                  </td>
                  <td v-else>
                    <button class="btn btn-secondary" disabled>完成确认</button>
                  </td>
                  <td><button class="btn btn-danger" @click="handleDeclarationDelete(item.id)">删除</button></td>
                  <!-- Modal -->
                  <div class="modal fade" :id="'exampleModal_' + item.id" tabindex="-1" :aria-labelledby="'exampleModalLabel_' + item.id"
                      aria-hidden="true" style="background-color: transparent;">
                      <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content">
                              <div class="modal-header">
                                  <h1 class="modal-title fs-5" id="exampleModalLabel">请确认申报状态</h1>
                                  <button type="button" class="btn-close" data-bs-dismiss="modal"
                                      aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                  <div class="row" style="padding: 10px;">
                                      <div class="col" data-bs-dismiss="modal">
                                          <p class="card-title">
                                            <button class="btn btn-success" @click="handleDeclarationEdit(item.id, '已通过')">通过申报</button>
                                          </p>
                                      </div>
                                      <div class="col" data-bs-dismiss="modal">
                                          <p class="card-title">
                                            <button class="btn btn-danger" @click="handleDeclarationEdit(item.id, '已拒绝')" >拒绝申报</button>
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </tr>
          </tbody>
      </table>
      <div style="margin-left: 8%;">
            <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-link">共{{ totalItems }}条</li>
                
                <select class="page-link" v-model="pageSize">
                  <option v-for="size in pageSizes" :key="size" :value="size">{{ size }}</option>
                </select>
                
                <li class="page-link">条/页</li>
                <li class="page-item changeable" @click="handlePageChange(currentPage - 1)">
                    <div class="page-link">&lt;</div>
                </li>
                <li v-for="page in totalPages" :key="page" class="page-item changeable" @click="handlePageChange(page)">
                    <div class="page-link">{{ page }}</div>
                </li>
                <li class="page-item changeable" @click="handlePageChange(currentPage + 1)">
                    <div class="page-link">&gt;</div>
                </li>
            </ul>
            </nav>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ContentBase from '../components/ContentBase';

import { useRouter } from 'vue-router';
import $ from 'jquery';
import { Toast } from 'bootstrap';

export default {
  data() {
    return {
      name: '',
      value: '',
      port: '',
      declaration_infos: [],
      message: '',
      authenticationCode: '',

      totalPages: 1,
      currentPage: 1,
      pageSizes: [3, 5, 10, 15, 20, 25],
      pageSize: 5,
      use_list: [],
      totalItems: 0,
    };
  },
  setup() {
    const router = useRouter(); // 引入路由实例

    const goBack = () => {
      router.back(); // 调用back方法返回上一页
    };

    return { goBack };
  },
  mounted() {
    this.name = localStorage.getItem('name');
    this.value = localStorage.getItem('value');
    this.port = localStorage.getItem('port');

    $.ajax({
      url: "/api/declaration/getinfos/",
      type: "get",
      success: resp => {
          if(resp.result === 'success') {
            this.declaration_infos = resp.declarationInfos;
            this.totalItems = this.declaration_infos.length;
            this.totalPages = Math.ceil(this.totalItems / this.pageSize);
            this.handlePageChange(1);
          } else {
            console.log(resp.result);
          }
      },
      error: resp => {
          var toastEl = document.getElementById('liveToast');
          var toast = new Toast(toastEl, {
            autohide: true,
            delay: 400
          });
          toast.show();
          console.log(resp);
          this.message = '请求失败';
      }
    })
  },
  methods: {
    handleDeclarationDelete(id) {
      console.log(id);
      $.ajax({
        url: "/api/declaration/delete/",
        type: "post",
        data: {
          id: id,
        },
        success: resp => {
            if(resp.result === 'success') {
              var toastEl = document.getElementById('liveToast');
              var toast = new Toast(toastEl, {
                autohide: true,
                delay: 400
              });
              toast.show();
              this.message = '删除成功';
            } else {
              console.log(resp.result);
              var toastEl2 = document.getElementById('liveToast');
              var toast2 = new Toast(toastEl2, {
                autohide: true,
                delay: 400
              });
              toast2.show();
              console.log(resp);
              this.message = resp.result;
            }
        },
        error: resp => {
            var toastEl2 = document.getElementById('liveToast');
            var toast2 = new Toast(toastEl2, {
              autohide: true,
              delay: 400
            });
            toast2.show();
            console.log(resp);
            this.message = '请求失败';
        }
      })
    },
    handleDeclarationEdit(id, state) {
      console.log(id);
      $.ajax({
        url: "/api/declaration/edit/",
        type: "post",
        data: {
          id: id,
          declarationState: state,
        },
        success: resp => {
            if(resp.result === 'success') {
              $.ajax({
                url: "/api/declaration/getinfos/",
                type: "get",
                success: resp => {
                    if(resp.result === 'success') {
                      this.declaration_infos = resp.declarationInfos
                      
                    } else {
                      console.log(resp.result);
                    }
                },
                error: resp => {
                    var toastEl = document.getElementById('liveToast');
                    var toast = new Toast(toastEl, {
                      autohide: true,
                      delay: 400
                    });
                    toast.show();
                    console.log(resp);
                    this.message = '请求失败';
                }
              })
            } else {
              console.log(resp.result);
              var toastEl = document.getElementById('liveToast');
              var toast = new Toast(toastEl, {
                autohide: true,
                delay: 400
              });
              toast.show();
              console.log(resp);
              this.message = resp.result;
            }
        },
        error: resp => {
            var toastEl2 = document.getElementById('liveToast');
            var toast2 = new Toast(toastEl2, {
              autohide: true,
              delay: 400
            });
            toast2.show();
            console.log(resp);
            this.message = '请求失败';
        }
      })
    },
    handlePageChange(newPage) {
      if(newPage === 0) {
        newPage = 1;
        var toastEl = document.getElementById('liveToast');
        var toast = new Toast(toastEl, {
          autohide: true,
          delay: 300
        });
        toast.show();
        this.message = '没有上一页了！';
      }
      if(newPage === this.totalPages + 1) {
        newPage = this.totalPages;
        var toastEl2 = document.getElementById('liveToast');
        var toast2 = new Toast(toastEl2, {
          autohide: true,
          delay: 300
        });
        toast2.show();
        this.message = '没有下一页了！';
      }

      this.currentPage = newPage;
      let start = (this.currentPage - 1) * this.pageSize;
      let end = start + this.pageSize;

      this.use_list = this.declaration_infos.slice(start, end);
    },
  },
  watch: {
    pageSize(newValue, oldValue) {
      console.log('PageSize changed from', oldValue, 'to', newValue);
      this.totalPages = Math.ceil(this.totalItems / newValue);
      this.handlePageChange(1); // 当pageSize改变时，重置到第一页
    }
  },
  name: 'HomeView',
  components: {
    // ContentBase,
  }
}
</script>

<style scoped>
@media (max-width: 1200px) {
  .col-4 {
    flex-basis: 100%; /* 将每个列的基础宽度设置为100% */
  }
}

.mainbox {
  display: flex;
  min-width: 1024px;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0.125rem 0.125rem 0;
  .column {
    flex: 3;
  }
  .column:nth-child(2) {
    flex: 5;
  }
}

.mapcontainer {
  margin-top: 10vh;
}

.table {
  font-size: 15px;
  margin-left: 8%;
  width: 84%;
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 5px;
}

.table thead th,
.table tbody td {
  color: white;
  background-color: rgba(255, 255, 255, 0.15);
}

.table-striped tbody tr:nth-child(odd) td,
.table-hover tbody tr:hover td {
  background-color: rgba(255, 255, 255, 0.08);
}

.changeable {
  cursor: pointer;
}
</style>