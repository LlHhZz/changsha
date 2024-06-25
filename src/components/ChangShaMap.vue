<template>
    <div class="map">
        <div class="map1"></div>
        <div class="map2"></div>
        <div class="map3"></div>
        <div ref="myChart" id="myChart"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts';
import { changShaMapData } from "../assets/changShaMapData.js";

export default{
    mounted() {
        let myChart = echarts.init(this.$refs.myChart);
        echarts.registerMap("changShaMap", changShaMapData);
        let option = {
            title: {
                // text: '长沙市地图',
                left: 'left',
                textStyle: {
                    color: '#e7f5fe',
                    fontSize: 13,
                    fontWeight: 'bold'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b}<br/>{c} (剩余功率)'
            },
            visualMap: {
                show: false,
                min: 0,
                max: 100,
                text: ['High', 'Low'],
                realtime: false,
                calculable: true,
                inRange: {
                    color: ['white', 'lightskyblue', 'blue']
                }
            },
            series: [
            {
                name: '',
                type: 'map',
                map: 'changShaMap',
                label: {
                    show: true,
                    color: "#000",
                    fontSize: 8,
                },
                selectedMode: 'single', // 设置选中模式为单选
                emphasis: { // 设置选中时的样式
                    label: {
                        show: true, // 显示标签
                        color: '#21d86d', // 选中时标签的颜色
                    },
                    itemStyle: {
                        areaColor: 'rgba(255, 255, 0, 0.5)', // 选中时区域的填充颜色
                        borderColor: '#21d86d', // 选中时区域的边框颜色
                        borderWidth: 2, // 选中时区域的边框宽度
                    }
                },
                data: [
                { name: '宁乡市', value: 44 },
                { name: '望城区', value: 20 },
                { name: '岳麓区', value: 13 },
                { name: '开福区', value: 40 },
                { name: '芙蓉区', value: 15 },
                { name: '天心区', value: 60 },
                { name: '雨花区', value: 17 },
                { name: '长沙县', value: 80 },
                { name: '浏阳市', value: 69 },
                ],
            }
            ]
        };
        myChart.setOption(option);

        myChart.on('click', (params) => {
        if (params.name) {
            const port = localStorage.getItem('port');
            localStorage.setItem('name', params.name);
            localStorage.setItem('value', params.value);
            if(port === '用户端') {
                this.$router.push({ name: 'informationDeclaration', params: { areaName: params.name, areaValue: params.value } });
            } else if(port === '管理端') {
                this.$router.push({ name: 'informationManagement', params: { areaName: params.name, areaValue: params.value } });
            }
        }
        });

        // 监听页面大小实现图表大小自适应
        window.addEventListener("resize", () => {
            myChart.resize();
        })
    }
}
</script>

<style scoped>
.map {
    height: 755px;
    position: relative;
    .map1{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 550px;
        height: 550px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-image: url(../assets/images/map.png);
        opacity: 0.45;
    }

    .map2{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 600px;
        height: 600px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-image: url(../assets/images/lbx.png);
        animation: rotate1 15s linear infinite;
    }

    .map3{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 580px;
        height: 580px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-image: url(../assets/images/jt.png);
        animation: rotate2 10s linear infinite;
    }

    #myChart{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 700px;
        height: 600px;
        opacity: 0.8;
        z-index: 1;
    }
}
@keyframes rotate1 {
    from {
        transform: translate(-50%, -50%) 
        rotate(0deg);
    }
    to {
        transform: translate(-50%, -50%) 
        rotate(360deg);
    }
}

@keyframes rotate2 {
    from {
        transform: translate(-50%, -50%) 
        rotate(0deg);
    }
    to {
        transform: translate(-50%, -50%) 
        rotate(-360deg);
    }
}
</style>