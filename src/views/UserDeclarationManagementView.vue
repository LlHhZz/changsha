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
                  <th scope="col">删除记录</th>
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
                    <button class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#exampleModal_' + item.id">
                      <svg t="1720090762854" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9516" width="20" height="20"><path d="M125.44 906.24h788.48c25.6-2.56 23.04 5.12 23.04-23.04V819.2c0-35.84-7.68-43.52-43.52-43.52h-153.6c-20.48-15.36-23.04-35.84-28.16-40.96-89.6-99.84-38.4-166.4 17.92-258.56 10.24-12.8 20.48-25.6 28.16-40.96 23.04-40.96 35.84-87.04 35.84-138.24C793.6 138.24 665.6 7.68 504.32 7.68c-158.72 0-289.28 128-289.28 289.28 0 66.56 23.04 128 61.44 176.64 61.44 97.28 161.28 176.64 0 302.08h-153.6c-28.16 0-43.52 15.36-43.52 43.52v66.56c0 25.6 17.92 20.48 46.08 20.48z m855.04 43.52H35.84c-12.8 0-23.04 10.24-23.04 23.04v23.04c0 12.8 10.24 23.04 23.04 23.04h942.08c12.8 0 23.04-10.24 23.04-23.04V972.8c0-12.8-10.24-23.04-20.48-23.04z" fill="#ffffff" p-id="9517"></path></svg>
                      认证确认
                    </button>
                  </td>
                  <td v-else>
                    <button class="btn btn-secondary" disabled>
                      <svg t="1720090977574" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21086" width="20" height="20"><path d="M706.517564 19.603462C694.997604 8.513501 679.557657 1.693524 663.127714 0.293529a69.67976 69.67976 0 0 0-7.089976-0.289999h-286.799011c-2.179992 0-4.349985 0.1-6.489977 0.289999-16.639943 1.319995-31.95989 7.729973-44.049849 19.269934-13.649953 13.059955-20.499929 29.969897-20.499929 48.239833v20.999928c-1.319995 40.949859 31.459892 74.849742 71.039755 74.849742h285.429016c39.579864 0 71.039755-32.469888 72.359751-73.419747V67.863296c0-18.279937-8.169972-35.239879-20.50993-48.259834z" fill="#ffffff" p-id="21087"></path><path d="M927.666802 79.753255H808.337213v69.839759c0 36.149875-43.839849 53.119817-82.509715 54.419813H319.238899c-38.679867-1.309995-85.859704-18.269937-85.859704-54.419813V79.753255H97.519664c-9.499967 0-18.099938 0.859997-25.879911 2.489991a93.775677 93.775677 0 0 0-35.409878 16.569943C8.279971 122.383108 1.189996 165.40296 1.189996 214.082792v675.587671c0.939997 50.269827 8.159972 94.509674 38.149868 117.529595a93.708677 93.708677 0 0 0 31.579892 14.149951c7.949973 1.729994 16.779942 2.649991 26.599908 2.649991H931.906787c50.649825 0 92.089683-39.569864 92.089683-87.939697V214.082792c0-36.159875 0-134.329537-96.329668-134.329537zM745.357431 415.032099a85877.078959 85877.078959 0 0 0-261.2891 319.848898c-7.409974 9.089969-11.759959 9.789966-20.849928 2.209992a19583.378491 19583.378491 0 0 0-183.699367-150.039483c-11.139962-8.849969-11.67996-15.519946-2.949989-26.659908 32.519888-41.659856 32.109889-41.859856 72.249751-8.59997 34.609881 28.669901 69.789759 56.649805 103.829642 86.019703 10.889962 9.419968 16.299944 10.529964 26.249909-1.759994 67.099769-83.309713 134.649536-166.299427 202.639302-248.949141 26.259909-31.90989 19.049934-34.649881 55.299809-4.749984 6.589977 5.409981 15.439947 9.139968 17.819938 19.289933-3.02999 4.339985-5.85998 9.009969-9.299967 13.389954z" fill="#ffffff" p-id="21088"></path></svg>
                      完成确认
                    </button>
                  </td>
                  <td>
                    <button class="btn btn-primary" @click="handleDeclarationDelete(item.id)">
                      <svg t="1720091412233" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="46701" width="20" height="20"><path d="M163.690667 969.152A53.610667 53.610667 0 0 0 215.936 1024h609.514667a53.610667 53.610667 0 0 0 52.245333-54.869333V256H163.690667v713.152z m513.728-548.565333a44.672 44.672 0 0 1 43.541333-45.717334h8.64a44.672 44.672 0 0 1 43.541333 45.717334v448a44.672 44.672 0 0 1-43.541333 45.717333h-8.64a44.650667 44.650667 0 0 1-43.541333-45.717333v-448z m-209.066667 0A44.672 44.672 0 0 1 512 374.869333h8.704a44.672 44.672 0 0 1 43.541333 45.717334v448a44.650667 44.650667 0 0 1-43.541333 45.717333H512a44.650667 44.650667 0 0 1-43.541333-45.717333v-448z m-200.277333 0a44.672 44.672 0 0 1 43.541333-45.717334h8.810667a44.672 44.672 0 0 1 43.541333 45.717334v448a44.672 44.672 0 0 1-43.541333 45.717333h-8.725334a44.672 44.672 0 0 1-43.541333-45.717333v-448zM895.104 109.738667H616.533333v-64A44.650667 44.650667 0 0 0 572.928 0H459.733333a44.672 44.672 0 0 0-43.541333 45.717333v64H128.853333A44.672 44.672 0 0 0 85.333333 155.456v45.696h853.333334V155.456a44.672 44.672 0 0 0-43.541334-45.717333z m0 0" p-id="46702" fill="#ffffff"></path></svg>
                      删除
                    </button>
                  </td>
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
                                            <button class="btn btn-success btn-block" @click="handleDeclarationEdit(item.id, '已通过')">
                                              <svg t="1720091184639" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="33082" width="20" height="20"><path d="M527.651468 49.868781c-246.934019 0-447.112154 200.178135-447.112154 447.111131S280.719496 944.092066 527.651468 944.092066s447.111131-200.178135 447.111131-447.111131C974.763622 250.046916 774.584464 49.868781 527.651468 49.868781zM527.651468 880.219339c-211.656561 0-383.238404-171.58082-383.238404-383.238404 0-211.656561 171.58082-383.238404 383.238404-383.238404 211.656561 0 383.238404 171.58082 383.238404 383.238404S739.309052 880.219339 527.651468 880.219339z" fill="#ffffff" p-id="33083"></path><path d="M717.513654 355.148649c-7.435343 0-14.365172 2.777253-19.522636 7.826246L526.028505 531.895119l-62.757323 61.426001-118.30136-118.27373c-5.17179-5.170766-12.183484-8.018627-19.741623-8.018627-8.300037 0-16.570397 3.50994-22.692838 9.632381-12.141528 12.143575-12.862959 31.179117-1.606591 42.434461L439.562201 657.694243l0.045025 0.052189c0.35918 0.416486 0.720408 0.828878 1.107217 1.222851 0.63138 0.64673 1.314948 1.287319 2.033309 1.909489 5.167696 5.14109 12.157901 7.972579 19.693528 7.972579 0.206708 0 0.412392-0.00614 0.6191-0.013303 0.187265 0.007163 0.37453 0.011256 0.563842 0.011256 7.349385 0 14.20349-2.709715 19.328207-7.635911 0.750083-0.62831 1.481747-1.297552 2.180666-1.99647 0.508583-0.508583 0.934279-0.992607 1.311879-1.423419l83.166141-81.404008 171.963537-168.921247c11.372002-11.135618 10.854209-30.178323-1.156336-42.447764C734.277456 358.747617 725.929324 355.148649 717.513654 355.148649z" fill="#ffffff" p-id="33084"></path></svg>
                                              通过申报
                                            </button>
                                          </p>
                                      </div>
                                      <div class="col" data-bs-dismiss="modal">
                                          <p class="card-title">
                                            <button class="btn btn-danger btn-block" @click="handleDeclarationEdit(item.id, '已拒绝')" >
                                              <svg t="1720091196467" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="33341" width="20" height="20"><path d="M511.563 65.144c-246.87 0-446.998 200.128-446.998 446.998S264.693 959.14 511.563 959.14 958.56 759.011 958.56 512.141 758.433 65.144 511.563 65.144zM785.211 785.79c-35.561 35.561-76.954 63.473-123.03 82.961-47.672 20.164-98.348 30.388-150.619 30.388s-102.946-10.224-150.619-30.388c-46.076-19.488-87.469-47.401-123.03-82.961-35.561-35.561-63.473-76.954-82.962-123.03-20.164-47.672-30.388-98.348-30.388-150.618s10.224-102.946 30.388-150.619c19.489-46.076 47.401-87.469 82.962-123.03 35.56-35.561 76.954-63.473 123.03-82.962 47.672-20.164 98.348-30.388 150.619-30.388s102.946 10.224 150.619 30.388c46.076 19.489 87.469 47.401 123.03 82.962 35.561 35.56 63.473 76.954 82.962 123.03 20.164 47.672 30.388 98.348 30.388 150.619s-10.224 102.946-30.388 150.618c-19.489 46.076-47.401 87.47-82.962 123.03z" fill="#ffffff" p-id="33342"></path><path d="M690.087 336.983c-11.715-11.716-30.711-11.716-42.426 0L513.535 471.109 379.41 336.983c-11.716-11.716-30.711-11.716-42.427 0-11.715 11.716-11.715 30.711 0 42.427l134.126 134.126-134.126 134.125c-11.715 11.716-11.715 30.71 0 42.426 5.858 5.858 13.536 8.787 21.213 8.787s15.355-2.929 21.213-8.787l134.126-134.126 134.126 134.126c5.857 5.858 13.535 8.787 21.213 8.787s15.355-2.929 21.213-8.787c11.716-11.716 11.716-30.71 0-42.426L555.961 513.535 690.087 379.41c11.716-11.716 11.716-30.711 0-42.427z" fill="#ffffff" p-id="33343"></path></svg>
                                              拒绝申报
                                            </button>
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
      <div style="float: left; margin-left: 8%;">
            <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item changeable" @click="handleReset()">
                    <div class="page-link">
                      <svg t="1721962930692" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19874" width="23" height="23"><path d="M950.4 425.4c-11.8-59.2-34.8-114.4-68.4-164-32.5-47.9-73.4-88.5-121.7-120.8S658.8 85.9 602.2 74.2c-58.7-12.2-118.5-12.4-177.7-0.7-81.3 16.1-155 53.5-215.2 108.9l-95-97.8C105 75 88.6 81.5 88.4 94.9l-3.6 249c-0.1 8.3 6.5 15.2 14.8 15.3l249 3.6c13.4 0.2 20.4-15.9 11-25.6L259.5 234.1c50.2-45.7 111.5-76.5 179-89.9 98.4-19.5 198.5 0.5 281.8 56.2 83.4 55.8 140 140.6 159.5 239s-0.5 198.5-56.2 281.8c-55.8 83.4-140.6 140-239 159.5-77.3 15.3-156 6.3-227.6-26.1-70.1-31.7-127.9-83.1-167.4-148.7-10.2-17-32.4-22.6-49.4-12.3-17 10.2-22.5 32.4-12.3 49.4 23.4 38.9 52.5 74 86.7 104.2 33.7 29.9 71.7 54.5 112.7 73.1 58.3 26.4 120.5 39.8 183.5 39.8 29.2 0 58.6-2.9 87.8-8.7 59.2-11.8 114.4-34.8 164-68.4 47.9-32.5 88.5-73.4 120.8-121.7s54.6-101.5 66.4-158.2c12.2-58.7 12.4-118.5 0.6-177.7z" fill="#ffffff" p-id="19875"></path></svg>
                    </div>
                </li>

                <input class="page-link" v-model="searchUsername" placeholder="请输入用户名" />
                
                <li class="page-item changeable" @click="handleSearchUsername()">
                    <div class="page-link">
                      <svg t="1721962899632" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18779" width="23" height="23"><path d="M427.418 2.195C662.08 2.195 852.3 192.42 852.3 427.077a424.176 424.176 0 0 1-22.749 137.458 41.484 41.484 0 0 1-1.504 4.323 422.176 422.176 0 0 1-5.986 15.887l-2.625-2.63a42.447 42.447 0 0 1-73.116-29.328l-0.39-3.93c0-11.164 4.309-21.315 11.35-28.893l-3.562-3.561a339.522 339.522 0 0 0 12.127-90.124c0-187.329-151.871-339.2-339.21-339.2C239.29 87.08 87.42 238.95 87.42 426.28c0 187.355 151.87 339.215 339.215 339.215 91.444 0 174.435-36.19 235.435-95.025a42.437 42.437 0 0 1 63.788-4.298l283.184 283.183c16.567 16.568 16.567 43.455 0 60.018a42.437 42.437 0 0 1-60.028 0L695.967 756.325c-73.188 59.772-166.678 95.63-268.55 95.63-234.657 0-424.882-190.236-424.882-424.883C2.535 192.42 192.76 2.19 427.418 2.19z" fill="#ffffff" p-id="18780"></path></svg>
                    </div>
                </li>
                
            </ul>
            </nav>
      </div>
      <div style="float: right; margin-right: 8%;">
            <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-link">共{{ totalItems }}条</li>
                
                <select class="page-link" v-model="pageSize">
                  <option v-for="size in pageSizes" :key="size" :value="size" style="color: black;">{{ size }}</option>
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
      searchUsername: '',
      baseUrl: 'http://8.148.13.44:9000',

      totalPages: 1,
      currentPage: 1,
      pageSizes: [3, 5, 10, 15, 20, 25],
      pageSize: 10,
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
            delay: 1500
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
              $.ajax({
                url: "/api/declaration/getinfos/",
                type: "get",
                success: resp => {
                    if(resp.result === 'success') {
                      this.declaration_infos = resp.declarationInfos;
                      this.totalItems = this.declaration_infos.length;
                      this.totalPages = Math.ceil(this.totalItems / this.pageSize);
                      this.handlePageChange(this.currentPage);
                    } else {
                      console.log(resp.result);
                    }
                },
                error: resp => {
                    var toastEl = document.getElementById('liveToast');
                    var toast = new Toast(toastEl, {
                      autohide: true,
                      delay: 1500
                    });
                    toast.show();
                    console.log(resp);
                    this.message = '请求失败';
                }
              })
            } else {
              console.log(resp.result);
              var toastEl2 = document.getElementById('liveToast');
              var toast2 = new Toast(toastEl2, {
                autohide: true,
                delay: 1500
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
              delay: 1500
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
                      this.handlePageChange(this.currentPage);
                    } else {
                      console.log(resp.result);
                    }
                },
                error: resp => {
                    var toastEl = document.getElementById('liveToast');
                    var toast = new Toast(toastEl, {
                      autohide: true,
                      delay: 1500
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
                delay: 1500
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
              delay: 1500
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
          delay: 1500
        });
        toast.show();
        this.message = '没有上一页了！';
      }
      if(newPage === this.totalPages + 1) {
        newPage = this.totalPages;
        var toastEl2 = document.getElementById('liveToast');
        var toast2 = new Toast(toastEl2, {
          autohide: true,
          delay: 1500
        });
        toast2.show();
        this.message = '没有下一页了！';
      }

      this.currentPage = newPage;
      let start = (this.currentPage - 1) * this.pageSize;
      let end = start + this.pageSize;

      this.use_list = this.declaration_infos.slice(start, end);
    },
    handleSearchUsername() {
      if(this.searchUsername === '') {
        var toastEl = document.getElementById('liveToast');
        var toast = new Toast(toastEl, {
          autohide: true,
          delay: 1500
        });
        toast.show();
        this.message = '请输入查找的用户名';
      } else {
        this.declaration_infos = this.declaration_infos.filter(info => 
            info.username.toLowerCase().includes(this.searchUsername.toLowerCase())
        );
        this.totalItems = this.declaration_infos.length;
        this.totalPages = Math.ceil(this.totalItems / this.pageSize);
        this.handlePageChange(1);

        $.ajax({
          url: "/api/declaration/getinfos/",
          type: "get",
          success: resp => {
              if(resp.result === 'success') {
                this.declaration_infos = resp.declarationInfos;
              } else {
                console.log(resp.result);
              }
          },
          error: resp => {
              var toastEl = document.getElementById('liveToast');
              var toast = new Toast(toastEl, {
                autohide: true,
                delay: 1500
              });
              toast.show();
              console.log(resp);
              this.message = '请求失败';
          }
        })
      }
    },
    handleReset() {
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
              delay: 1500
            });
            toast.show();
            console.log(resp);
            this.message = '请求失败';
        }
      })
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

