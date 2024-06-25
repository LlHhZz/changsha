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
        let electricityPrice = [150, 125, 100, 110, 135, 125, 150, 125, 100, 110, 135, 125]
        let mileagePrice = [165, 110, 95, 140, 180, 150, 110, 80, 70, 60, 150, 105]
        let capacityPrice = [185, 120, 75, 160, 200, 140, 90, 60, 95, 86, 156, 125]
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
                // text: '当日出清价格',
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
                    name: '电价',
                    type: 'line',
                    smooth: true,
                    data: electricityPrice,
                    lineStyle: {
                        color: '#48be89'
                    },
                    itemStyle: {
                        color: '#48be89'
                    },
                    /*
                    areaStyle: {
                        color: '#daeff0'
                    }
                    */
                },
                {
                    name: '里程价格',
                    type: 'line',
                    smooth: true,
                    data: mileagePrice,
                    lineStyle: {
                        color: '#5470c6'
                    },
                    itemStyle: {
                        color: '#5470c6'
                    },
                    /*
                    areaStyle: {
                        color: '#c5dfee'
                    }
                    */
                },
                {
                    name: '容量价格',
                    type: 'line',
                    smooth: true,
                    data: capacityPrice,
                    lineStyle: {
                        color: '#0d6efd'
                    },
                    itemStyle: {
                        color: '#0d6efd'
                    },
                    /*
                    areaStyle: {
                        color: '#c5dfee'
                    }
                    */
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