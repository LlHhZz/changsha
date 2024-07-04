<template>
  <div class="row">
    <div class="col-1">
      <!--
        <OffCanvas></OffCanvas>
      -->
    </div>
    
    <div class="col-10">
      <div class="row justify-content-center align-items-center">
          <div class="row">
              <div class="col-6">
                <div class="panel">
                  <h2>电能量中标结果</h2>
                  <div class="chart">
                    <ElectricalEnergyWinningResults></ElectricalEnergyWinningResults>
                  </div>
                  <div class="panel-footer">
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="panel">
                  <h2>调频中标结果</h2>
                  <div class="chart">
                    <FMWinningResults></FMWinningResults>
                  </div>
                  <div class="panel-footer">
                  </div>
                </div>
              </div>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="panel">
                  <h2>电能量市场出清电价</h2>
                  <div class="chart">
                    <ElectricityAndFMCapacityOnDay></ElectricityAndFMCapacityOnDay>
                  </div>
                  <div class="panel-footer">
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="panel">
                  <h2>调频市场出清电价</h2>
                  <div class="chart">
                    <ElectricityAndMileageAndCapacityPricesOnDay></ElectricityAndMileageAndCapacityPricesOnDay>
                  </div>
                  <div class="panel-footer">
                  </div>
                </div>
              </div>
          </div>
          <div class="row">
            <div class="panel">
              <h2>各分区中标量统计对比</h2>
              <div class="chart">
                <StatisticalComparisonOfWinningOnEachPartition></StatisticalComparisonOfWinningOnEachPartition>
              </div>
              <div class="panel-footer">
              </div>
            </div>
          </div>
          <!--
            <div class="row">
            <div class="col-4"></div>
            <button v-if="port === '管理端'" class="col-4 btn btn-secondary">
                <router-link class="nav-link" :to="{name: 'declarationAnalyse'}">查看结果评估</router-link>
            </button>
            <button v-else class="col-4 btn btn-secondary">
                <router-link class="nav-link" :to="{name: 'home', params: {}}">回到首页</router-link>
            </button>
          </div>
          -->
          
      </div>
    </div>
  </div>
</template>

<script>
// import ContentBase from '../components/ContentBase';
// import OffCanvas from '../components/OffCanvas';
import ElectricalEnergyWinningResults from '../components/declarationResults/ElectricalEnergyWinningResults';
import ElectricityAndFMCapacityOnDay from '../components/declarationResults/ElectricityAndFMCapacityOnDay';
import ElectricityAndMileageAndCapacityPricesOnDay from '../components/declarationResults/ElectricityAndMileageAndCapacityPricesOnDay';
import FMWinningResults from '../components/declarationResults/FMWinningResults';
import StatisticalComparisonOfWinningOnEachPartition from '../components/declarationResults/StatisticalComparisonOfWinningOnEachPartition';
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
    };
  },
  mounted() {
    this.name = localStorage.getItem('name');
    this.value = localStorage.getItem('value');
    this.port = localStorage.getItem('port');
  },
  name: 'HomeView',
  components: {
    // ContentBase,
    // OffCanvas,
    ElectricalEnergyWinningResults,
    ElectricityAndFMCapacityOnDay,
    ElectricityAndMileageAndCapacityPricesOnDay,
    FMWinningResults,
    StatisticalComparisonOfWinningOnEachPartition
  }
}
</script>

<style scoped>
.panel {
  height: 315px;
  margin-bottom: 25px;
}
button {
  margin-bottom: 20px;
}
</style>
