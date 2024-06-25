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
        <div class="logintit">账户注册</div>
      </div>
      
      <div class="accessPolicy">
        <h5>电动汽车需求响应市场准入政策</h5>
        <p>&nbsp;&nbsp;（一）具有独立法人资格、独立财务核算、信用良好、能够独立承担民事责任的经济实体，或经法人单位授权的非独立法人。 </p>
        <p>&nbsp;&nbsp;（二）应在市场运营机构进行注册，并提供（包括但不限于）：营业执照、银行开户许可证、法定代表人身份证、授权委托书等。</p>
        <p>&nbsp;&nbsp;（三）参与用户与电网企业、市场运营机构签订辅助服务技术服务（并网调度协议）和结算协议。聚合方式参与电力辅助服务的，应与其代理的第三方用户签订相应的技术服务合同，被代理方不再单独与电网企业、市场运营机构签订合同、协议。</p>
        <p>&nbsp;&nbsp;（四）满足电网接入要求，实现电力、电量数据分时计量与传输，数据及性能参数准确性与可靠性应当满足相应的规范要求，符合网络安全相关规定，并经电力调度机构技术测试或确认。</p>
        <p>&nbsp;&nbsp;通过调研湖南现有资源情况，并考虑市场平稳起步的要求，对参与用户的基本技术参数要求如下：</p>
        <p>&nbsp;&nbsp;（1）参与调峰辅助服务交易时，暂定调节容量不小于2.5MWh、调节功率不小于5MW，持续响应时间不小于1小时。</p>
        <p>&nbsp;&nbsp;（2）参与调频辅助服务时，暂定额定充电/放电功率不小于5MW、持续响应时间不小于2小时。</p>
        <p>&nbsp;&nbsp;（3）参与旋转备用辅助服务时，暂定调节容量不小于1MWh、调节功率不小于 1MW，持续响应时间不小于1小时。</p>
      </div>

      <!--
         <label for="authFile">认证资料提交:</label>
        <div class="row col-6" style="opacity: 0.25;">
          <input type="file" class="form-control" id="authFile" @change="handleFileChange">
        </div>

        <label for="authStatus">认证状态:</label>
          <div class="row col-6">
          <text id="authStatus" class="form-control">
            {{ authStatus }}
          </text>
        </div>

        <label v-if="authStatus === '通过'" for="authCode">认证码:</label>
        <div class="row">
          <button v-if="authStatus === '通过'" class="btn btnblock btn-lg btn-block btn-primary" style="background-color: #052a95; border-color: #052a95;" @click="getAuthCode">认证码提取</button>
        </div>
      -->
       
      <ul class="logininput">
        <li>
					<i><svg t="1714971161413" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9740" width="30" height="30"><path d="M815.104 69.632q27.648 25.6 44.032 42.496t25.088 28.672 10.752 19.968 2.048 14.336l0 16.384-151.552 0q-10.24 0-17.92-7.68t-12.8-17.92-7.68-20.992-2.56-16.896l0-126.976 3.072 0q8.192 0 16.896 2.56t19.968 9.728 28.16 20.48 42.496 35.84zM640 129.024q0 20.48 6.144 42.496t19.456 40.96 33.792 31.232 48.128 12.288l149.504 0 0 577.536q0 29.696-11.776 53.248t-31.232 39.936-43.008 25.6-46.08 9.216l-503.808 0q-19.456 0-42.496-11.264t-43.008-29.696-33.28-41.984-13.312-49.152l0-696.32q0-21.504 9.728-44.544t26.624-42.496 38.4-32.256 45.056-12.8l391.168 0 0 128zM704.512 768q26.624 0 45.056-18.944t18.432-45.568-18.432-45.056-45.056-18.432l-384 0q-26.624 0-45.056 18.432t-18.432 45.056 18.432 45.568 45.056 18.944l384 0zM768 448.512q0-26.624-18.432-45.568t-45.056-18.944l-384 0q-26.624 0-45.056 18.944t-18.432 45.568 18.432 45.056 45.056 18.432l384 0q26.624 0 45.056-18.432t18.432-45.056z" p-id="9741" fill="#00b9ee"></path></svg></i>
					<input class="forminput" v-model="username" type="text" placeholder="用户名">
				</li>
				<li>
					<i><svg t="1714971161413" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9740" width="30" height="30"><path d="M815.104 69.632q27.648 25.6 44.032 42.496t25.088 28.672 10.752 19.968 2.048 14.336l0 16.384-151.552 0q-10.24 0-17.92-7.68t-12.8-17.92-7.68-20.992-2.56-16.896l0-126.976 3.072 0q8.192 0 16.896 2.56t19.968 9.728 28.16 20.48 42.496 35.84zM640 129.024q0 20.48 6.144 42.496t19.456 40.96 33.792 31.232 48.128 12.288l149.504 0 0 577.536q0 29.696-11.776 53.248t-31.232 39.936-43.008 25.6-46.08 9.216l-503.808 0q-19.456 0-42.496-11.264t-43.008-29.696-33.28-41.984-13.312-49.152l0-696.32q0-21.504 9.728-44.544t26.624-42.496 38.4-32.256 45.056-12.8l391.168 0 0 128zM704.512 768q26.624 0 45.056-18.944t18.432-45.568-18.432-45.056-45.056-18.432l-384 0q-26.624 0-45.056 18.432t-18.432 45.056 18.432 45.568 45.056 18.944l384 0zM768 448.512q0-26.624-18.432-45.568t-45.056-18.944l-384 0q-26.624 0-45.056 18.944t-18.432 45.568 18.432 45.056 45.056 18.432l384 0q26.624 0 45.056-18.432t18.432-45.056z" p-id="9741" fill="#00b9ee"></path></svg></i>
					<input class="forminput" ref="fileInput" type="file" @change="handleFileChange" style="cursor: pointer;" />
				</li>
        <li class="row">
					<button type="submit" href="#" class="btn btnblock btn-lg btn-block btn-primary" style="background-color: #052a95; border-color: #052a95;" @click="submitFile">确认提交</button>
				</li>
				<li>
					<i><svg t="1714971435193" class="icon" viewBox="0 0 1331 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11663" width="30" height="30"><path d="M116.528287 1024A116.579486 116.579486 0 0 1 0 907.727707V116.246694A116.579486 116.579486 0 0 1 116.528287 0.025599h427.048524a55.448214 55.448214 0 1 1 0 110.845229H116.528287a5.478263 5.478263 0 0 0-5.478263 5.427065V907.778906c0 3.020724 2.457539 5.427064 5.478263 5.427064h1098.110147a5.478263 5.478263 0 0 0 5.478263-5.427064v-76.081298a55.448214 55.448214 0 1 1 111.101223 0l-0.051199 76.081298A116.579486 116.579486 0 0 1 1214.638434 1024H116.528287z" fill="#00b9ee" p-id="11664"></path><path d="M1275.360116 716.80768c-20.325892 0-39.935002-11.058924-49.816355-30.258444-50.174746-97.58476-155.900102-165.781455-257.068773-165.781455-104.80378 0-152.828179 26.060148-209.505162 77.20767a56.113797 56.113797 0 0 1-78.897228-3.788706 55.397015 55.397015 0 0 1 3.839904-78.487637C756.40989 450.215945 829.316867 409.61536 968.474988 409.61536c143.663608 0 286.968826 90.928927 356.547886 226.298342a55.448214 55.448214 0 0 1-24.319392 74.750131 55.294618 55.294618 0 0 1-25.343366 6.143847" fill="#00b9ee" p-id="11665"></path><path d="M455.924602 512.0128h-246.265843C178.683533 512.0128 153.59616 489.075773 153.59616 460.81408s25.087373-51.19872 56.062599-51.19872h246.265843C486.899828 409.61536 511.9872 432.552386 511.9872 460.81408s-25.087373 51.19872-56.062598 51.19872M966.631834 768.0064H210.938727C179.297918 768.0064 153.59616 745.069373 153.59616 716.80768s25.701757-51.19872 57.342567-51.19872h755.693107c31.640809 0 57.342566 22.937027 57.342567 51.19872s-25.701757 51.19872-57.342567 51.19872" fill="#00b9ee" p-id="11666"></path><path d="M947.176321 158.485638A123.235319 123.235319 0 0 0 824.043399 281.61856 123.235319 123.235319 0 0 0 947.176321 404.751481 123.235319 123.235319 0 0 0 1070.309242 281.61856 123.235319 123.235319 0 0 0 947.176321 158.485638M947.176321 512.0128A230.650234 230.650234 0 0 1 716.78208 281.61856C716.78208 154.645734 820.152296 51.224319 947.176321 51.224319S1177.570561 154.594535 1177.570561 281.61856C1177.570561 408.693783 1074.200345 512.0128 947.176321 512.0128" fill="#00b9ee" p-id="11667"></path></svg></i>
          <input class="forminput" v-model="authState" type="text" placeholder="认证状态" disabled>
				</li>
        <li>
					<i><svg t="1714971541655" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14235" width="30" height="30"><path d="M568.66 861.65l51.82 88.75H114.47c-37.67 0-66.63-14.76-79.24-44.78-7.97-19.12-7.4-34.13-2.93-59.14C69.8 639.3 176.7 551.04 434.83 551.04c40.11 0 172.14 1.05 196.87 2.58l-50.36 88.58c-48.82-1.67-97.66-2.47-146.51-2.42-219.65 0-286.52 70.19-314.34 221.86h448.25l-0.08 0.01z m-92.17-354.99c-123.56 0.01-223.72-99.32-223.73-221.85-0.01-122.53 100.14-221.87 223.7-221.87h0.03c123.56 0.01 223.71 99.35 223.7 221.88-0.01 122.51-100.16 221.84-223.7 221.84z m0-88.74c74.13 0 134.23-59.6 134.23-133.12 0-73.52-60.1-133.12-134.23-133.12s-134.23 59.6-134.23 133.12c0 73.52 60.09 133.12 134.23 133.12z" p-id="14236" fill="#00b9ee"></path><path d="M978.8 735.09c-5.63-5.48-13.45-8.56-21.62-8.5h-282.9c-9.01 0-14.41 3.41-21.62 8.5-5.85 5.42-9.1 12.78-9.01 20.43v137.93c0 6.82 1.8 13.62 3.61 20.42 1.8 6.82 5.41 11.93 10.81 17.04s10.81 8.5 18.02 11.91c6.66 3.28 14.08 5.03 21.62 5.11h232.45c9.01 0 16.2-1.69 23.42-5.11 7.21-3.41 12.61-6.8 18.02-11.91s9.01-10.23 12.61-17.04c3.6-6.8 3.6-13.6 3.6-22.12V757.22c0-8.5-1.8-15.32-9.01-22.13zM827.45 835.55v52.78c0 5.11-5.41 10.23-10.81 10.23-5.43 0-10.83-5.11-10.83-10.23v-52.78c-12.61-3.41-21.62-15.32-21.62-28.94 0-17.04 14.41-30.66 32.45-30.66 18.02 0 32.43 13.62 32.43 30.66 0 13.62-9.01 23.83-21.62 28.94z m-66.69-166.88c0-18.73 5.41-32.33 14.41-42.55 10.81-10.21 23.42-15.32 39.64-15.32 18.02 0 32.45 5.11 43.26 15.32 10.81 10.23 16.2 23.84 16.2 42.57v32.35h55.88v-44.26c0-13.64-3.6-27.25-9.01-39.16-5.41-11.93-14.41-22.14-25.23-32.37-10.81-8.5-23.42-17.03-36.04-22.12-14.41-5.11-27.03-8.52-43.24-8.52-16.24 0-32.45 3.41-45.07 8.52-13.68 4.74-26 12.3-36.04 22.12-10.81 8.52-18.02 20.43-23.42 32.37-5.41 11.91-9.01 25.53-9.01 39.15v44.28h57.66V668.7l0.01-0.03z" p-id="14237" fill="#00b9ee"></path></svg></i>
          <input class="forminput" v-model="authCode" type="text" placeholder="认证码" disabled>
				</li>
        <li class="row">
					<button href="#" class="btn btnblock btn-lg btn-block btn-primary" style="background-color: #052a95; border-color: #052a95;" @click="getAuthCode">提取认证码</button>
				</li>
				
        <div class=" flex1" style="padding: 15px 0;">
					<label> &nbsp;其他注册方式</label>
          <router-link class="text-primary" :to="{name: 'login'}">登录账号</router-link>
				</div>
			</ul>

    <!--
      <div class="row">
      <button style="margin-left: 10px;" class="col-2 btn btn-secondary">
            <router-link class="nav-link" :to="{name: 'login'}">转到登录</router-link>
      </button>
    </div>
    -->
    
			
			<div class="boxfoot"></div>
		</div>
	</div>