.page-link {
  background-color: rgba(255, 255, 255, 0.25);
  color: #fff;
  border-color: rgba(255, 255, 255, 0.35);
}

button {
  opacity: 0.90;
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

.btn-block {
    display: block;
    width: 100%;
}

.btn-success {
    background-color: #4caf50; /* 修改成功按钮背景颜色 */
    border-color: #4caf50; /* 修改成功按钮边框颜色 */
    color: white; /* 修改成功按钮文本颜色 */
    padding: 10px 20px; /* 增加按钮内部padding */
    border-radius: 5px; /* 增加按钮圆角半径 */
}

.btn-success:hover {
    background-color: #45a049; /* 修改成功按钮的鼠标悬停背景颜色 */
}

.btn-danger {
    background-color: #f44336; /* 修改危险按钮背景颜色 */
    border-color: #f44336; /* 修改危险按钮边框颜色 */
    color: white; /* 修改危险按钮文本颜色 */
    padding: 10px 20px; /* 增加按钮内部padding */
    border-radius: 5px; /* 增加按钮圆角半径 */
}

.btn-danger:hover {
    background-color: #d32f2f; /* 修改危险按钮的鼠标悬停背景颜色 */
}

/* 定义渐入渐出动画 */
@keyframes fadeInOut {
  0%, 100% {
    opacity: 0;
    transform: translateY(20px); /* 可以添加一些垂直位移效果 */
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 应用动画到toast组件 */
.toast-custom {
  animation: fadeInOut 2s infinite; /* 动画持续时间，次数和是否无限循环 */
}
</style>