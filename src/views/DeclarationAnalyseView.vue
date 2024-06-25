<template>
  <!-- <ContentBase> -->
  <div class="row">
    <div class="col-1">
      <!--
        <OffCanvas></OffCanvas>
      -->
    </div>
    <div class="col-10">
      <div class="row">
        <div class="col-7">
          <div class="panel">
            <h2>交易汇总</h2>
            <div class="chart">
              <TransactionSummary></TransactionSummary>
            </div>
            <div class="panel-footer">
            </div>
          </div>
        </div>
        <div class="col-5">
          <div class="panel">
            <h2>各类费用占比</h2>
            <div class="chart">
              <ExpensesProportion></ExpensesProportion>
            </div>
            <div class="panel-footer">
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="panel">
            <h2>电能量和调频收益</h2>
            <div class="chart">
              <ElectricalEnergyAndFMGainsOnHour></ElectricalEnergyAndFMGainsOnHour>
            </div>
            <div class="panel-footer">
            </div>
          </div>
      </div>
      <!--
        <div class="row">
            <div class="col-2"></div>
            <button class="col-4 btn btn-secondary">
                <router-link class="nav-link" :to="{name: 'home'}">返回首页</router-link>
            </button>
          </div>
      -->
      </div>
  </div>
</template>

<script>
// import ContentBase from '../components/ContentBase';
// import OffCanvas from '../components/OffCanvas';
import ElectricalEnergyAndFMGainsOnHour from '../components/declarationAnalyse/ElectricalEnergyAndFMGainsOnHour';
import ExpensesProportion from '../components/declarationAnalyse/ExpensesProportion';
import TransactionSummary from '../components/declarationAnalyse/TransactionSummary';
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      name: '',
      value: '',
      port: '',
    };
  },
  setup() {
    const router = useRouter(); // 引入路由实例

    const goBack = () => {
      router.back(); // 调用back方法返回上一页
    };

    return { goBack };
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
    ElectricalEnergyAndFMGainsOnHour,
    ExpensesProportion,
    TransactionSummary
  }
}
</script>

<style scoped>
.panel {
  height: 360px;
  margin-bottom: 25px;
}
button {
  margin-bottom: 20px;
}
</style>
