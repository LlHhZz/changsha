<template>
<nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
  <div class="container d-flex justify-content-center">
    <svg @click="goBack" t="1715007662379" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4243" width="30" height="30"><path d="M548.5 690h0.1c3.6 0 36.1-0.8 69.1-19.4 20.5-11.6 36.9-27.5 48.7-47.3 14.1-23.6 21.2-52.3 21.2-85.1 0-32.7-6.9-61.3-20.7-85-11.5-19.9-27.5-36-47.5-47.9-32.4-19.3-64.5-20.6-68-20.7H440.9v-74.1L331.3 418.7 441 526.1v-71.4h108.9c1.9 0.1 18.2 1.6 33.9 10.9 22.8 13.6 33.9 37.4 33.9 72.7 0 34.1-10.6 57.1-32.5 70.3-17.1 10.3-35.4 11.3-37.2 11.4H404.3v-0.1h-10.7v0.1h-0.3c-19.3 0-35 15.7-35 35s15.7 35 35 35H548.5z" p-id="4244" fill="#ffffff"></path><path d="M925.6 337.9c-22.6-53.3-54.8-101.2-96-142.3-41.1-41.1-89-73.4-142.3-96C632.1 76.2 573.5 64.4 513 64.4S393.9 76.2 338.7 99.6c-53.3 22.6-101.2 54.8-142.3 96-41.1 41.1-73.4 89-96 142.3C77 393.1 65.2 451.8 65.2 512.2c0 60.4 11.8 119.1 35.2 174.3 22.6 53.3 54.8 101.2 96 142.3 41.1 41.1 89 73.4 142.3 96C393.9 948.2 452.6 960 513 960s119.1-11.8 174.3-35.2c35.9-15.2 69.3-34.8 99.8-58.5l-0.1-0.1c9.1-7.4 14.8-18.6 14.8-31.2 0-22.3-18-40.3-40.3-40.3-9.2 0-17.7 3.1-24.5 8.3l-0.2-0.3c-62 47.9-139.7 76.4-223.9 76.4-202.3 0-366.9-164.6-366.9-366.9s164.7-366.9 367-366.9 366.9 164.6 366.9 366.9c0 66.2-17.6 128.3-48.4 182l0.4 0.2c-4.4 6.5-7 14.2-7 22.6 0 22.3 18 40.3 40.3 40.3 16 0 29.8-9.3 36.3-22.8l0.2 0.1c8.9-15.5 16.8-31.5 23.8-48.1 23.4-55.2 35.2-113.9 35.2-174.3 0.1-60.4-11.7-119.1-35.1-174.3z" p-id="4245" fill="#ffffff"></path></svg>
    <span>&nbsp;&nbsp;&nbsp;</span>
    <router-link class="nav-link" style="color: white;" :to="{name: 'home', params: {}}">首页</router-link>
    <span>&nbsp;&nbsp;&nbsp;</span>
    <router-link class="nav-link" style="color: white;" :to="{name: 'declarationResults', params: {}}">出清结果</router-link>
    <span>&nbsp;&nbsp;&nbsp;</span>
    <router-link class="nav-link" style="color: white; margin-right: 20%;" :to="{name: 'declarationAnalyse', params: {}}">结果评估</router-link>
    <router-link class="navbar-brand" :to="{name: 'home'}" style="color: white; margin-right: 13%;">电动汽车效益评估功能软件模块</router-link>
    <router-link class="nav-link" style="color: white;" :to="{name: 'declarationResults', params: {}}">长沙市出清结果</router-link>
    <span>&nbsp;&nbsp;&nbsp;</span>
    <router-link class="nav-link" style="color: white;" :to="{name: 'declarationAnalyse', params: {}}">长沙市结果评估</router-link>
    <span>&nbsp;&nbsp;&nbsp;</span>
    <router-link class="nav-link" style="color: white;" :to="{name: 'userAuthManagement', params: {}}">用户认证管理</router-link>
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
export default {
  data() {
    return {
      name: '',
      value: '',
      port: '',
    };
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

    return { goBack };
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
</style>