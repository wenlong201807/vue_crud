<template>
  <div class="iscroll">
    <h1>{{ msg }}</h1>
    <router-link to="/">jumpTohome</router-link> <br/>
    <mt-progress :value="50" :bar-height="6"></mt-progress>
    <!-- 使用iscroll -->
    <div id="wrapper" class="wrapper_iscroll">
      <ul>
        <li>点击方框可以上下拉动</li>
        <li>...</li>

      </ul>
    </div>
  </div>
</template>

<script>
// import '@/plugin/iscroll.js'
export default {
  name: 'Iscroll',
  data () {
    return {
      msg: 'Iscroll'
    }
  },
  created () {
    this.initIscroll()
  },
  methods: {
    // let myScroll;
    initIscroll () {
      // var myScroll
      // myScroll = new IScroll('#wrapper', {
      //   mouseWheel: true,
      //   scrollbars: true
      // })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '~@/style/mixin';
.iscroll {
  font-size: 36px;
  .wrapper_iscroll {
    height: 200px;
    border: 1px solid #ccc;
  }
}
</style>
