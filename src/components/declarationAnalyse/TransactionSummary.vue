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
export default {
    name: "DeclaredMerchantsTables",
    data() {
        return {
            profit_pv: 1314.6312524267187,
            profit_es: -77.60122245672903
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