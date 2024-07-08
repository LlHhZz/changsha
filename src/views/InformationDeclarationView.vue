<template>
    <!-- Toast容器 -->
    <div class="position-fixed p-3" style="z-index: 5; left: 72vw; top: 8vh;">
      <div id="liveToast" class="toast toast-custom" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <strong class="mr-auto">{{message}}</strong>
        </div>
      </div>
    </div>

    <div class="row">
        <div class="col-1">
            <!--
                <OffCanvas></OffCanvas>
            -->
        </div>
      
      <div class="col-10">
        <div class="row">
          <div class="col-4"></div>
            <span class="col-2">申报区域：<text id="textStyle">{{ areaName }}</text></span>
            <span class="col-2">剩余功率：<text id="textStyle">{{ areaValue }}</text></span>
          <div class="col-4"></div>
          </div>
        <form @submit.prevent="handleDeclarationUpload">
                <br/>
                <div class="row">
                    <div class="col-4"></div>
                    <div class="mb-3 col-4">
                        <label for="declarationElectricity" class="form-label">申报电量</label>
                        <input type="number" class="form-control" id="declarationElectricity" v-model="declarationElectricity">
                    </div>
                    <div class="col-4"></div>
                </div>
                <div class="row">
                  <div class="col-4"></div>
                  <div class="mb-3 col-4">
                        <label for="electricityPrice" class="form-label">电量价格</label>
                        <input type="number" class="form-control" id="electricityPrice" v-model="electricityPrice">
                    </div>
                    <div class="col-4"></div>
                </div>
                <div class="row">
                  <div class="col-4"></div>
                  <div class="mb-3 col-4">
                        <label for="FMCapacity" class="form-label">调频容量</label>
                        <input type="number" class="form-control" id="FMCapacity" v-model="FMCapacity">
                    </div>
                    <div class="col-4"></div>
                </div>
                <div class="row">
                  <div class="col-4"></div>
                  <div class="mb-3 col-4">
                      <label for="mileagePrice" class="form-label">里程价格</label>
                      <input type="number" class="form-control" id="mileagePrice" v-model="mileagePrice">
                  </div>
                  <div class="col-4"></div>
                </div>
                <div class="row">
                  <div class="col-4"></div>
                  <div class="mb-3 col-4">
                      <label for="capacityPrice" class="form-label">容量价格</label>
                      <input type="number" class="form-control" id="capacityPrice" v-model="capacityPrice">
                  </div>
                  <div class="col-4"></div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-1"></div>
                  <button type="submit" class="col-4 btn btn-primary" style="background-color: #0a2bb5; border-color: #0a2bb5;">确认提交</button>
                  <div class="col-1"></div>
                </div>
        </form>
      </div>
    </div>
</template>

<script>
// import ContentBase from '../components/ContentBase';`
// import OffCanvas from '../components/OffCanvas';
import { useRouter } from 'vue-router';
import $ from 'jquery';
import { Toast } from 'bootstrap';

export default {
  setup() {
    const router = useRouter(); // 引入路由实例

    const goBack = () => {
      router.back(); // 调用back方法返回上一页
    };

    return { goBack };
  },
  data() {
    return {
      name: '',
      value: '',
      port: '',
      areaName: '',
      areaValue: '',
      message: '',

      declarationElectricity: 0,
      FMCapacity: 0,
      electricityPrice: 0,
      mileagePrice: 0,
      capacityPrice: 0,
    };
  },
  mounted() {
    this.name = localStorage.getItem('name');
    this.value = localStorage.getItem('value');
    this.port = localStorage.getItem('port');
  },
  created() {
    this.areaName = this.$route.params.areaName;
    this.areaValue = this.$route.params.areaValue;
  },
  methods: {
    handleDeclarationUpload() {
      $.ajax({
        url: "/api/declaration/upload/",
        type: "post",
        data: {
          username: localStorage.getItem('username'),
          declarationArea: this.areaName,
          declarationElectricity: this.declarationElectricity,
          FMCapacity: this.FMCapacity,
          electricityPrice: this.electricityPrice,
          mileagePrice: this.mileagePrice,
          capacityPrice: this.capacityPrice,
          reviewState: '待审核'
        },
        success: resp => {
            if(resp.result === 'success') {
              var toastEl = document.getElementById('liveToast');
              var toast = new Toast(toastEl, {
                autohide: true,
                delay: 1000000
              });
              toast.show();
              console.log(resp);
              this.message = '申报成功';

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
    }
  },
  name: 'HomeView',
  components: {
    // ContentBase,
    // OffCanvas,
  }
}
</script>

<style scoped>
span {
    color: white;
}
form {
    color: white;
}
button {
    align-self: center;
    margin-bottom: 20px;
}
input {
    background-color: rgba(6, 52, 152, 0.75); /* 这里的alpha值（即0.5）代表透明度，范围从0到1 */
    opacity: 0.5; /* 也可以直接使用opacity属性来设置透明度 */
    border-color: rgba(17, 95, 176, 0.8);
    color: white;
}
#textStyle {
  font-size: 18px;
}

.toast-custom {
  color: white; /* 文本颜色 */
  border-radius: 0.25rem; /* 圆角 */
  border: none; /* 移除边框 */
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1); /* 添加阴影 */
}

.toast-custom .toast-header {
  display: flex;
  align-items: center;
  justify-content: center; /* 水平居中 */
  text-align: center; /* 垂直居中 */
  
  background-color: #00166d; /* 头部背景色 */
  color: white; /* 头部文本颜色 */
  border-bottom: 1px solid rgba(255, 255, 255, 0.2); /* 头部下边框 */
}

/* 动画效果 */
.toast.show {
  opacity: 1;
  transition: opacity 0.5s, transform 0.5s;
}

.toast:not(.show) {
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 0.5s, transform 0.5s;
}
</style>
