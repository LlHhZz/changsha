<template>
    <div ref="myChart" id="myChart"></div>
</template>

<script>
import * as echarts from 'echarts';
// import axios from 'axios';

export default{
    mounted() {
        let myChart = echarts.init(this.$refs.myChart)
        // 设置数据
        let xData = ["天心区", "宁乡市", "岳麓区", "开福区", "望城区", "浏阳市", "芙蓉区", "长沙县", "雨花区"]; // 存储行政区县
        let yData = [147430, 70775, 298508, 181870, 155365, 80080, 89055, 249700, 244364]; // 存储运行容量

        /*
        axios.get("/totalElectricityData.json")
            .then(response => {

            // 遍历JSON数据，将行政区县和运行容量分别添加到对应的数组中
            response.data.forEach(item => {
                xData.push(item['行政区县']);
                yData.push(item['运行容量']);
            });

            // 在这里可以使用xData和yData进行后续操作，例如打印到控制台
            console.log('xData:', xData);
            console.log('yData:', yData);

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
                        fontSize: 8,
                    },
                    axisLine: {
                        show: false
                    }
                },
                yAxis: {
                    axisLabel: {
                        color: "rgba(255, 255, 255, .6)",
                        fontSize: 8,
                    },
                },
                title: {
                    // text: '可交付电量',
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
                        name: '总量',
                        type: 'line',
                        smooth: true,  // 平滑过度 曲线图
                        data: yData,
                        lineStyle: {
                            color: '#46a5c3'
                        },
                        itemStyle: {
                            color: '#46a5c3'
                        },
                        areaStyle: {
                            color: 'rgba(47, 77, 245, .3)'
                        }
                    },
                ]
            }
            myChart.setOption(option)
        })
        .catch(error => {
            // 捕获可能的错误并进行处理
            console.error('Error fetching data:', error);
        });
        */
        
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
                    name: '容量',
                    type: 'bar',  // 柱状图
                    data: yData,
                    barWidth: 17,
                    itemStyle: {
                        barBorderRadius: 3
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
    height: 240px;
}
</style>