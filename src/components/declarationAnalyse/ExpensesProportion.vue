<template>
    <div ref="myChart" id="myChart"></div>
</template>

<script>
import * as echarts from 'echarts';
import axios from 'axios';

export default{
    mounted() {

        // let myChart = echarts.init(this.$refs.myChart)
        // // 设置数据
        // let data = [
        //     {value: 67, name: "电流量费用"},
        //     {value: 33, name: "分期考核回收费用"},
        //     {value: 45, name: "返还补偿费用"},
        //     {value: 90, name: "XXX费用"},
        //     {value: 85, name: "YYY费用"},
        // ]
        // let option = {
        //     color: ["#3e5fff", "#4591ff", "#4ab7f0", "#3c8aff", "#61c19f"],
        //     tooltip : {
        //         trigger: 'item',
        //         formatter: '{a} <br/>{b} : {c} ({d}%)'
        //     },
        //     legend: {
        //         left: 'center',
        //         top: 'bottom',
        //         data: data.name,
        //         textStyle: {
        //             color: "rgba(255, 255, 255, .8)",
        //         }
        //     },
        //     title: {
        //         // text: '电能量和调频申报进度',
        //         left: 'left',
        //         textStyle: {
        //             color: 'white',
        //             fontSize: 13,
        //             fontWeight: 'bold'
        //         }
        //     },
        //     series: [
        //         {
        //             name: '',
        //             type: 'pie',
        //             data: data,
        //             // roseType: 'area',
        //             label: { // 设置标签
        //                 show: true,
        //                 formatter: '{b}: {c} ({d}%)',
        //                 textStyle: {
        //                     color: "rgba(255, 255, 255, .8)",
        //                 }
        //             },
        //             radius: ["20%", "70%"],
        //             center: ["50%", "50%"],
        //             roseType: "radius",
        //         }
        //     ]
        // }
        // myChart.setOption(option)
        
        let myChart = echarts.init(this.$refs.myChart)
        // 设置数据
        // let data = [
        //     {value: 2572975.876, name: "市场收入"},
        //     {value: 2243473.567, name: "火电支出"},
        //     {value: 26360.18476, name: "储能支出"},
        //     {value: 303142.1251, name: "市场盈余"},
        // ]

        // let data = [
        //     {value: 77.60122245672903, name: "储能支出"},
        //     {value: 1314.6312524267187, name: "光电收入"}
        // ]

        axios.post("/api/data/getinfos/byUsername/" , {
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

            let use_data = [
                {value: Math.abs(data.profit_es[0]), name: "储能" + (data.profit_es[0] >= 0 ? "收入" : "支出")},
                {value: Math.abs(data.profit_pv[0]), name: "光电" + (data.profit_pv[0] >= 0 ? "收入" : "支出")},
            ]

            let option2 = {
                color: ["#a0ddbd", "#3e5fff", "#4ab7f0", "#4591ff"],
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
                        data: use_data,
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
            myChart.setOption(option2)

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