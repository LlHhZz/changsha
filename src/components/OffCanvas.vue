<template>
   <div class="sidebar">
    <ul class="nav flex-column">
      <li class="nav-item">
        <router-link class="nav-link" :to="{name: 'informationDeclaration', params: {}}">信息申报</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{name: 'declarationResults', params: {}}">出清结果</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{name: 'declarationAnalyse', params: {}}">结果评估</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "OffCanvas",
}
</script>

<style scoped>
.sidebar {
  width: 100px; /* 调整侧边栏宽度 */
}

.nav-link {
  padding: 10px; /* 调整链接的内边距 */
}

.nav-item {
  height: 200px;
}
</style>