<template>
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
        <tbody>
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
</template>

<script>
export default {
    data() {
        return {
            time: 24,
            P_dis: [0.010, 0.700, 1.100, 0.620, 0.840, 0.790, 0.960, 0.590, 0.350, 0.010, 
                0.010, 0.900, 0.540, 1.000, 1.090, 0.900, 0.590, 0.670, 0.850, 0.660, 
                0.680, 0.770, 0.660, 1.030, 1.080, 0.710, 1.010, 0.420, 1.120, 1.270, 0.730],
            P_pv: [0.950, 0.700, 0.850, 0.710, 0.740, 0.870, 0.770, 0.750, 0.400, 0.010, 
                    0.010, 0.910, 0.780, 0.720, 0.960, 0.710, 0.770, 0.740, 0.760, 0.750, 
                    0.760, 0.810, 0.720, 0.940, 0.730, 0.790, 0.750, 0.870, 0.740, 0.750, 0.740]
        };
    },
    name: "DeclaredMerchantsTables",
}
</script>

<style scoped>
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