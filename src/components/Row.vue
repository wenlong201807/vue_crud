<template>
  <tr class="row">
    <template v-if="isEdit">
      <td v-for="(item,index) in propsArray" :key="index">
        <template v-if="item === 'id'">
          {{userObj[item]}}
        </template>
        <template v-else>
          <input type="text" v-model="userObj[item]">
        </template>
      </td>
      <td>
        <a @click="cancalEdit" href="javescript:">取消</a> &nbsp;
        <a @click="saveUser" href="javescript:">保存</a>
      </td>
    </template>

    <template v-else>
      <td v-for="(item,index) in propsArray" :key="index">
        {{userObj[item]}}
      </td>
      <td>
        <a @click="delUser" href="javescript:">删除</a> &nbsp;
        <a @click="isEdit=true" href="javescript:">编辑</a>
      </td>
    </template>

    <!-- <td>{{item.id}}</td>
    <td>{{item.name}}</td>
    <td>{{item.phone}}</td>
    <td>{{item.address}}</td> -->
    <!-- <td>
      <a @click="deluser(item.id)" href="javescript:void(0)">删除</a> &nbsp;
      <a @click="deluser(item.id)" href="javescript:void(0)">修改</a>
    </td> -->
  </tr>
</template>

<script>
import axios from 'axios'
export default {
  name: 'row',
  props: ['rowData', 'propsArray'], // 属性不要进行修改
  data () {
    return {
      isEdit: false,
      // userObj: {...this.rowData}
      userObj: Object.assign({}, this.rowData)
    }
  },
  methods: {
    delUser (id) { // 父子组件传参失败
      // console.log('id', id)
      console.log('id', this.userObj, this.userObj.id)
      this.$emit('delete:id', this.userObj.id)
    },
    saveUser () {
      // console.log(this.userObj)
      // this.isEdit = false
      axios
        .put(`http://localhost:3698/users/${this.rowData.id}`, this.userObj)
        .then(() => {
          this.$emit('update:user', {...this.userObj})
          this.isEdit = false
          this.$message({
            type: 'info',
            message: `数据修改成功`
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: `数据修改失败`
          })
        })
    },
    cancalEdit () {
      Object.assign(this.userObj, this.rowData)
      this.isEdit = false
      this.$message({
        type: 'info',
        message: `取消修改成功`
      })
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '~@/style/mixin';
</style>
