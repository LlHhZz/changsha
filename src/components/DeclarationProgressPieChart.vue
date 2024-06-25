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
            {value: 67, name: "EV聚合商1"},
            {value: 100, name: "EV聚合商2"},
            {value: 88, name: "EV聚合商3"},
            {value: 150, name: "EV聚合商4"},
            {value: 34, name: "EV聚合商5"},
        ]
        let option = {
            color: [
                "#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab"
            ],
            title: {
                // text: '电能量和调频申报进度',
                left: 'left',
                textStyle: {
                    color: '#e7f5fe',
                    fontSize: 13,
                    fontWeight: 'bold'
                }
            },
            legend: {
                bottom: "0%",
                itemWidth: 10,
                itemHeight: 10,
                textStyle: {
                    color: "rgba(255, 255, 255, .8)",
                    fontSize: "12"
                }
            },
            series: [
                {
                    name: '百分比图',
                    type: 'pie',
                    data: data,
                    label: { // 设置标签
                        show: true,
                        formatter: '{b}: {c} ({d}%)',
                        position: "inside",
                        textStyle: {
                            color: "rgba(255, 255, 255, 1)",
                            fontSize: "12"
                        }
                    },
                    radius: ["30%", "60%"],
                    // roseType: "area",
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
    height: 240px;
}
</style>