</template>

<script>
// import ContentBase from '../components/ContentBase';
import axios from 'axios';
import $ from 'jquery';
import { Toast } from 'bootstrap';

export default {
  data() {
    return {
      authState: '',
      authCode: '',
      username: '',
    };
  },
  methods: {
    handleFileChange(event) {
      this.file = event.target.files[0];
      console.log(this.file);
    },
    submitAuthData() {
      
    },
    getAuthCode() {
      $.ajax({
        url: "/api/auth/getCodeByUsername/",
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        data: {
          'username': this.username,
        },
        success: resp => {
            if(resp.result === 'success') {
              console.log(resp);
              var toastEl = document.getElementById('liveToast');
              var toast = new Toast(toastEl, {
                autohide: true,
                delay: 800
              });
              this.authState = resp.authState;
              this.authCode = resp.authCode;
              toast.show();
              this.message = '状态更新成功';
            } else {
              var toastEl2 = document.getElementById('liveToast');
              var toast2 = new Toast(toastEl2, {
                autohide: true,
                delay: 800
              });
              toast2.show();
              this.message = resp.result;
            }
        },
        error: resp => {
            var toastEl3 = document.getElementById('liveToast');
            var toast3 = new Toast(toastEl3, {
              autohide: true,
              delay: 800
            });
            toast3.show();
            console.log(resp);
            this.message = '请求失败';
        }
      })
    },
    triggerFileUpload() {
      document.querySelector('input[type="file"]').click();
    },
    submitFile() {
      if (!this.file) {
        alert('请先选择一个文件');
        return;
      }
      // 这里需要添加逻辑来将文件和用户名一起发送到后端
      // 你可以使用 axios 或其他 HTTP 客户端库来发送 POST 请求
      // 假设后端接口是 '/api/upload/'
      const formData = new FormData();
      formData.append('username', this.username);
      formData.append('file', this.file);

      axios.post('/api/auth/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then(response => {
        console.log('文件上传成功，响应：', response);
        // 处理后端返回的数据，例如更新认证状态等
      }).catch(error => {
        console.error('文件上传失败，错误：', error);
      });
    }
  },
  name: 'HomeView',
  components: {
    // ContentBase,
  }
}
</script>

