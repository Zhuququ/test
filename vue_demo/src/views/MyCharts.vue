<template>
	<div>
		<MyCharts :id="'exampleId'" :style="{width: '100%', height: '380px'}" :option="chartOption">
		</MyCharts>
	</div>
</template>
<script>
import MyCharts from '@/components/Echarts/index'// 引入组件
export default {
	components: {
		MyCharts
	},
	data() {
		return {
			chartOption: {}
		}
	},
	mounted() {
		this.initCharts()
	},
	methods: {
		initCharts() {
			this.chartOption = {
				title: {
					text: 'ECharts 入门示例'
				},
				tooltip: {},
				legend: {
					data: ['销量']
				},
				xAxis: {
					data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
				},
				yAxis: {},
				series: [{
					name: '销量',
					type: 'bar',
					data: [5, 20, 36, 10, 10, 20]
				}]
			}
		}
	}
}
</script>