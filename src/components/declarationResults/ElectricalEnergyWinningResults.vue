<template>
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th scope="col">运行时间</th>
                <th scope="col">设备名称</th>
                <th scope="col">设备类型</th>
                <th scope="col">开始时间</th>
                <th scope="col">结束时间</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>2023-11-17</td>
                <td>XXX</td>
                <td>XX</td>
                <td>2022-11-04 00:00:00</td>
                <td>2022-11-08 00:00:00</td>
            </tr>
            <tr>
                <td>2023-11-17</td>
                <td>XXX</td>
                <td>XX</td>
                <td>2022-11-04 00:00:00</td>
                <td>2022-11-08 00:00:00</td>
            </tr>
            <tr>
                <td>2023-11-17</td>
                <td>XXX</td>
                <td>XX</td>
                <td>2022-11-04 00:00:00</td>
                <td>2022-11-08 00:00:00</td>
            </tr>
            <tr>
                <td>2023-11-17</td>
                <td>XXX</td>
                <td>XX</td>
                <td>2022-11-04 00:00:00</td>
                <td>2022-11-08 00:00:00</td>
            </tr>
            <tr>
                <td>2023-11-17</td>
                <td>XXX</td>
                <td>XX</td>
                <td>2022-11-04 00:00:00</td>
                <td>2022-11-08 00:00:00</td>
            </tr>
            <tr>
                <td>2023-11-17</td>
                <td>XXX</td>
                <td>XX</td>
                <td>2022-11-04 00:00:00</td>
                <td>2022-11-08 00:00:00</td>
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