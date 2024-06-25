<template>
    <div class="row">
        <div ref="myChart1" id="myChart1"></div>
        <div ref="myChart2" id="myChart2"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts';

export default{
    mounted() {
        let myChart1 = echarts.init(this.$refs.myChart1)
        // 设置数据
        let xData = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00','20:00', '21:00', '22:00', '23:00']
        let electricalEnergyGain = [130, 25, 230, 15, 110, 152, 130, 25, 230, 15, 110, 152, 25, 230, 15, 110, 25, 230, 15, 110, 152, 130, 25, 230]
        let FMGain = [152, 25, 230, 15, 110, 25, 230, 15, 110, 152, 130, 25, 230, 130, 25, 230, 15, 110, 152, 130, 25, 230, 15, 110]
        // 设置配置项
        let option1 = {
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
            grid: {
                left: "3%",
                top: "10px",
                right: "3%",
                bottom: "13%",
                containLabel: true
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
            title: {
                // text: '电能量和调频收益对比',
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
            series: [
                {
                    name: '电能量收益',
                    type: 'bar',
                    data: electricalEnergyGain,
                    itemStyle: {
                        barBorderRadius: 5
                    }
                },
                {
                    name: '调频收益',
                    type: 'bar',
                    data: FMGain,
                    itemStyle: {
                        barBorderRadius: 5
                    }
                }
            ]
        }
        myChart1.setOption(option1)


        let myChart2 = echarts.init(this.$refs.myChart2)
        // 设置数据
        let data = [
            {value: 67, name: "实时电量收益"},
            {value: 100, name: "XXX收益"},
            {value: 88, name: "YYY收益"},
            {value: 77, name: "ZZZ收益"},
        ]
        let option2 = {
            color: ["#3e5fff", "#4591ff", "#4ab7f0", "#a0ddbd"],
            title: {
                // text: '收益统计',
                left: 'left',
                textStyle: {
                    color: 'white',
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
                        textStyle: {
                            color: "rgba(255, 255, 255, .8)",
                        },
                        position: "inside",
                    },
                    radius: ["50%", "70%"],
                    // roseType: "area",
                }
            ]
        }
        myChart2.setOption(option2)

        // 监听页面大小实现图表大小自适应
        window.addEventListener("resize", () => {
            myChart1.resize();
            myChart2.resize();
        })
    }
}
</script>

<style scoped>
#myChart1{
    width: 80%;
    height: 300px;
}
#myChart2{
    width: 20%;
    height: 300px;
}
</style>