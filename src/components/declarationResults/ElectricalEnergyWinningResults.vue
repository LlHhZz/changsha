<template>
    <div class="table-container">
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <!-- <th scope="col">运行时间</th> -->
                    <th scope="col">中标类型</th>
                    <th scope="col">价格</th>
                    <!-- <th scope="col">光伏出力价格</th> -->
                    <th scope="col">开始时间</th>
                    <th scope="col">结束时间</th>
                </tr>
            </thead>
            <tbody v-if="P_dis.length">
                <tr>
                    <td>储能放电</td>
                    <td>{{P_dis[0]}}</td>
                    <!-- <td>{{P_pv[0]}}</td> -->
                    <td>2024-08-22 00:00:00</td>
                    <td>2022-08-22 24:00:00</td>
                </tr>
                <tr>
                    <td>光伏出力</td>
                    <td>{{P_pv[0]}}</td>
                    <!-- <td>XX</td> -->
                    <td>2024-08-23 00:00:00</td>
                    <td>2024-08-23 24:00:00</td>
                </tr>
                <tr>
                    <td>储能放电</td>
                    <td>{{P_dis[1]}}</td>
                    <!-- <td>{{P_pv[0]}}</td> -->
                    <td>2024-08-24 00:00:00</td>
                    <td>2022-08-24 24:00:00</td>
                </tr>
                <tr>
                    <td>光伏出力</td>
                    <td>{{P_pv[1]}}</td>
                    <!-- <td>XX</td> -->
                    <td>2024-08-25 00:00:00</td>
                    <td>2024-08-25 24:00:00</td>
                </tr>
                <tr>
                    <td>储能放电</td>
                    <td>{{P_pv[2]}}</td>
                    <!-- <td>XX</td> -->
                    <td>2024-08-26 00:00:00</td>
                    <td>2024-08-26 24:00:00</td>
                </tr>
                <tr>
                    <td>光伏出力</td>
                    <td>{{P_pv[2]}}</td>
                    <!-- <td>XX</td> -->
                    <td>2024-08-27 00:00:00</td>
                    <td>2024-08-27 24:00:00</td>
                </tr>
            </tbody>

            <!--
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th v-for="idx in time" :key="idx">{{ idx }}:00</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item_i, idx_i) in data" :key="idx_i">
                    <td>{{ idx_i + 1 }}</td>
                    <td v-for="(item_j, idx_j) in item_i" :key="idx_j">{{ item_j }}</td>
                </tr>
            </tbody>
            -->
            
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            time: 24,
            P_dis: [],
            P_pv: []
        };
    },
    mounted() { 
        this.loadData();
    },
    methods: {
        loadData() {
            let outer = this;
            axios.post("/api/data/getinfos/byUsername/" , {
                'username': localStorage.getItem('username'),
            }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
            })
            .then(function (response) {
            if(response.data.result === 'success') {
                let data = response.data
                // console.log(data)

                outer.P_dis = data.P_dis.map(value  => value .toFixed(8));
                outer.P_pv = data.P_pv.map(value => value.toFixed(8));
            } else {
                // var toastEl2 = document.getElementById('liveToast');
                // var toast2 = new Toast(toastEl2, {
                //     autohide: true,
                //     delay: 1000
                // });
                // this.message = response.data.result;
                // toast2.show();
            }
            })
            .catch(function (error) {
                console.log(error)
                // var toastEl3 = document.getElementById('liveToast');
                // var toast3 = new Toast(toastEl3, {
                //     autohide: true,
                //     delay: 1000
                // });
                // this.message = error;
                // toast3.show();
            });
        }
    }
}
</script>

<style scoped>
.table-container {
  width: 100%; /* 容器宽度 */
  height: 100%; /* 容器高度 */
  overflow: hidden; /* 隐藏超出容器大小的内容 */
}

.table {
  font-size: 12px;
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