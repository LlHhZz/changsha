<template>
    <div ref="myChart" id="myChart"></div>
</template>

<script>
import * as echarts from 'echarts';

export default{
    mounted() {
        let myChart = echarts.init(this.$refs.myChart)
        // 设置数据
        let data = [
            {value: 67, name: "电流量需求"},
            {value: 33, name: "分期考核回收需求"},
            {value: 45, name: "返还补偿需求"},
            {value: 90, name: "XXX需求"},
            {value: 85, name: "YYY需求"},
        ]
        let option = {
            color: ["#3e5fff", "#4591ff", "#4ab7f0", "#3c8aff", "#61c19f"],
            tooltip : {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                left: 'center',
                top: 'bottom',
                data: data.name,
                textStyle: {
                    color: "rgba(255, 255, 255, .8)",
                }
            },
            title: {
                // text: '电能量和调频申报进度',
                left: 'left',
                textStyle: {
                    color: 'white',
                    fontSize: 13,
                    fontWeight: 'bold'
                }
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    data: data,
                    // roseType: 'area',
                    label: { // 设置标签
                        show: true,
                        formatter: '{b}: {c} ({d}%)',
                        textStyle: {
                            color: "rgba(255, 255, 255, .8)",
                        }
                    },
                    radius: ["20%", "70%"],
                    center: ["50%", "50%"],
                    roseType: "radius",
                }
            ]
        }
        myChart.setOption(option)

        // 监听页面大小实现图表大小自适应
        window.addEventListener("resize", () => {
            myChart.resize();
        })
    }
}
</script>

<style scoped>
#myChart{
    width: 100%;
    height: 300px;
}
</style>