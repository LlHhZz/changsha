<template>
    <div ref="myChart" id="myChart"></div>
</template>

<script>
import * as echarts from 'echarts';

export default{
    mounted() {
        let myChart = echarts.init(this.$refs.myChart)
        // 设置数据
        let xData = ['00:00', '02:00', '04:00', '08:00', '10:00', '12:00','14:00', '16:00', '18:00', '20:00', '22:00', '24:00']
        let electricity = [150, 125, 100, 110, 135, 125, 150, 125, 100, 110, 135, 125]
        // 设置配置项
        let option = {
            xAxis: {
                type: 'category',
                data: xData,
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    color: "rgba(255, 255, 255, .6)",
                    fontSize: 12,
                },
                axisLine: {
                    show: false
                }
            },
            yAxis: {
                axisLabel: {
                    color: "rgba(255, 255, 255, .6)",
                    fontSize: 12,
                },
            },
            title: {
                // text: '可交付调频容量',
                left: 'left',
                textStyle: {
                    color: 'white',
                    fontSize: 13,
                    fontWeight: 'bold'
                }
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "cross",
                },
            },
            legend: {
                show: true,
                left: "right",
                textStyle: {
                    color: "white"
                }
            },
            series: [
                {
                    name: '调频容量',
                    type: 'line',
                    smooth: true,  // 平滑过度 曲线图
                    data: electricity,
                    lineStyle: {
                        color: '#0696ab'
                    },
                    itemStyle: {
                        color: '#0696ab'
                    },
                    areaStyle: {
                        color: 'rgba(230, 232, 238, .3)'
                    }
                },
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