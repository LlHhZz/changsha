<template>
  <!-- Toast容器 -->
  <div class="position-fixed p-3" style="z-index: 5; left: 72vw; top: 8vh;">
    <div id="liveToast1" class="toast toast-custom" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <strong class="mr-auto">{{message}}</strong>
      </div>
    </div>
  </div>

<nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
  <div v-if="navBarControl.position === ''">
    <router-link class="navbar-brand" :to="{name: 'login'}" style="color: white; margin-left: 41.5vw;">电动汽车效益评估功能软件模块</router-link>
  </div>
  <div v-if="navBarControl.position === '管理端'" class="container-fluid d-flex justify-content-center">
    <svg @click="goBack" t="1715007662379" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4243" width="30" height="30"><path d="M548.5 690h0.1c3.6 0 36.1-0.8 69.1-19.4 20.5-11.6 36.9-27.5 48.7-47.3 14.1-23.6 21.2-52.3 21.2-85.1 0-32.7-6.9-61.3-20.7-85-11.5-19.9-27.5-36-47.5-47.9-32.4-19.3-64.5-20.6-68-20.7H440.9v-74.1L331.3 418.7 441 526.1v-71.4h108.9c1.9 0.1 18.2 1.6 33.9 10.9 22.8 13.6 33.9 37.4 33.9 72.7 0 34.1-10.6 57.1-32.5 70.3-17.1 10.3-35.4 11.3-37.2 11.4H404.3v-0.1h-10.7v0.1h-0.3c-19.3 0-35 15.7-35 35s15.7 35 35 35H548.5z" p-id="4244" fill="#ffffff"></path><path d="M925.6 337.9c-22.6-53.3-54.8-101.2-96-142.3-41.1-41.1-89-73.4-142.3-96C632.1 76.2 573.5 64.4 513 64.4S393.9 76.2 338.7 99.6c-53.3 22.6-101.2 54.8-142.3 96-41.1 41.1-73.4 89-96 142.3C77 393.1 65.2 451.8 65.2 512.2c0 60.4 11.8 119.1 35.2 174.3 22.6 53.3 54.8 101.2 96 142.3 41.1 41.1 89 73.4 142.3 96C393.9 948.2 452.6 960 513 960s119.1-11.8 174.3-35.2c35.9-15.2 69.3-34.8 99.8-58.5l-0.1-0.1c9.1-7.4 14.8-18.6 14.8-31.2 0-22.3-18-40.3-40.3-40.3-9.2 0-17.7 3.1-24.5 8.3l-0.2-0.3c-62 47.9-139.7 76.4-223.9 76.4-202.3 0-366.9-164.6-366.9-366.9s164.7-366.9 367-366.9 366.9 164.6 366.9 366.9c0 66.2-17.6 128.3-48.4 182l0.4 0.2c-4.4 6.5-7 14.2-7 22.6 0 22.3 18 40.3 40.3 40.3 16 0 29.8-9.3 36.3-22.8l0.2 0.1c8.9-15.5 16.8-31.5 23.8-48.1 23.4-55.2 35.2-113.9 35.2-174.3 0.1-60.4-11.7-119.1-35.1-174.3z" p-id="4245" fill="#ffffff"></path></svg>
    <span>&nbsp;&nbsp;&nbsp;</span>
    <router-link class="nav-link" style="color: white;" :to="{name: 'home', params: {}}">首页</router-link>
    <span>&nbsp;&nbsp;&nbsp;</span>
    <router-link class="nav-link" style="color: white;" :to="{name: 'declarationResults', params: {}}">出清结果</router-link>
    <span>&nbsp;&nbsp;&nbsp;</span>
    <router-link class="nav-link" style="color: white;" :to="{name: 'declarationAnalyse', params: {}}">结果评估</router-link>
    <span>&nbsp;&nbsp;&nbsp;</span>

    <input type="file" ref="fileInput" style="display: none;" @change="handleFileUpload"/>
    <label for="fileInput" @click="triggerFileInput" style="margin-right: 20%;">
      <svg t="1724729007018" class="icon" viewBox="0 0 1084 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10148" width="24" height="24"><path d="M1063.153 721.619L907.505 411.106a42.827 42.827 0 0 0-34.846-21.564H743.695c-13.312 0-24.094 10.782-24.154 24.094v40.96c0 13.161 10.842 24.004 24.154 24.004l41.05 0.09c13.162 0 28.913 9.758 34.786 21.685l110.291 222.418c5.873 11.867-0.18 21.535-13.402 21.535H741.135a24.154 24.154 0 0 0-24.094 24.094v125.982c0 13.252-10.842 24.094-24.124 24.094H389.33a24.154 24.154 0 0 1-24.034-24.004V768.331a24.154 24.154 0 0 0-24.154-24.003H162.485c-13.252 0-19.125-9.668-13.011-21.444l115.32-223.202a43.52 43.52 0 0 1 35.148-21.384h39.966c13.252 0 24.094-10.842 24.094-24.003v-40.569c0-13.252-10.842-24.094-24.094-24.094H211.426a42.883 42.883 0 0 0-34.937 21.534L20.18 721.86c-3.675 7.108-7.138 14.276-10.481 21.534 0.18 0 0.301 10.842 0.301 24.094v218.714c0 13.252 10.842 24.094 24.185 24.094h1016.23c13.341 0 24.184-10.842 24.184-24.033V767.247c0-13.312-0.181-24.094-0.302-24.094-0.18 0.09-5.21-9.668-11.083-21.504zM453.572 282.624v370.929h177.393V282.684h139.384c13.312 0 16.956-8.132 8.132-18.07L558.773 17.077a20.6 20.6 0 0 0-31.744 0.21L312.802 264.344c-8.674 10.089-4.88 18.281 8.373 18.281h132.427z" fill="#ffffff" p-id="10149"></path></svg>
    </label>
    
    <router-link class="navbar-brand" :to="{name: 'home'}" style="color: white; margin-right: 5%;">电动汽车效益评估功能软件模块</router-link>
    
    <router-link class="nav-link" style="color: white;" :to="{name: 'declarationResults', params: {}}">长沙市出清结果</router-link>
    <span>&nbsp;&nbsp;&nbsp;</span>
    <router-link class="nav-link" style="color: white;" :to="{name: 'declarationAnalyse', params: {}}">长沙市结果评估</router-link>
    <span>&nbsp;&nbsp;&nbsp;</span>
    <router-link class="nav-link" style="color: white;" :to="{name: 'userAuthManagement', params: {}}">用户认证管理</router-link>
    <span>&nbsp;&nbsp;&nbsp;</span>
    <router-link class="nav-link" style="color: white;" :to="{name: 'userDeclarationManagement', params: {}}">用户申报管理</router-link>
    <span>&nbsp;&nbsp;&nbsp;</span>
    <router-link class="nav-link" style="color: white;" :to="{name: 'login', params: {}}">
      <svg t="1720791432129" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6213" width="26" height="26"><path d="M497.985 1023.423A463.01 463.01 0 0 1 169.174 887.43a470.05 470.05 0 0 1-56.765-68.86 463.01 463.01 0 0 1-79.226-259.95 463.01 463.01 0 0 1 135.99-328.876 46.525 46.525 0 0 1 65.725 65.724 369.64 369.64 0 0 0-108.985 262.895 369.704 369.704 0 0 0 108.985 262.832 369.64 369.64 0 0 0 262.83 108.985 369.704 369.704 0 0 0 262.896-108.985 369.64 369.64 0 0 0 108.921-262.832 369.704 369.704 0 0 0-108.92-262.895 46.525 46.525 0 0 1 65.659-65.66c21.055 20.991 40.125 44.158 56.828 68.86A463.01 463.01 0 0 1 962.34 558.62a463.01 463.01 0 0 1-136.055 328.811c-20.99 20.991-44.157 40.062-68.796 56.765a453.987 453.987 0 0 1-79.035 42.75 458.85 458.85 0 0 1-180.468 36.477z m46.397-511.456V46.91a46.397 46.397 0 0 0-92.794 0v465.058a46.397 46.397 0 0 0 92.794 0z" p-id="6214" fill="#ffffff"></path></svg>
    </router-link>
    <!--
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" style="color: white;" :to="{name: 'home', params: {}}">首页</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" style="color: white;" :to="{name: 'informationDeclaration', params: {}}">信息申报</router-link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" style="color: white;" :to="{name: 'login', params: {}}">登录</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" style="color: white;" :to="{name: 'register', params: {}}">注册</router-link>
        </li>
      </ul>
    </div>
    -->
  </div>
  <div v-if="navBarControl.position === '用户端'" class="container-fluid d-flex justify-content-center">
    <svg @click="goBack" t="1715007662379" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4243" width="30" height="30"><path d="M548.5 690h0.1c3.6 0 36.1-0.8 69.1-19.4 20.5-11.6 36.9-27.5 48.7-47.3 14.1-23.6 21.2-52.3 21.2-85.1 0-32.7-6.9-61.3-20.7-85-11.5-19.9-27.5-36-47.5-47.9-32.4-19.3-64.5-20.6-68-20.7H440.9v-74.1L331.3 418.7 441 526.1v-71.4h108.9c1.9 0.1 18.2 1.6 33.9 10.9 22.8 13.6 33.9 37.4 33.9 72.7 0 34.1-10.6 57.1-32.5 70.3-17.1 10.3-35.4 11.3-37.2 11.4H404.3v-0.1h-10.7v0.1h-0.3c-19.3 0-35 15.7-35 35s15.7 35 35 35H548.5z" p-id="4244" fill="#ffffff"></path><path d="M925.6 337.9c-22.6-53.3-54.8-101.2-96-142.3-41.1-41.1-89-73.4-142.3-96C632.1 76.2 573.5 64.4 513 64.4S393.9 76.2 338.7 99.6c-53.3 22.6-101.2 54.8-142.3 96-41.1 41.1-73.4 89-96 142.3C77 393.1 65.2 451.8 65.2 512.2c0 60.4 11.8 119.1 35.2 174.3 22.6 53.3 54.8 101.2 96 142.3 41.1 41.1 89 73.4 142.3 96C393.9 948.2 452.6 960 513 960s119.1-11.8 174.3-35.2c35.9-15.2 69.3-34.8 99.8-58.5l-0.1-0.1c9.1-7.4 14.8-18.6 14.8-31.2 0-22.3-18-40.3-40.3-40.3-9.2 0-17.7 3.1-24.5 8.3l-0.2-0.3c-62 47.9-139.7 76.4-223.9 76.4-202.3 0-366.9-164.6-366.9-366.9s164.7-366.9 367-366.9 366.9 164.6 366.9 366.9c0 66.2-17.6 128.3-48.4 182l0.4 0.2c-4.4 6.5-7 14.2-7 22.6 0 22.3 18 40.3 40.3 40.3 16 0 29.8-9.3 36.3-22.8l0.2 0.1c8.9-15.5 16.8-31.5 23.8-48.1 23.4-55.2 35.2-113.9 35.2-174.3 0.1-60.4-11.7-119.1-35.1-174.3z" p-id="4245" fill="#ffffff"></path></svg>
    <span>&nbsp;&nbsp;&nbsp;</span>
    <router-link class="nav-link" style="color: white;" :to="{name: 'home', params: {}}">首页</router-link>
    <span>&nbsp;&nbsp;&nbsp;</span>
    <router-link class="nav-link" style="color: white;" :to="{name: 'declarationResults', params: {}}">出清结果</router-link>
    <span>&nbsp;&nbsp;&nbsp;</span>
    <svg t="1724729007018" style="margin-right: 26%;" class="icon" viewBox="0 0 1084 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10148" width="24" height="24"><path d="M1063.153 721.619L907.505 411.106a42.827 42.827 0 0 0-34.846-21.564H743.695c-13.312 0-24.094 10.782-24.154 24.094v40.96c0 13.161 10.842 24.004 24.154 24.004l41.05 0.09c13.162 0 28.913 9.758 34.786 21.685l110.291 222.418c5.873 11.867-0.18 21.535-13.402 21.535H741.135a24.154 24.154 0 0 0-24.094 24.094v125.982c0 13.252-10.842 24.094-24.124 24.094H389.33a24.154 24.154 0 0 1-24.034-24.004V768.331a24.154 24.154 0 0 0-24.154-24.003H162.485c-13.252 0-19.125-9.668-13.011-21.444l115.32-223.202a43.52 43.52 0 0 1 35.148-21.384h39.966c13.252 0 24.094-10.842 24.094-24.003v-40.569c0-13.252-10.842-24.094-24.094-24.094H211.426a42.883 42.883 0 0 0-34.937 21.534L20.18 721.86c-3.675 7.108-7.138 14.276-10.481 21.534 0.18 0 0.301 10.842 0.301 24.094v218.714c0 13.252 10.842 24.094 24.185 24.094h1016.23c13.341 0 24.184-10.842 24.184-24.033V767.247c0-13.312-0.181-24.094-0.302-24.094-0.18 0.09-5.21-9.668-11.083-21.504zM453.572 282.624v370.929h177.393V282.684h139.384c13.312 0 16.956-8.132 8.132-18.07L558.773 17.077a20.6 20.6 0 0 0-31.744 0.21L312.802 264.344c-8.674 10.089-4.88 18.281 8.373 18.281h132.427z" fill="#ffffff" p-id="10149"></path></svg>
    <router-link class="navbar-brand" :to="{name: 'home'}" style="color: white; margin-right: 30%;">电动汽车效益评估功能软件模块</router-link>
    
    <router-link class="nav-link" style="color: white;" :to="{name: 'declarationRecords', params: {}}">申报记录</router-link>
    <span>&nbsp;&nbsp;&nbsp;</span>
    <router-link class="nav-link" style="color: white;" :to="{name: 'login', params: {}}">
      <svg t="1720791432129" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6213" width="26" height="26"><path d="M497.985 1023.423A463.01 463.01 0 0 1 169.174 887.43a470.05 470.05 0 0 1-56.765-68.86 463.01 463.01 0 0 1-79.226-259.95 463.01 463.01 0 0 1 135.99-328.876 46.525 46.525 0 0 1 65.725 65.724 369.64 369.64 0 0 0-108.985 262.895 369.704 369.704 0 0 0 108.985 262.832 369.64 369.64 0 0 0 262.83 108.985 369.704 369.704 0 0 0 262.896-108.985 369.64 369.64 0 0 0 108.921-262.832 369.704 369.704 0 0 0-108.92-262.895 46.525 46.525 0 0 1 65.659-65.66c21.055 20.991 40.125 44.158 56.828 68.86A463.01 463.01 0 0 1 962.34 558.62a463.01 463.01 0 0 1-136.055 328.811c-20.99 20.991-44.157 40.062-68.796 56.765a453.987 453.987 0 0 1-79.035 42.75 458.85 458.85 0 0 1-180.468 36.477z m46.397-511.456V46.91a46.397 46.397 0 0 0-92.794 0v465.058a46.397 46.397 0 0 0 92.794 0z" p-id="6214" fill="#ffffff"></path></svg>
    </router-link>
    <!--
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" style="color: white;" :to="{name: 'home', params: {}}">首页</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" style="color: white;" :to="{name: 'informationDeclaration', params: {}}">信息申报</router-link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" style="color: white;" :to="{name: 'login', params: {}}">登录</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" style="color: white;" :to="{name: 'register', params: {}}">注册</router-link>
        </li>
      </ul>
    </div>
    -->
  </div>
