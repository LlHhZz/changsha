<template>
  <div class="loginav">

    <!--
      <div class="video">
        <video src="../assets/loginimages/video.mp4" muted autoplay loop></video>
      </div>
    -->
    
    
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

		<div class="loginbox boxall">
      <div style="display: flex;">
        <div class="logintit">管理员账号授权</div>
      </div>
      <form @submit.prevent="register">
        <ul class="logininput">
				<li>
					<i><img src="../assets/loginimages/user.png"></i>
					<input class="forminput" value="" type="text" v-model="username" placeholder="用户名">
				</li>
				<li>
					<i><img src="../assets/loginimages/password.png"></i>
					<input class="forminput" type="password" v-model="password" value="" placeholder="密码">
				</li>

				<li class="row">
					<button type="submit" href="#" class="btn btnblock btn-lg btn-block btn-primary" style="background-color: #052a95; border-color: #052a95;">确认授权</button>
				</li>
		</ul>
      </form>
			
			<div class="boxfoot"></div>
		</div>
	</div>
  
</template>

<script>
// import ContentBase from '../components/ContentBase';
import $ from 'jquery';
import { Toast } from 'bootstrap';

export default {
  data() {
    return {
      username: '',
      password: '',
      port: '管理端',
      message: '',
    };
  },
  methods: {
    register() {
      localStorage.setItem('port', this.port);
      
        $.ajax({
            url: "/api/register/",
            type: "POST",
            contentType: "application/x-www-form-urlencoded",
            data: {
            'username': this.username,
            'password': this.password
            },
            success: resp => {
                if(resp.result === 'success') {
                    var toastEl = document.getElementById('liveToast');
                    var toast = new Toast(toastEl, {
                        autohide: true,
                        delay: 300
                    });
                    toast.show();
                    this.message = '授权成功';
                } else {
                var toastEl2 = document.getElementById('liveToast');
                    var toast2 = new Toast(toastEl2, {
                        autohide: true,
                        delay: 300
                    });
                    toast2.show();
                    this.message = resp.result;
                }
            },
            error: resp => {
                var toastEl3 = document.getElementById('liveToast');
                var toast3 = new Toast(toastEl3, {
                    autohide: true,
                    delay: 300
                });
                toast3.show();
                console.log(resp);
                this.message = '请求失败';
            }
        })
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
