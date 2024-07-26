<template>
    <!-- Toast容器 -->
    <div class="position-fixed p-3" style="z-index: 5; left: 38vw; top: 8vh;">
      <div id="liveToast" class="toast toast-custom" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <strong class="mr-auto">{{message}}</strong>
        </div>
        <div class="toast-body">
        </div>
      </div>
    </div>

    <div ref="myChart" id="myChart"></div>
</template>

<script>
import $ from 'jquery';
import { Toast } from 'bootstrap';
import * as echarts from 'echarts';

export default{
    data() {
        return {
            name: '',
            value: '',
            port: '',
            username: '',
            declaration_infos: [],
            message: '',
           
            use_list: [],
        };
    },
    mounted() {
        this.name = localStorage.getItem('name');
        this.value = localStorage.getItem('value');
        this.port = localStorage.getItem('port');
        this.username = localStorage.getItem('username');

        $.ajax({
            url: "/api/declaration/getinfos/",
            type: "get",
            success: resp => {
                if(resp.result === 'success') {
                    this.declaration_infos = resp.declarationInfos;
                    if(this.port === '管理端') {
                        this.use_list = this.declaration_infos.slice(0, 6);
                    } else if(this.port === '用户端') {
                        this.use_list = this.declaration_infos.filter(item => item.username === this.username);
                        this.use_list = this.use_list.slice(0, 6);
                    }

                    let myChart = echarts.init(this.$refs.myChart)
                    // 设置数据
                    // let data = [
                    //     {value: 67, name: "EV聚合商1"},
                    //     {value: 100, name: "EV聚合商2"},
                    //     {value: 88, name: "EV聚合商3"},
                    //     {value: 150, name: "EV聚合商4"},
                    //     {value: 34, name: "EV聚合商5"},
                    // ]

                    let data = this.use_list.map(item => {
                        let value;
                        switch(item.reviewState) {
                            case "已通过":
                                value = 100;
                                break;
                            case "已拒绝":
                                value = 30;
                                break;
                            case "待审核":
                                value = 40;
                                break;
                            default:
                                value = 0; // 如果有其他状态，可以设置默认值
                                break;
                        }
                        return {value: value, name: item.username};
                    });

                    let option = {
                        color: [
                            // "#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab"
                            "#065aab", "#06a0ab", "#0682ab" 
                        ],
                        title: {
                            // text: '电能量和调频申报进度',
                            left: 'left',
                            textStyle: {
                                color: '#e7f5fe',
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
                                    position: "inside",
                                    textStyle: {
                                        color: "rgba(255, 255, 255, 1)",
                                        fontSize: "12"
                                    }
                                },
                                radius: ["30%", "60%"],
                                // roseType: "area",
                            }
                        ]
                    }
                    myChart.setOption(option)

                    // 监听页面大小实现图表大小自适应
                    window.addEventListener("resize", () => {
                        myChart.resize();
                    })
                } else {
                    console.log(resp.result);
                }
            },
            error: resp => {
                var toastEl = document.getElementById('liveToast');
                var toast = new Toast(toastEl, {
                    autohide: true,
                    delay: 400
                });
                toast.show();
                console.log(resp);
                this.message = '请求失败';
            }
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