<style scoped>
h5 {
  text-align: center;
}
.accessPolicy {
  color: white;
  opacity: 0.75;
  p {
    padding: 5px;
  }
}
label {
  color: white;
}

*{ padding: 0; margin: 0; box-sizing: border-box; user-select: none;}
li{list-style-type: none;}
a{text-decoration: none; color: #fff;}
html{background: #000; height: 100%;}
body{ background: #000;
  font-family: "PingFang SC","Lantinghei SC","Microsoft YaHei","HanHei SC","Helvetica Neue","Open Sans",Arial,"Hiragino Sans GB","微软雅黑",STHeiti,"WenQuanYi Micro Hei",SimSun,sans-serif;}
body::before{ position: absolute; width: 100%; height: 100%; background: url(../assets/loginimages/bg.png) no-repeat left center; content: ""; left: 0; top: 0; z-index: 100; pointer-events: none;}
  .loginbg{background-image:linear-gradient(300deg,#004491,#1e88e5);position:absolute;width:100%;height:50%;left:0;top:0;z-index:0}
  .loginav{max-width: 1200px; width: 50%; height: 50%; margin:0 auto;z-index:10;box-shadow:0 0 30px rgba(0,0,0,.1); display: flex; align-items: center; justify-content: center;}
  .video{ position: absolute;width: 900px; left: 0px; pointer-events: none;}
  .video video{width: 40%; opacity: 0.15;}
  .logotit{text-align:center;padding:10px 0;font-size:30px}
  .loginbox{padding:10px 0 10px 0; width: 650px; padding:30px 50px; flex-shrink: 0; position: relative; z-index: 100;}
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
  .loginbox{padding: 0px;}
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
</style>
