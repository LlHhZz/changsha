<template>
    <div ref="myChart" id="myChart"></div>
</template>

<script>
import * as echarts from 'echarts';

export default{
    mounted() {
        let myChart = echarts.init(this.$refs.myChart)
        // 设置数据
        let xData = ['00:00', '01:00', '02:00', '03:00' , '04:00', '05:00' , '06:00', '07:00' , '08:00', '09:00', '10:00', '11:00' , '12:00', '13:00' , '14:00', '15:00' , '16:00', '17:00' , '18:00', '19:00' , '20:00', '21:00' , '22:00', '23:00' , '24:00']
        // let electricityPrice = [150, 125, 100, 110, 135, 125, 150, 125, 100, 110, 135, 125]
        // let mileagePrice = [165, 110, 95, 140, 180, 150, 110, 80, 70, 60, 150, 105]
        // let capacityPrice = [185, 120, 75, 160, 200, 140, 90, 60, 95, 86, 156, 125]
        let FMPrice = [39.99999999,	39.99999999, 39.99999998, 39.99999998, 39.99999997, 39.99999995, 39.99999995, 39.99999991, 34.54546507, 39.99999891, 34.54545464, 34.54545465, 34.54545458, 34.54545458, 34.54545456, 34.54545457, 34.54545457, 34.54545456, 34.54545456, 34.54545456, 34.54545456, 34.54545456, 34.54545458, 34.5454546
]
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
                /*
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
                    // areaStyle: {
                    //   color: '#daeff0'
                    //}
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
                    // areaStyle: {
                    //    color: '#c5dfee'
                    //}
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
                    // areaStyle: {
                    //    color: '#c5dfee'
                    //}
                }
                */
               {
                    name: '电价',
                    type: 'line',
                    smooth: true,
                    data: FMPrice,
                    lineStyle: {
                        color: '#48be89'
                    },
                    itemStyle: {
                        color: '#48be89'
                    },
                    // areaStyle: {
                    //   color: '#daeff0'
                    //}
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
    height: 300px;
}
</style>