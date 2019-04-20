<template>
	<div :id="id" :style="style"></div>
</template>
<script>
export default {
	props: {
		id: {
			type: String
		},
		width: {
			type: String,
			default: "100%"
		},
		height: {
			type: String
		},
		option: {
			type: Object
		}
	},
	data() {
		return {
			MyEcharts: ""
		}
	},
	computed: {
		style() {
			return {
				height: this.height,
				width: this.width
			}
		}
	},
	watch: {// 用于监听option，根据数据的变化来重绘图表
		option: {
			deep: true,
			handler(newVal, oldVal) {
				if (this.MyEcharts) {// 如果已经实例过
					if (newVal) {
						this.MyEcharts.setOption(newVal, true)
					} else {
						this.MyEcharts.setOption(oldVal, true)
					}
				} else {// 否则实例
					this.InitCharts()
				}
			}
		}
	},
	mounted() {
		this.InitCharts()
	},
	methods: {
		InitCharts() {
			// 初始化echarts实例
			this.MyEcharts = this.$echarts.init(document.getElementById(this.id));
			this.MyEcharts.clear()//适用于大数据量的切换时图表绘制错误，先清空再重绘
			this.MyEcharts.setOption(this.option, true)

			// 当窗口变化时随浏览器大小而改变
			let _this = this
			window.addEventListener('resize', function() {
				_this.MyEcharts.resize()
			})
		}
	}
}
</script>
<style scoped></style>