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
        // let xData = ['分区1', '分区2', '分区3', '分区4', '分区5', '分区6', '分区7', '分区8', '分区9', '分区10', '分区11', '分区12', '分区13', '分区14', '分区15', '分区16']
        // let data = [130, 25, 230, 15, 110, 152, 130, 25, 230, 15, 110, 152, 25, 230, 15, 110]
        
        // let P_dis = [0.010, 0.700, 1.100, 0.620, 0.840, 0.790, 0.960, 0.590, 0.350, 0.010, 
        //         0.010, 0.900, 0.540, 1.000, 1.090, 0.900, 0.590, 0.670, 0.850, 0.660, 
        //         0.680, 0.770, 0.660, 1.030, 1.080, 0.710, 1.010, 0.420, 1.120, 1.270, 0.730]
        // let P_pv = [0.950, 0.700, 0.850, 0.710, 0.740, 0.870, 0.770, 0.750, 0.400, 0.010, 
        //             0.010, 0.910, 0.780, 0.720, 0.960, 0.710, 0.770, 0.740, 0.760, 0.750, 
        //             0.760, 0.810, 0.720, 0.940, 0.730, 0.790, 0.750, 0.870, 0.740, 0.750, 0.740]
        
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

            let P_dis = data.P_dis;
            let P_pv = data.P_pv;

            let use_data = P_dis.map((dis, index) => dis + P_pv[index]);
            let xData = Array.from({ length: use_data.length }, (_, i) => i + 1)
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
                        data: use_data,
                        barWidth: 20,
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
    height: 290px;
}
</style>