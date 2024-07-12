<template>
  <div>
    <div class="mainbox">
      <div class="column">
        <div class="panel line">
          <h2>总需求电量</h2>
          <div class="chart">
            <TotalrequiredElectricityBar></TotalrequiredElectricityBar>
          </div>
          <div class="panel-footer">
          </div>
        </div>
        <div class="panel">
          <h2>已申报电动汽车聚合商</h2>
          <div class="chart">
            <DeclaredMerchantsTables></DeclaredMerchantsTables>
          </div>
          <div class="panel-footer">
          </div>
        </div>
        <div class="panel pie">
          <h2>申报进度</h2>
          <div class="chart">
            <DeclarationProgressPieChart></DeclarationProgressPieChart>
          </div>
          <div class="panel-footer">
          </div>
        </div>
      </div>
      <div class="column">
        <div class="mapcontainer">
          <ChangShaMap></ChangShaMap>
        </div>
      </div>
      <div class="column">
        <div class="panel line">
          <h2>总需求调频总量</h2>
          <div class="chart">
            <TotalrequiredFMBar></TotalrequiredFMBar>
          </div>
          <div class="panel-footer">
          </div>
        </div>
        <div class="panel line">
          <h2>可交付调频容量</h2>
          <div class="chart">
            <DeliverableFMCapacityCurve></DeliverableFMCapacityCurve>
          </div>
          <div class="panel-footer">
          </div>
        </div>
        <div class="panel line">
          <h2>可交付电量</h2>
          <div class="chart">
            <DeliverablePowerCurve></DeliverablePowerCurve>
          </div>
          <div class="panel-footer">
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 
    <div class="row justify-content-center align-items-center">
    <div class="col-4">
      <div class="row">
        <div class="panel">
          <DeclaredMerchantsTables></DeclaredMerchantsTables>
          <div class="panel-footer">
          </div>            
        </div>
      </div>
      <div class="row">
        <div class="panel">
          <DeclarationProgressPieChart></DeclarationProgressPieChart>
          <div class="panel-footer">
          </div> 
        </div>
      </div>
    </div>
    <div class="col-4">
      <ChangShaMap></ChangShaMap>
    </div>
    <div class="col-4">
      <div class="row">
        <div class="panel">
          <DeliverablePowerCurve></DeliverablePowerCurve>
          <div class="panel-footer">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="panel">
          <DeliverableFMCapacityCurve></DeliverableFMCapacityCurve>
          <div class="panel-footer">
          </div>
        </div>
      </div>
    </div>
  </div>
  -->
</template>

<script>
// import ContentBase from '../components/ContentBase';
import ChangShaMap from '../components/ChangShaMap';
import DeclaredMerchantsTables from '../components/DeclaredMerchantsTables'
import DeclarationProgressPieChart from '../components/DeclarationProgressPieChart'
import DeliverableFMCapacityCurve from '../components/DeliverableFMCapacityCurve'
import DeliverablePowerCurve from '../components/DeliverablePowerCurve'
import TotalrequiredElectricityBar from '../components/TotalrequiredElectricityBar'
import TotalrequiredFMBar from '../components/TotalrequiredFMBar'
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
    ChangShaMap,
    DeclaredMerchantsTables,
    DeclarationProgressPieChart,
    DeliverableFMCapacityCurve,
    DeliverablePowerCurve,
    TotalrequiredElectricityBar,
    TotalrequiredFMBar
  }
}
</script>

<style scoped>
@media (max-width: 1200px) {
  .col-4 {
    flex-basis: 100%; /* 将每个列的基础宽度设置为100% */
  }
}

.mainbox {
  display: flex;
  min-width: 1024px;
  max-width: 1920px;
  margin: 1.25rem 2rem;
  padding: 0.125rem 0.125rem 0;
  .column {
    flex: 3;
  }
  .column:nth-child(2) {
    flex: 5;
  }
}

.mapcontainer {
  margin-top: 10vh;
}
</style>