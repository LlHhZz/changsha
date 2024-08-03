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
        // let electricalEnergyGain = [130, 25, 230, 15, 110, 152, 130, 25, 230, 15, 110, 152, 25, 230, 15, 110, 25, 230, 15, 110, 152, 130, 25, 230]
        // let FMGain = [152, 25, 230, 15, 110, 25, 230, 15, 110, 152, 130, 25, 230, 130, 25, 230, 15, 110, 152, 130, 25, 230, 15, 110]
        let fireElectricityExpand = [104189.7821,104165.5059,101759.6555,101764.1603,98489.87126,96749.23987,97060.57638,95493.21561,93739.57015,93851.10737,92447.84062,92513.24465,90196.57397,90759.34892,88970.83243,89481.38427,89512.25097,88634.30202,87658.91442,88756.76773,87185.90316,88160.87364,90364.67233,91567.97293]
        let storedEnergyExpand = [1333.62921,1333.318473,1302.523588,1302.58125,1260.67035,1238.390268,1242.375375,1222.313156,1036.248654,1201.294141,1021.968858,1022.69187,997.0821266,1003.303348,983.5321108,989.1760294,989.5172467,979.81192,969.0294533,981.1657227,963.8005288,974.5783844,998.9403777,1012.24232]
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
            yAxis: [{
                // 左侧Y轴
                axisLabel: {
                    color: "rgba(255, 255, 255, .6)",
                    fontSize: 12,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255, 255, 255, .6)"
                    }
                },
                splitLine: {
                    show: false
                }
            },
            {
                // 右侧Y轴
                axisLabel: {
                    color: "rgba(255, 255, 255, .6)",
                    fontSize: 12,
                },
                axisLine: {
                show: true,
                    lineStyle: {
                        color: "rgba(255, 255, 255, .6)"
                    }
                },
                splitLine: {
                    show: false
                },
                // 设置右侧Y轴的坐标轴位置
                position: "right",
                // 设置右侧Y轴的名称
                name: "右侧Y轴",
                // 设置右侧Y轴的刻度线样式
                axisTick: {
                    show: false
                }
            }],
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
                    // name: '电能量收益',
                    name: '火电支出',
                    type: 'bar',
                    // data: electricalEnergyGain,
                    data: fireElectricityExpand,
                    itemStyle: {
                        barBorderRadius: 5
                    },
                    yAxisIndex: 0
                },
                {
                    // name: '调频收益',
                    name: '储能支出',
                    type: 'bar',
                    // data: FMGain,
                    data: storedEnergyExpand,
                    itemStyle: {
                        barBorderRadius: 5
                    },
                    yAxisIndex: 1
                }
            ]
        }
        myChart1.setOption(option1)


        // let myChart2 = echarts.init(this.$refs.myChart2)
        // // 设置数据
        // let data = [
        //     {value: 2572975.876, name: "市场收入"},
        //     {value: 2243473.567, name: "火电支出"},
        //     {value: 26360.18476, name: "储能支出"},
        //     {value: 303142.1251, name: "市场盈余"},
        // ]
        // let option2 = {
        //     color: ["#3e5fff", "#4591ff", "#4ab7f0", "#a0ddbd"],
        //     title: {
        //         // text: '收益统计',
        //         left: 'left',
        //         textStyle: {
        //             color: 'white',
        //             fontSize: 13,
        //             fontWeight: 'bold'
        //         }
        //     },
        //     legend: {
        //         bottom: "0%",
        //         itemWidth: 10,
        //         itemHeight: 10,
        //         textStyle: {
        //             color: "rgba(255, 255, 255, .8)",
        //             fontSize: "12"
        //         }
        //     },
        //     series: [
        //         {
        //             name: '百分比图',
        //             type: 'pie',
        //             data: data,
        //             label: { // 设置标签
        //                 show: true,
        //                 formatter: '{b}: {c} ({d}%)',
        //                 textStyle: {
        //                     color: "rgba(255, 255, 255, .8)",
        //                 },
        //                 position: "inside",
        //             },
        //             radius: ["50%", "70%"],
        //             // roseType: "area",
        //         }
        //     ]
        // }
        // myChart2.setOption(option2)

        // 监听页面大小实现图表大小自适应
        window.addEventListener("resize", () => {
            myChart1.resize();
            // myChart2.resize();
        })
    }
}
</script>

<style scoped>
#myChart1{
    width: 100%;
    height: 300px;
}

#myChart2{
    width: 20%;
    height: 300px;
}
</style>