<template>
    <div ref="myChart" id="myChart"></div>
</template>

<script>
import * as echarts from 'echarts';

export default{
    mounted() {
        let myChart = echarts.init(this.$refs.myChart)
        // 设置数据
        let xData = ['分区1', '分区2', '分区3', '分区4', '分区5', '分区6', '分区7', '分区8', '分区9', '分区10', '分区11', '分区12', '分区13', '分区14', '分区15', '分区16']
        let data = [130, 25, 230, 15, 110, 152, 130, 25, 230, 15, 110, 152, 25, 230, 15, 110]
        // 设置配置项
        let option = {
            color: ["#467fd5"],
            grid: {
                left: "3%",
                top: "10px",
                right: "3%",
                bottom: "13%",
                containLabel: true
            },
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
                type: 'value',
                axisLabel: {
                    color: "rgba(255, 255, 255, .6)",
                    fontSize: 12,
                },
            },
            title: {
                // text: '各分区中标量统计对比',
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
                    type: "shadow"
                },
            },
            series: [
                {
                    name: '中标量',
                    type: 'bar',  // 柱状图
                    data: data,
                    barWidth: 30,
                    itemStyle: {
                        barBorderRadius: 5
                    }
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