<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    <router-link to="/about">jumpToabout</router-link> <br/>
    <router-link to="/iscroll">jumpToiscroll</router-link> <br/>
    <router-link to="/mintui">jumpTomintui</router-link> <br/>
    <mt-progress :value="20" :bar-height="5"></mt-progress>
    <router-link to="/">跳转至home</router-link>
    <hr>
    <hello-world></hello-world>
    <ul class="li_wrap">

      <router-link to="/about/about_left" tag="li" class="left">about_left</router-link>
      <router-link to="/about/about_right" tag="li" class="right">about_right</router-link>
    </ul>
    <hr class="line_sep">
    <router-view></router-view>

  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'i am about.vue'
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '~@/style/mixin';
.about {
  font-size: 20px;
  color: #ccc;
  // @include header;
  .li_wrap {
    line-height: 50px;

    .left,
    .right {
      float: left;
      width: 200px;
      margin: 10px;
      border: 1px solid #ccc;
    }
  }
  .line_sep {
    clear: both;
  }
}
</style>
