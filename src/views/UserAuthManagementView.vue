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
                  <th scope="col">认证资料</th>
                  <th scope="col">操作</th>
                  <th scope="col">认证状态</th>
                  <th scope="col">认证码</th>
                  <th scope="col">操作</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(item, idx) in use_list" :key="idx">
                  <td>{{item.username}}</td>
                  <td style="cursor: pointer;">
                    <svg t="1719163048594" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6280" width="25" height="25"><path d="M731.1 778.9V617.5c0-5.6-4.5-10.1-10.1-10.1h-59.5c-5.6 0-10.1 4.5-10.1 10.1v161.4h-40.7c-3.9 0-6.3 4.2-4.4 7.6l80.1 136.6c2 3.3 6.8 3.3 8.7 0l80.1-136.6c2-3.4-0.5-7.6-4.4-7.6h-39.7zM503.5 464.5H297c-14.9 0-27-12.2-27-27v-2c0-14.9 12.2-27 27-27h206.5c14.9 0 27 12.2 27 27v2c0 14.8-12.1 27-27 27zM568.6 564.6H297c-14.9 0-27-12.2-27-27v-2c0-14.9 12.2-27 27-27h271.6c14.9 0 27 12.2 27 27v2c0 14.8-12.1 27-27 27z" p-id="6281" fill="#ffffff"></path><path d="M470.7 860.7h-249V165.8h376.6v204.1h204.3l0.1 188.2c22.4 10.2 43 23.6 61.2 39.7V365.7c0-7.5-3-14.6-8.2-19.9L616 106.5c-5.3-5.3-12.4-8.2-19.9-8.2H174.5c-7.8 0-14.1 6.3-14.1 14.1v801.9c0 7.8 6.3 14.1 14.1 14.1h332.2c-15.3-20.5-27.6-43.2-36-67.7z" p-id="6282" fill="#ffffff"></path><path d="M526.5 608.6H296.1c-14.3 0-26.1 12.6-26.1 28s11.7 28 26.1 28h191.8c10.5-20.5 23.5-39.3 38.6-56zM467.6 708.7H296.1c-14.3 0-26.1 12.6-26.1 28s11.7 28 26.1 28h162c1.3-19.3 4.5-38.1 9.5-56z" p-id="6283" fill="#ffffff"></path></svg> 
                    {{item.file}}
                  </td>
                  <td><button class="btn btn-primary">
                    <a :href="item.file" style="color: white; text-decoration: none;" download>下载资料查看</a>
                  </button></td>
                  <td>{{item.authState}}</td>
                  <td>{{item.authCode}}</td>
                  <td v-if="item.authState === '待审核'"><button class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#exampleModal_' + item.id">认证确认</button></td>
                  <td v-else><button class="btn btn-secondary" disabled>完成确认</button></td>
                  <!-- Modal -->
                  <div class="modal fade" :id="'exampleModal_' + item.id" tabindex="-1" :aria-labelledby="'exampleModalLabel_' + item.id"
                      aria-hidden="true" style="background-color: transparent;">
                      <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content">
                              <div class="modal-header">
                                  <h1 class="modal-title fs-5" id="exampleModalLabel">请确认认证状态</h1>
                                  <button type="button" class="btn-close" data-bs-dismiss="modal"
                                      aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <div class="row" style="margin: 10px;">
                                      <input class="forminput" v-model="authenticationCode" style="border-radius: 3px;" placeholder="分配认证码" />
                                  </div>
                                  <div class="row" style="padding: 10px;">
                                      <div class="col" data-bs-dismiss="modal">
                                          <p class="card-title">
                                            <button class="btn btn-success" @click="handleAuthEdit(item.id ,item.username, '已通过')">通过认证</button>
                                          </p>
                                      </div>
                                      <div class="col" data-bs-dismiss="modal">
                                          <p class="card-title">
                                            <button class="btn btn-danger" @click="handleAuthEdit(item.id, item.username, '已拒绝')" >拒绝认证</button>
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
      auth_infos: [],
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
      url: "/api/auth/getinfos/",
      type: "get",
      success: resp => {
          if(resp.result === 'success') {
            this.auth_infos = resp.authInfos;
            this.totalItems = this.auth_infos.length;
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
    handleAuthEdit(id, username, state) {
      console.log(id);
      $.ajax({
        url: "/api/auth/editinfos/",
        type: "post",
        data: {
          id: id,
          username: username,
          authState: state,
          authCode: this.authenticationCode,
        },
        success: resp => {
            if(resp.result === 'success') {
              $.ajax({
                url: "/api/auth/getinfos/",
                type: "get",
                success: resp => {
                    if(resp.result === 'success') {
                      this.auth_infos = resp.authInfos
                      
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

      this.use_list = this.auth_infos.slice(start, end);
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