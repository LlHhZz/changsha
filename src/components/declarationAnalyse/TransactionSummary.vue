<template>
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">收益类型</th>
                <th scope="col">收益</th>
                <th scope="col">#</th>
                <th scope="col">收益类型</th>
                <th scope="col">收益</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>火电机组</td>
                <td>10020.84534</td>
                <td>8</td>
                <td>火电机组</td>
                <td>0</td>
            </tr>
            <tr>
                <td>2</td>
                <td>火电机组</td>
                <td>1967.663572</td>
                <td>9</td>
                <td>火电机组</td>
                <td>0</td>
            </tr>
            <tr>
                <td>3</td>
                <td>火电机组</td>
                <td>90250</td>
                <td>10</td>
                <td>火电机组</td>
                <td>0</td>
            </tr>
            <tr>
                <td>4</td>
                <td>火电机组</td>
                <td>0</td>
                <td>11</td>
                <td>储能电站</td>
                <td>46272.72727</td>
            </tr>
            <tr>
                <td>5</td>
                <td>火电机组</td>
                <td>-1750</td>
                <td>12</td>
                <td>储能电站</td>
                <td>46272.72727</td>
            </tr>
            <tr>
                <td>6</td>
                <td>火电机组</td>
                <td>-8000</td>
                <td>13</td>
                <td>储能电站</td>
                <td>45623.91514</td>
            </tr>
            <tr>
                <td>7</td>
                <td>火电机组</td>
                <td>0</td>
                <td>14</td>
                <td>储能电站</td>
                <td>33432.23046</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
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