<template>
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">收益类型</th>
                <th scope="col">收益</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>火电机组</td>
                <td>{{profit_pv}}</td>
            </tr>
            <tr>
                <td>2</td>
                <td>储能电站</td>
                <td>{{profit_es}}</td>
            </tr>
            <!-- <tr>
                <td>3</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>4</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>5</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>6</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>7</td>
                <td></td>
                <td></td>
            </tr> -->
        </tbody>
    </table>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            profit_pv: 0,
            profit_es: 0
        }
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
                
                outer.profit_es = data.profit_es[0];
                outer.profit_pv = data.profit_pv[0];
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
.table {
  font-size: 13px;
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