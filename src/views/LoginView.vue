<template>
  <!-- Toast容器 -->
  <div class="position-fixed p-3" style="z-index: 5; left: 72vw; top: 8vh;">
    <div id="liveToast" class="toast toast-custom" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <strong class="mr-auto">{{message}}</strong>
      </div>
    </div>
  </div>

  <div class="loginav">

    <!--
      <div class="video">
        <video src="../assets/loginimages/video.mp4" muted autoplay loop></video>
      </div>
    -->

		<div class="loginbox boxall">
      <div style="display: flex;">
        <div class="logintit">账户登录 {{ port }}</div>
        <svg v-if="port === '管理端'" @click="onChangePortTap" t="1714924565927" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3240" width="30" height="30"><path d="M512 0a510.592 510.592 0 0 1 416 214.208V128A48 48 0 1 1 1024 128v192a48 48 0 0 1-48 48H768a48 48 0 1 1 0-96h83.52A415.04 415.04 0 0 0 512 96 416 416 0 1 0 928 512 48 48 0 1 1 1024 512a512 512 0 1 1-512-512z m102.592 527.36c68.096 0 121.408 49.152 121.408 112v47.36c0 10.688-7.232 17.28-18.816 17.28H306.816c-11.584 0-18.816-6.592-18.816-17.28v-47.36c0-62.848 53.312-112 121.408-112zM512 256c68.096 0 121.408 49.152 121.408 112C633.408 430.72 580.096 480 512 480S390.592 430.72 390.592 368C390.592 305.152 443.904 256 512 256z" fill="#00b9ee" p-id="3241"></path></svg>
        <svg v-else @click="onChangePortTap" t="1714924695755" class="icon" viewBox="0 0 1086 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4328" width="30" height="30"><path d="M425.664 1001.728a30.144 30.144 0 0 1-20.224-38.016 30.016 30.016 0 0 1 37.952-20.096 451.648 451.648 0 0 0 131.84 19.2 450.496 450.496 0 0 0 449.984-449.984 448 448 0 0 0-72.512-245.632l-63.616 66.88-70.08-237.376 240.512 58.112-64 67.648a35.072 35.072 0 0 1 3.968 4.608 508.928 508.928 0 0 1 87.04 285.76 511.488 511.488 0 0 1-511.04 510.976 512 512 0 0 1-149.824-22.08zM90.88 869.12l64-67.648a35.456 35.456 0 0 1-3.904-4.48 508.928 508.928 0 0 1-87.04-285.76A511.232 511.232 0 0 1 574.976 0.256a499.776 499.776 0 0 1 149.504 22.4 30.144 30.144 0 0 1 20.224 38.016 30.464 30.464 0 0 1-37.952 20.096 451.648 451.648 0 0 0-131.84-19.2 450.496 450.496 0 0 0-449.984 449.984 448.32 448.32 0 0 0 72.448 245.504l64-67.008 70.08 237.248z m443.84-58.496a43.264 43.264 0 0 1-43.328-43.648v-32.896c-5.76-2.112-11.584-4.736-17.344-7.232l-22.72 22.72a42.56 42.56 0 0 1-30.72 12.8 42.304 42.304 0 0 1-30.336-12.224l-54.912-54.848a43.328 43.328 0 0 1 0-61.376l24.192-24.256c-2.496-5.376-4.672-10.88-6.848-16.256h-33.216a43.264 43.264 0 0 1-43.328-43.392V472.768a43.264 43.264 0 0 1 43.328-43.392h35.008a129.216 129.216 0 0 1 6.4-15.872l-24.192-24.128a43.008 43.008 0 0 1-12.8-30.72 42.688 42.688 0 0 1 12.8-30.656l54.528-54.656a42.496 42.496 0 0 1 30.72-12.8 43.072 43.072 0 0 1 30.72 12.8l24.576 24.64 15.872-6.4v-33.984a43.328 43.328 0 0 1 43.328-43.392H613.76a43.328 43.328 0 0 1 43.328 43.392v33.984c5.76 2.112 11.2 4.224 16.64 6.848l23.488-23.488a42.56 42.56 0 0 1 30.72-12.8 43.776 43.776 0 0 1 30.72 12.224l54.528 54.848a43.328 43.328 0 0 1 0 61.376l-23.104 23.488c2.56 5.376 4.672 11.264 6.848 17.024h32a43.584 43.584 0 0 1 43.712 43.648v76.8a43.392 43.392 0 0 1-43.712 43.392h-32c-2.176 6.4-4.672 11.904-7.232 17.984l22.016 22.016a43.008 43.008 0 0 1 12.8 30.72 42.688 42.688 0 0 1-12.8 30.656l-54.528 54.656a43.072 43.072 0 0 1-30.72 12.8 43.072 43.072 0 0 1-30.72-12.8l-22.784-22.72a339.2 339.2 0 0 1-17.664 7.104v31.488a43.52 43.52 0 0 1-43.328 43.648z m-50.176-147.648a175.424 175.424 0 0 0 45.12 19.2l22.784 6.4v60.992h41.92v-60.608l23.104-5.504a174.592 174.592 0 0 0 45.888-18.752l20.608-11.904 42.624 42.624 29.632-29.632-42.624-42.624 12.288-20.224a172.8 172.8 0 0 0 19.2-45.888l5.76-23.104h60.672v-41.856h-60.672l-5.76-22.72a174.848 174.848 0 0 0-19.2-45.504l-12.288-20.224 43.712-43.648-29.632-29.632-43.712 43.648-20.224-12.224a175.232 175.232 0 0 0-44.8-18.368l-23.104-5.76v-62.848h-41.92v62.848l-22.784 5.76a172.8 172.8 0 0 0-44.416 18.368l-20.224 11.648-44.8-44.8-29.632 29.632 44.416 44.352-11.904 20.608a163.136 163.136 0 0 0-18.752 44.096l-6.4 22.4h-63.232v41.856h62.464l5.76 23.488a185.6 185.6 0 0 0 18.048 44.8l11.584 20.224-43.712 44.032 29.632 29.632 43.328-43.392zM455.68 513.088a120.064 120.064 0 0 1 119.552-120 120.128 120.128 0 0 1 119.872 120A120.128 120.128 0 0 1 575.232 632.96 120 120 0 0 1 455.68 512.96z m61.056 0a58.816 58.816 0 0 0 58.496 58.88 58.88 58.88 0 0 0 58.88-58.88 58.88 58.88 0 0 0-58.88-58.88 58.816 58.816 0 0 0-58.56 58.752z" fill="#00b9ee" p-id="4329"></path></svg>
      </div>
      <form @submit.prevent="login">
        <ul class="logininput">
				<li>
					<i><img src="../assets/loginimages/user.png"></i>
					<input class="forminput" value="" type="text" v-model="username" placeholder="用户名">
				</li>
				<li>
					<i><img src="../assets/loginimages/password.png"></i>
					<input v-if="port === '管理端'" class="forminput" type="password" v-model="password" value="" placeholder="密码">
          <input v-else class="forminput" type="password" v-model="password" value="" placeholder="认证码">
				</li>


				<div class=" flex1" style="padding: 15px 0;">
					<label> <input type="checkbox" checked class="aui-checkbox">&nbsp;记住密码</label>
					<a href="#" class="text-primary"> 忘记密码？</a>
				</div>
				<li class="row">
					<button :disabled="onLoading" type="submit" href="#" class="btn btnblock btn-lg btn-block btn-primary" style="background-color: #052a95; border-color: #052a95; display: flex; align-items: center; justify-content: center;">
            <div class="spinner-border text-light" role="status" v-if="onLoading" style="opacity: 0.85; margin-right: 20px;">
            </div>
            确认登录
          </button>
				</li>
        <div class=" flex1" style="padding: 15px 0;">
					<label> &nbsp;其他登录方式</label>
          <router-link class="text-primary" :to="{name: 'register'}">注册账号</router-link>
				</div>
			</ul>
      </form>
			
			<div class="boxfoot"></div>
		</div>
	</div>

  <!--

    <div class="container col-3">
    <div class="row">
      <h4 class="col-10">账户登录 {{ port }} </h4>
      <svg v-if="port === '管理端'" @click="onChangePortTap" t="1714838261893" class="icon col-2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5582" width="40" height="40"><path d="M153.6 153.6h307.2V102.4H102.4v256H0l102.4 153.6h51.2l102.4-153.6H153.6V153.6zM409.6 358.4a102.4 102.4 0 1 0 102.4-102.4 102.4 102.4 0 0 0-102.4 102.4zM921.6 512h-51.2l-102.4 153.6h102.4v204.8h-307.2v51.2h358.4v-256h102.4l-102.4-153.6z" fill="#ffffff" p-id="5583"></path><path d="M716.8 665.6v-51.2a102.4 102.4 0 0 0-102.4-102.4H409.6a102.4 102.4 0 0 0-102.4 102.4v51.2a102.4 102.4 0 0 0 102.4 102.4h204.8a102.4 102.4 0 0 0 102.4-102.4z" fill="#ffffff" p-id="5584"></path></svg>
      <svg v-else @click="onChangePortTap" t="1714838615832" class="col-2 icon" viewBox="0 0 1207 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5947" width="40" height="40"><path d="M1197.313248 481.602127c-12.703589-12.703589-33.120071-12.703589-45.82366 0L1115.874169 517.217545v-5.217545C1115.874169 230.025698 885.848471 0 603.874169 0c-162.651307 0-317.589721 78.716881-414.227736 210.970315-10.208241 14.064688-7.712893 35.615419 7.712894 45.823659 14.064688 10.208241 35.615419 7.712893 45.823659-7.712893 83.934426-115.693398 218.456358-184.202038 360.691183-184.202038 246.358883 0 447.120957 200.762074 447.120957 447.120957v4.990696l-35.615418-35.615419c-12.703589-12.703589-33.120071-12.703589-45.82366 0s-12.703589 33.120071 0 45.82366l91.42047 91.420469c6.351794 6.351794 15.198937 10.208241 22.911829 10.208241 8.847142 0 16.560035-3.856447 22.91183-10.208241l91.42047-91.420469c13.157288-12.703589 13.157288-32.893221-0.907399-45.59681zM964.792202 774.918919c-83.934426 115.693398-218.456358 184.202038-360.691183 184.202038-246.358883 0-447.120957-200.762074-447.120957-447.120957v-4.990696l35.615419 35.615419c6.351794 6.351794 15.198937 10.208241 22.91183 10.208241 8.847142 0 16.560035-3.856447 22.911829-10.208241 12.703589-12.703589 12.703589-33.120071 0-45.82366l-91.647319-91.420469c-6.351794-6.351794-14.064688-10.208241-22.91183-10.208241-8.847142 0-16.560035 3.856447-22.91183 10.208241L9.527692 496.801063c-12.703589 12.703589-12.703589 33.120071 0 45.82366s33.120071 12.703589 45.823659 0l35.615419-35.615419v4.990696c0 281.974302 230.025698 512 512 512 162.651307 0 317.589721-78.716881 414.227736-210.970315 10.208241-14.064688 7.712893-35.615419-7.712893-45.823659-12.930439-9.981391-33.120071-6.124945-44.689411 7.712893z" p-id="5948" fill="#ffffff"></path><path d="M411.051839 445.986708c-1.361099 2.495348-2.495348 3.856447-4.990696 4.990696l-72.365086 7.712893c-11.34249 1.361099-20.416482 11.34249-20.416482 22.91183v62.156845c0 11.34249 8.847142 21.550731 20.416482 22.91183l72.365086 7.712893c2.495348 0 4.990696 2.495348 4.990696 4.990696 2.495348 7.712893 6.351794 16.560035 10.208241 24.046079 1.361099 2.495348 1.361099 4.990696-1.361099 7.712893L374.075321 666.938414c-7.712893 8.847142-6.351794 21.550731 1.361099 30.397873l44.462561 44.462561c7.712893 7.712893 21.550731 8.847142 30.397873 1.361099l55.805051-45.82366c2.495348-1.361099 4.990696-2.495348 7.712893-1.361099 7.712893 3.856447 15.198937 7.712893 24.046079 10.208241 2.495348 1.361099 3.856447 2.495348 4.990696 4.990696l7.712893 72.365086c1.361099 11.34249 11.34249 20.416482 22.91183 20.416482h62.383695c11.34249 0 21.550731-8.847142 22.91183-20.416482l7.712893-72.365086c0-2.495348 2.495348-4.990696 4.990696-4.990696 7.712893-2.495348 16.560035-6.351794 24.046079-10.208241 2.495348-1.361099 4.990696-1.361099 7.712893 1.361099l55.805051 45.82366c8.847142 7.712893 21.550731 6.351794 30.397873-1.361099l44.462561-44.462561c7.712893-7.712893 8.847142-21.550731 1.361099-30.397873L789.437306 611.133363c-1.361099-2.495348-2.495348-4.990696-1.361099-7.712893 3.856447-7.712893 7.712893-15.198937 10.208241-24.046079 1.361099-2.495348 2.495348-3.856447 4.990696-4.990696l72.365086-7.712893c11.34249-1.361099 20.416482-11.34249 20.416482-22.91183v-62.156845c0-11.34249-8.847142-21.550731-20.416482-22.91183l-72.365086-7.712893c-2.495348 0-4.990696-2.495348-4.990696-4.990696-2.495348-7.712893-6.351794-16.560035-10.208241-24.046079-1.361099-2.495348-1.361099-4.990696 1.361099-7.712893l45.82366-55.805051c7.712893-8.847142 6.351794-21.550731-1.361099-30.397873L789.437306 283.562251c-7.712893-7.712893-21.550731-8.847142-30.397873-1.361099L703.234382 328.024812c-2.495348 1.361099-4.990696 2.495348-7.712893 1.361099-7.712893-3.856447-15.198937-7.712893-24.046079-10.208242-2.495348-1.361099-3.856447-2.495348-4.990696-4.990695l-7.712893-72.365087c-1.361099-11.34249-11.34249-20.416482-22.91183-20.416482h-62.156845c-11.34249 0-21.550731 8.847142-22.91183 20.416482l-7.712893 72.365087c0 2.495348-2.495348 4.990696-4.990696 4.990695-7.712893 2.495348-16.560035 6.351794-24.046079 10.208242-2.495348 1.361099-4.990696 1.361099-7.712893-1.361099l-55.805051-45.82366c-8.847142-7.712893-21.550731-6.351794-30.397873 1.361099l-44.462561 44.462561c-7.712893 7.712893-8.847142 21.550731-1.361099 30.397873l45.82366 55.805051c1.361099 2.495348 2.495348 4.990696 1.361099 7.712893-4.083296 8.847142-6.578644 16.333186-10.435091 24.046079z m97.772264 40.606114c11.34249-11.34249 30.397873-10.208241 41.967213 1.361099l31.758972 33.120071 76.221533-81.212229c11.34249-11.34249 29.263624-12.703589 41.967213-1.361098 11.34249 11.34249 12.703589 29.263624 1.361099 41.967213l-97.999114 102.762959c-4.990696 6.351794-12.703589 8.847142-21.550731 8.847143s-15.198937-3.856447-21.550731-8.847143l-53.309703-55.805051c-11.56934-11.56934-11.56934-30.624723 1.134249-40.832964z" p-id="5949" fill="#ffffff"></path></svg>
    </div>
    
    <form @submit.prevent="login">
      <div class="row mb-3">
        <label for="username">用户名:</label>
        <input type="text" class="form-control" id="username" v-model="username" placeholder="请输入用户名">
      </div>
      <div v-if="port === '管理端'" class="mb-3 row">
        <label for="password">密码:</label>
        <input type="password" class="form-control" id="password" v-model="password" placeholder="请输入密码">
      </div>
      <div v-else class="mb-3 row">
        <label for="password">认证码:</label>
        <input type="password" class="form-control" id="password" v-model="password">
      </div>
      <div class="row">
        <button class="btn btn-secondary">
              <router-link class="nav-link" :to="{name: 'register'}">转到注册</router-link>
          </button>
      </div>
      <div class="row">
        <button type="submit" class="btn btn-primary">确认登录</button>
      </div>
    </form>
  </div>
  -->
  
