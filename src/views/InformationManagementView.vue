<template>
    <div class="row">
        <div class="col-1">
            <!--
                <OffCanvas></OffCanvas>
            -->
        </div>
      
      <div class="col-10">
            <div class="row">
                <span>{{ areaName }} 剩余功率：{{ areaValue }}</span>
            </div>

            <div class="panel">
                <h2>申报数据量</h2>
                <ElectricityAndFMCapacityOnThisPartition></ElectricityAndFMCapacityOnThisPartition>
                <div class="panel-footer">
                </div>            
            </div>

            <div class="panel">
                <h2>实际需求占比</h2>
                <ActualDemandProportion></ActualDemandProportion>
                <div class="panel-footer">
                </div>            
            </div>
            
            <!--
              <div class="row">
            <div class="col-4"></div>
            <button class="col-4 btn btn-secondary">
                <router-link class="nav-link" :to="{name: 'declarationResults'}">查看出清结果</router-link>
            </button>
          </div>
            -->
            
      </div>
    </div>
</template>

<script>
// import ContentBase from '../components/ContentBase';
// import OffCanvas from '../components/OffCanvas';
import ActualDemandProportion from '../components/informationManagement/ActualDemandProportion'
import ElectricityAndFMCapacityOnThisPartition from '../components/informationManagement/ElectricityAndFMCapacityOnThisPartition'
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter(); // 引入路由实例

    const goBack = () => {
      router.back(); // 调用back方法返回上一页
    };

    return { goBack };
  },
  data() {
    return {
      name: '',
      value: '',
      port: '',
      areaName: '',
      areaValue: ''
    };
  },
  mounted() {
    this.name = localStorage.getItem('name');
    this.value = localStorage.getItem('value');
    this.port = localStorage.getItem('port');
  },
  created() {
    this.areaName = this.$route.params.areaName;
    this.areaValue = this.$route.params.areaValue;
  },
  name: 'HomeView',
  components: {
    // ContentBase,
    // OffCanvas,
    ActualDemandProportion,
    ElectricityAndFMCapacityOnThisPartition
  }
}
</script>

<style scoped>
span {
    color: white;
}
form {
    color: white;
}
button {
    align-self: center;
    margin-bottom: 20px;
}
</style>
