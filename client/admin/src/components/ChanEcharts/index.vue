<template>
  <div class="echarts">
    <div ref="myEcharts" style="width: 100%; height: 100%;margin:0 auto;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'ChanEcharts',
  props: {
    option: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      myEcharts: null
    }
  },
  mounted () {
    this.initEcharts()
  },
  methods: {
    initEcharts () {
      this.myEcharts = echarts.init(this.$refs.myEcharts)
      this.myEcharts.setOption(this.option)
    }
  },
  watch: {
    option: {
      handler (val) {
        this.myEcharts.setOption(val)
      },
      deep: true
    }
  } ,
  beforeDestroy () {
    this.myEcharts.dispose()
  }
}
</script>

<style scoped>
.echarts {
  width: 100%;
  height: 100%;
}

.echarts :deep(>div>div) {
    margin:0 auto!important;
}
</style>