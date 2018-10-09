<template>
  <div class="mintui">
    <h1>{{ msg }}</h1>
    <router-link to="/">jumpToHome</router-link> <br/>
    <hr>
    <input type="button" value="handleClick_inp" @click="handleClick_inp">
    <mt-button type="primary" @click.native="hh" size="large">hh</mt-button>
    <mt-button class="mysweetheart" type="default" size="normal">primary</mt-button>
    <mt-button disabled>disabled</mt-button>
    <mt-button plain>plain</mt-button>
    <mt-button icon="back">back</mt-button>
    <button type="button" class="mui-btn mui-btn-royal">
      紫色
    </button>
    <button type="button" class="mui-btn mui-btn-royal mui-btn-outlined">
      高贵
    </button>
  </div>
</template>

<script>
// 使用 js components部分的一定要按需导入
import { Toast } from 'mint-ui'
export default {
  name: 'Mintui',
  data () {
    return {
      msg: 'Welcome to Your Mintui'
    }
  },
  methods: {
    hh () {
      console.log(145)
      Toast({
        message: '提示',
        position: 'middle',
        // iconClass: 'glyphicon glyphicon-ok', // 失败
        duration: 2000
      })
    },
    handleClick_inp () {
      console.log(123)
      Toast({
        message: '提示',
        position: 'middle',
        // iconClass: 'glyphicon glyphicon-heart', // 失败
        duration: 2000
      })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '~@/style/mixin';
.mintui {
  font-size: 36px;
}
</style>
