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
        <form>
            <div class="panel">
                <br/>
                <div class="row">
                <div class="col-4">
                    <div class="mb-3">
                        <label for="declaredElectricity" class="form-label">申报电量</label>
                        <input type="number" class="form-control" id="declaredElectricity">
                    </div>
                    <div class="mb-3">
                        <label for="electricityPrice" class="form-label">电量价格</label>
                        <input type="number" class="form-control" id="electricityPrice">
                    </div>
                </div>
                <div class="col-8">
                    <div class="mb-3">
                        <label for="FMCapacity" class="form-label">调频容量</label>
                        <input type="number" class="form-control" id="FMCapacity">
                    </div>
                    <div class="mb-3">
                        <div class="row">
                            <div class="col-6">
                                <label for="mileagePrice" class="form-label">里程价格</label>
                                <input type="number" class="form-control" id="mileagePrice">
                            </div>
                            <div class="col-6">
                                <label for="capacityPrice" class="form-label">容量价格</label>
                                <input type="number" class="form-control" id="capacityPrice">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

                <div class="row justify-content-center">
                    <div class="col-1"></div>
                <button type="submit" class="col-4 btn btn-primary" style="background-color: #0a2bb5; border-color: #0a2bb5;">确认提交</button>
                <div class="col-1"></div>
            </div>
            
            
            <div class="panel-footer">
            </div>            
            </div>
        </form>
      </div>
    </div>
</template>

<script>
// import ContentBase from '../components/ContentBase';
// import OffCanvas from '../components/OffCanvas';
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
