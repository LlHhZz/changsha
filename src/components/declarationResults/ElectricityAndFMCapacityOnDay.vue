<template>
    <div ref="myChart" id="myChart"></div>
</template>

<script>
import * as echarts from 'echarts';
import axios from 'axios';

export default{
    mounted() {
        let myChart = echarts.init(this.$refs.myChart)
        // 设置数据
        // let xData = ['00:00', '01:00', '02:00', '03:00' , '04:00', '05:00' , '06:00', '07:00' , '08:00', '09:00', '10:00', '11:00' , '12:00', '13:00' , '14:00', '15:00' , '16:00', '17:00' , '18:00', '19:00' , '20:00', '21:00' , '22:00', '23:00' , '24:00']
        
        // let electricity = [150, 125, 100, 110, 135, 125, 150, 125, 100, 110, 135, 125]
        // let FMCapacity = [165, 110, 95, 140, 180, 150, 110, 80, 70, 60, 150, 105]
        
        // 由模型处理产生 price
        // let electricity = [0.9299999991697351, 0.6999999998313627, 0.8499999999542416, 0.7099999997770368, 0.7400000003542572, 0.8599999992325125, 0.7699999996102339, 0.7499999999132213, 0.38703703683589463, 0.010000000034909228, 0.01000000002885235, 0.9000000028503412, 0.7800000000762296, 0.7199999999285772, 0.9600000000171074, 0.710000001622152, 0.7700000001334849, 0.7400000000525517, 0.7600000014639353, 0.7499999998152783, 0.7599999999428786, 0.809999999709612, 0.7200000003319795, 0.9399999999149032, 0.7299999999749324, 0.7899999986316695, 0.7499999999131537, 0.8699999997730167, 0.7399999999731103, 0.7499999996073687, 0.7399999992016238]
        
        axios.post("http://8.148.13.44:9000/api/data/getinfos/byUsername/" , {
            'username': localStorage.getItem('username'),
        }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        })
        .then(function (response) {
        if(response.data.result === 'success') {
            let data = response.data
            // console.log(data)

            let electricity = data.price;

            let xData = Array.from({ length: electricity.length }, (_, i) => i + 1)
        
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
                    // text: '当日出清电量和调频容量',
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
                        name: '电量',
                        type: 'line',
                        smooth: true,  // 平滑过度 曲线图
                        data: electricity,
                        lineStyle: {
                            color: '#48be89'
                        },
                        itemStyle: {
                            color: '#48be89'
                        },
                        areaStyle: {
                            color: '#daeff0'
                        }
                    },
                    /*
                    {
                        name: '调频容量',
                        type: 'line',
                        smooth: true,  // 平滑过度 曲线图
                        data: FMCapacity,
                        lineStyle: {
                            color: '#0070c0'
                        },
                        itemStyle: {
                            color: '#0070c0'
                        },
                        areaStyle: {
                            color: '#c5dfee'
                        }
                    }
                    */
                ]
            }
            myChart.setOption(option)

            // 监听页面大小实现图表大小自适应
            window.addEventListener("resize", () => {
                myChart.resize();
            })
        } else {
            // var toastEl2 = document.getElementById('liveToast');
            // var toast2 = new Toast(toastEl2, {
            //     autohide: true,
            //     delay: 1000
            // });
            // this.message = response.data.result;
            // toast2.show();
        }
        })
        .catch(function (error) {
            console.log(error)
            // var toastEl3 = document.getElementById('liveToast');
            // var toast3 = new Toast(toastEl3, {
            //     autohide: true,
            //     delay: 1000
            // });
            // this.message = error;
            // toast3.show();
        });
    }
}
</script>

<style scoped>
#myChart{
    width: 100%;
    height: 300px;
}
</style>