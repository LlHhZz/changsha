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

    <!-- <table v-if="port==='用户端'" class="table table-striped table-hover">
        <thead>
            <tr>
                <th scope="col">序号</th>
                <th scope="col">用户编号</th>
                <th scope="col">用户名</th>
                <th scope="col">申报额度</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>100</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>88</td>
            </tr>
            <tr>
                <td>101</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>104</td>
            </tr>
            <tr>
                <td>102</td>
                <td colspan="2">Larry the Bird</td>
                <td>204</td>
            </tr>
            <tr>
                <td>103</td>
                <td>Brown</td>
                <td>Thornton</td>
                <td>154</td>
            </tr>
            <tr>
                <td>104</td>
                <td>Harws</td>
                <td>Thornton</td>
                <td>168</td>
            </tr>
        </tbody>
    </table> -->
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th scope="col">编号</th>
                <th scope="col">聚合商</th>
                <th scope="col">申报区域</th>
                <th scope="col">申报电量</th>
                <th scope="col">电量价格</th>
                <th scope="col">调频容量</th>
                <th scope="col">容量价格</th>
                <th scope="col">里程价格</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="declaration in use_list" :key="declaration.id">
                <td>{{ declaration.id }}</td>
                <td>{{ declaration.username }}</td>
                <td>{{ declaration.declarationArea }}</td>
                <td>{{ declaration.declarationElectricity }}</td>
                <td>{{ declaration.electricityPrice }}</td>
                <td>{{ declaration.FMCapacity }}</td>
                <td>{{ declaration.capacityPrice }}</td>
                <td>{{ declaration.mileagePrice }}</td>
            </tr>   
        </tbody>
    </table>
</template>

<script>
import $ from 'jquery';
import { Toast } from 'bootstrap';

export default {
    name: "DeclaredMerchantsTables",
    data() {
        return {
            name: '',
            value: '',
            port: '',
            username: '',
            declaration_infos: [],
            message: '',
            authenticationCode: '',
            baseUrl: 'http://8.148.13.44:9000',

            totalPages: 1,
            currentPage: 1,
            pageSizes: [3, 5, 10, 15, 20, 25],
            pageSize: 10,
            use_list: [],
            totalItems: 0,
        };
    },
    mounted() {
        this.name = localStorage.getItem('name');
        this.value = localStorage.getItem('value');
        this.port = localStorage.getItem('port');
        this.username = localStorage.getItem('username');

        $.ajax({
        url: "http://8.148.13.44:9000/api/declaration/getinfos/",
        type: "get",
        success: resp => {
            if(resp.result === 'success') {
                this.declaration_infos = resp.declarationInfos;
                if(this.port === '管理端') {
                    this.use_list = this.declaration_infos.filter(item => item.reviewState === '已通过').slice(0, 6);
                } else if(this.port === '用户端') {
                    this.use_list = this.declaration_infos.filter(item => item.username === this.username);
                    this.use_list = this.use_list.filter(item => item.reviewState === '已通过').slice(0, 6);
                }
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
  }
}
</script>

<style scoped>
.table {
  font-size: 8px;
  width: 100%;
  height: 220px;
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
</style>