</nav>
</template>

<script>
import { useRouter } from 'vue-router';
import { watch, computed } from "vue";
import { useStore } from "vuex"
import { Toast } from 'bootstrap';
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      value: '',
      port: '',
      message: '',
    };
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      const files = event.target.files;
      if(files.length > 0) {
        const file = files[0];
        if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        // 文件类型正确，可以执行上传
        this.uploadFile(file);
      } else {
        // 文件类型不正确，提示用户
        alert('请上传符合要求的excel数据文件');
      }
      }
    },
    uploadFile(file) {
      var toastEl = document.getElementById('liveToast1');
      var toast = new Toast(toastEl, {
        autohide: true,
        delay: 800
      });

      const formData = new FormData();
      formData.append('file', file);
      formData.append('username', localStorage.getItem('username'));
      axios.post('http://8.148.13.44:9000/api/data/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then(response => {
        console.log(response.data.result);
        if(response.data.result == 'success') {
          this.message = '数据上传成功';
          toast.show();
        }
      }).catch(error => {
        this.message = '数据上传失败，错误：' + error;
        toast.show();
      });
    }
  },
  mounted() {
    this.name = localStorage.getItem('name');
    this.value = localStorage.getItem('value');
    this.port = localStorage.getItem('port');
  },
  setup() {
    const router = useRouter(); // 引入路由实例

    const goBack = () => {
      router.back(); // 调用back方法返回上一页
    };

    const navBarControl = computed(() => useStore().state.navBarControl)

    watch(navBarControl.value, (newValue, oldValue) => {
      // 当 navBarControl 变化时，这里的代码会执行
      console.log('navBarControl 变化了：', newValue, oldValue);
      // 这里可以执行一些逻辑，例如更新路由或者执行其他操作
    }, {
      deep: true, // 如果你想要深度观察 navBarControl 对象的变化，则设置 deep: true
      immediate: true // 如果你希望在观察开始后立即执行一次回调，则设置 immediate: true
    });

    return { navBarControl, goBack };
  },
  name: "NavBar",
}
</script>

<style scoped>
nav {
  background: url('../assets/images/bg.jpg');
}
.icon {
  cursor: pointer;
}

.toast-custom {
  background-color: #abc8f4; /* 成功的背景色 */
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
  padding: 2vh 3vh;
  background-color: #00166d; /* 头部背景色 */
  color: white; /* 头部文本颜色 */
  border-bottom: 1px solid rgba(255, 255, 255, 0.2); /* 头部下边框 */
}

.toast-custom .toast-body {
  font-size: 1rem; /* 主体文本大小 */
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