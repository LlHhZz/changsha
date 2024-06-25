<template>
    <table class="table table-striped table-hover">
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
    </table>
</template>

<script>
export default {
    name: "DeclaredMerchantsTables",
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