</template>

<script>
// import ContentBase from '../components/ContentBase';
// import $ from 'jquery';
import axios from 'axios';
import { Toast } from 'bootstrap';
import { useStore } from 'vuex';

export default {
  data() {
    return {
      username: '',
      password: '',
      port: '管理端',
      message: '',
      onLoading: false,

      baseUrl: 'http://8.148.13.44:9000',
    };
  },
  setup() {
    const store = useStore();

    return { store }
  },
  methods: {
    /*
    login() {
      this.onLoading = true;
      localStorage.setItem('port', this.port);
      const outer = this;
      if(this.port === '管理端') {
        $.ajax({
          url: "/api/login/",
          type: "POST",
          // contentType: "application/x-www-form-urlencoded",
          data: {
            'username': this.username,
            'password': this.password
          },
          success: (resp) => {
              if(resp.result === 'success') {
                // 记录username
                localStorage.setItem('username', this.username); 
                // 更改全局变量，控制navBar展示项 
                this.store.dispatch('updateNavBarControl', {
                  position: '管理端'
                });
                // console.log(this.store.state.navBarControl.position)
                var toastEl = document.getElementById('liveToast');
                var toast = new Toast(toastEl, {
                  autohide: true,
                  delay: 1000
                });
                toast.show();
                this.message = '登录成功';
                toastEl.addEventListener('hidden.bs.toast', function () {
                  // Toast消失后，进行页面跳转
                  this.onLoading = false;
                  outer.$router.push({name: 'home', params: {}});
                });
              } else {
                var toastEl2 = document.getElementById('liveToast');
                var toast2 = new Toast(toastEl2, {
                  autohide: true,
                  delay: 1000
                });
                toast2.show();
                this.message = resp.result;
                this.onLoading = false;
              }
          },
          error: resp => {
              var toastEl3 = document.getElementById('liveToast');
              var toast3 = new Toast(toastEl3, {
                autohide: true,
                delay: 1000
              });
              toast3.show();
              console.log(resp);
              this.message = '请求失败';
              this.onLoading = false;
          }
        })
      } else {
        $.ajax({
          url: "/api/login2/",
          type: "POST",
          // contentType: "application/x-www-form-urlencoded",
          data: {
            'username': this.username,
            'password': this.password
          },
          success: resp => {
              if(resp.result === 'success') {
                // 记录username
                localStorage.setItem('username', this.username);
                // 更改全局变量，控制navBar展示项 
                this.store.dispatch('updateNavBarControl', {
                  position: '用户端'
                });

                var toastEl = document.getElementById('liveToast');
                var toast = new Toast(toastEl, {
                  autohide: true,
                  delay: 1000
                });
                toast.show();
                this.message = '登录成功';
                toastEl.addEventListener('hidden.bs.toast', function () {
                  // Toast消失后，进行页面跳转
                  this.onLoading = false;
                  outer.$router.push({name: 'home', params: {}});
                });
              } else {
                var toastEl2 = document.getElementById('liveToast');
                var toast2 = new Toast(toastEl2, {
                  autohide: true,
                  delay: 1000
                });
                toast2.show();
                this.message = resp.result;
                this.onLoading = false;
              }
          },
          error: resp => {
              var toastEl3 = document.getElementById('liveToast');
              var toast3 = new Toast(toastEl3, {
                autohide: true,
                delay: 1000
              });
              toast3.show();
              console.log(resp);
              this.message = '请求失败';
              this.onLoading = false;
          }
        })
      }
    },
    */
   login() {
    this.onLoading = true;
    localStorage.setItem('port', this.port);
    const vm = this; // 使用 vm 代替 outer，以避免混淆

    const loginUrl = this.port === '管理端' ? "/api/login/" : "/api/login2/";

    axios.post(loginUrl , {
      'username': this.username,
      'password': this.password
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(function (response) {
      if(response.data.result === 'success') {
        localStorage.setItem('username', vm.username);
        vm.store.dispatch('updateNavBarControl', {
          position: vm.port
        });

        var toastEl = document.getElementById('liveToast');
        var toast = new Toast(toastEl, {
          autohide: true,
          delay: 1000
        });
        toast.show();
        vm.message = '登录成功';

        toastEl.addEventListener('hidden.bs.toast', function () {
          vm.onLoading = false;
          vm.$router.push({name: 'home', params: {}});
        });
      } else {
        var toastEl2 = document.getElementById('liveToast');
        var toast2 = new Toast(toastEl2, {
          autohide: true,
          delay: 1000
        });
        toast2.show();
        vm.message = response.data.result;
        vm.onLoading = false;
      }
    })
    .catch(function (error) {
      var toastEl3 = document.getElementById('liveToast');
      var toast3 = new Toast(toastEl3, {
        autohide: true,
        delay: 1000
      });
      toast3.show();
      console.log(error);
      vm.message = '请求失败';
      vm.onLoading = false;
    });
  },
    onChangePortTap() {
      if(this.port == '管理端') {
        this.port = '用户端'
      } else {
        this.port = '管理端'
      }
    }
  },
  name: 'HomeView',
  components: {
    // ContentBase,
  }
}
</script>

<style scoped>
/*
.container {
  color: white;
}
svg {
  cursor: pointer;
}
input {
  opacity: 0.55;
}
button {
  opacity: 0.85;
}
*/

*{ padding: 0; margin: 0; box-sizing: border-box; user-select: none;}
li{list-style-type: none;}
a{text-decoration: none; color: #fff;}
html{background: #000; height: 100%;}
body{ background: #000;
  font-family: "PingFang SC","Lantinghei SC","Microsoft YaHei","HanHei SC","Helvetica Neue","Open Sans",Arial,"Hiragino Sans GB","微软雅黑",STHeiti,"WenQuanYi Micro Hei",SimSun,sans-serif;}
body::before{ position: absolute; width: 100%; height: 100%; background: url(../assets/loginimages/bg.png) no-repeat left center; content: ""; left: 0; top: 0; z-index: 100; pointer-events: none;}
  .loginbg{background-image:linear-gradient(300deg,#004491,#1e88e5);position:absolute;width:100%;height:50%;left:0;top:0;z-index:0}
  .loginav{max-width: 900px; width: 50%; height: 50%; margin:0 auto;z-index:10;box-shadow:0 0 30px rgba(0,0,0,.1); display: flex; align-items: center; justify-content: center;}
  .video{ position: absolute;width: 900px; left: 0px; pointer-events: none;}
  .video video{width: 40%; opacity: 0.15;}
  .logotit{text-align:center;padding:10px 0;font-size:30px}
  .loginbox{padding:10px 0 10px 0; width: 420px; padding:30px 50px; margin-top: 8%; flex-shrink: 0; position: relative; z-index: 100;}
  .logininput .forminput{border:2px solid rgba(32,163,245,.4);
    font-family: "PingFang SC","Lantinghei SC","Microsoft YaHei","HanHei SC","Helvetica Neue","Open Sans",Arial,"Hiragino Sans GB","微软雅黑",STHeiti,"WenQuanYi Micro Hei",SimSun,sans-serif;
    display:block; padding-left:50px;font-size:18px;color:#fff;width:100%;line-height:48px;outline:0;text-indent:1px; background: rgba(32,163,245,.1);}

  input::input-placeholder{color:  #fff;} 
  ::-webkit-input-placeholder {  color: #fff;   } 


  .flex1{ display: flex; justify-content: space-between; align-items: center;} 
.flex1 label{color: #fff; display: flex; align-items: center;}
  .logininput>li{display:block;padding:15px 0;position:relative;}
  .logininput li>i{ position: absolute; height: 100%; left: 15px; top: 0; display: flex; align-items: center;}
  .logintit{color:#00bff4;text-align:center;position:relative;padding:25px 0;font-size:20px}
  .icon{cursor: pointer;margin:25px;margin-left: 115px;}
  .btn-primary{background:#20a3f5; display: block; text-align: center; color: #fff; line-height: 48PX; font-size: 24px;}
  .btn-primary:hover{background:#137bd6}
  .copyright{position:fixed;width:100%;left:0;bottom:10px;text-align:center;color:#006b95;font-size:12px}
  
  .logo{ position: absolute; top: -120px; width: 100%; left: 0;  text-align: center; color: #fff;}
  .logo h1,
  .logo h2{
    background: linear-gradient( 90deg,#009ef3, #00e9d0);
    background-size: cover;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }
  .logo h1{ font-weight: bolder; font-size: 48px; font-family: "Microsoft YaHei","HanHei SC";  letter-spacing: 2px;}
  .logo h2{ font-size: 30px; text-transform: uppercase; font-weight: lighter; letter-spacing: 2px;}

  .boxall{ border: 2px solid #186baf; background: rgba(32,163,245,.1); position: relative; transform: scale(.7); opacity: 0;  animation: shows 1s forwards;}
  @keyframes shows
  {
      to {transform: scale(1); opacity: 1;}
  }
  .boxall:before,
.boxall:after{ position:absolute; width:30px; height:30px; content: "";  border-top: 3px solid #20a3f5; top: -2px;}
.boxall:before,.boxfoot:before{border-left: 3px solid #20a3f5;left:-2px;}
.boxall:after,.boxfoot:after{border-right: 3px solid #20a3f5; right: -2px;}

.boxfoot{ position:absolute; bottom: 0; width: 100%; left:0;}
.boxfoot:before,
.boxfoot:after{ position:absolute; width:30px; height:30px;  content: "";border-bottom:3px solid #20a3f5; bottom:-2px;}


.aui-checkbox,input[type=radio]{width:24px;height:24px;background: rgba(32,163,245,.1);border:solid 2px rgba(32,163,245,.5);margin:0;padding:0;position:relative;cursor:default;-webkit-appearance:none;-webkit-user-select:none;user-select:none;-webkit-transition:background-color ease .1s;transition:background-color ease .1s; flex-shrink: 0; border-radius: 0;}
.aui-checkbox,input[type=radio]{margin:0 3px 0 0 !important;position:relative;}
.aui-checkbox:checked,
input[type=radio]:checked{text-align:center;background-clip:padding-box;}
.aui-checkbox:checked:after,
.aui-checkbox:checked:before,
input[type=radio]:checked:after,
input[type=radio]:checked:before{content:'';width:10px;height:5px;position:absolute;top:50%;left:50%;margin-left:-6px;margin-top:-5px;background:0 0;border:2px solid #439aff;border-top:none;border-right:none;z-index:2;-webkit-border-radius:0;border-radius:0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}
.aui-checkbox:disabled,
input[type=radio]:disabled{background-color:"#f5f5f";border:solid 1px #ddd}
.aui-checkbox:disabled:after,
.aui-checkbox:disabled:before,
input[type=radio]:disabled:after,
input[type=radio]:disabled:before{content:'';width:.5rem;height:.3rem;position:absolute;top:50%;left:50%;margin-left:-.25rem;margin-top:-.4rem;background:0 0;border:1px solid #fff;border-top:none;border-right:none;z-index:2;-webkit-border-radius:0;border-radius:0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}
input[type="radio"]{ border-radius: 20px;}
input{outline: none!important;}

@media (max-width: 1200px) {
  .loginav{justify-content: center;}
  .video{display: none;}
  .loginbox{width: 96%;}
  .logo h1{font-size: 30px;}
  .logo h2{font-size: 20px;}
  .loginbox{padding: 30px;}
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
  padding: 2vh 3vh;
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
