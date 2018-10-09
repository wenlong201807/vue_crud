<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <mt-button @click.native="handleClick">按钮</mt-button>
    <mt-switch @click="open_close" v-model="value_btn">开关</mt-switch>
    <hr>
    <el-button :plain="true" @click="open">打开消息提示</el-button>
    <el-button @click="showAddDialog" type="success">添加数据</el-button>
    <h1>用户列表</h1>
    <table class="mytable table is-hover is-fullwidth is-striped is-bordered">
      <thead>
        <tr>
          <th>编号</th>
          <th>姓名</th>
          <th>电话</th>
          <th>地址</th>
          <th>编辑</th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr v-for="(item, index) in userList" :key="index">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.address}}</td>
          <td>
            <a @click="deluser(item.id)" href="javescript:void(0)">删除</a> &nbsp;
            <a @click="deluser(item.id)" href="javescript:void(0)">修改</a>
          </td>
        </tr> -->
        <row v-for="(item,index) in userList" :key="index" :propsArray="['id','name','phone','address']" @update:user="saveUser" @delete:id="delUser" :rowData="item"></row>
      </tbody>
    </table>

    <!-- 模态框部分 -->
    <!-- 添加弹出层 -->
    <el-dialog title="添加用户" :visible.sync="addDialogVisible" width="70%">
      <!-- <h3>添加用户信息</h3> -->
      <el-form :model="form">
        <el-form-item label="姓名" label-width="80px">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" label-width="80px">
          <el-input v-model="form.phone" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" label-width="80px">
          <el-input v-model="form.address" auto-complete="off"></el-input>
        </el-form-item>

        <!-- <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item> -->
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitAdd">添加</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
// import { MessageBox } from 'mint-ui'

import Row from '@/components/Row'
export default {
  name: 'Home',
  data () {
    return {
      addDialogVisible: false,
      msg: 'i am home.vue',
      value_btn: '',
      userList: [], // 初始化数据的数组
      form: {
        name: '',
        phone: '',
        address: ''
        // id:Date.now()

        // date2: '',
        // delivery: false,
        // type: [],
        // resource: '',
        // desc: ''
      }
      // formLabelWidth: '100px'

    }
  },
  created () { // 初始化数据
    axios.get('http://localhost:3698/users', {
      params: {
        ID: 12345
      }
    })
      .then((response) => {
        // console.log( response)
        // this.userList.push(...response.data)
        this.userList = response.data
      })
      .catch((e) => {
        this.$message({
          type: 'info',
          message: `数据加载失败` + e
        })
      })
  },
  methods: {
    // 子组件向父组件传递的**修改数据
    saveUser (e) {
      console.log(e)
      let index = this.userList.findIndex(item => e.id === item.id)
      this.userList.splice(index, 1, [e])
    },
    submitAdd () {
      console.log(this.form)
      // this.id = Date.now()
      axios
        .post('http://localhost:3698/users/', this.form)
        .then(res => {
          this.$message({
            type: 'info',
            message: `数据添加成功`
          })
          this.userList.push(res.data)
          this.addDialogVisible = false
        })
        .catch(() => {
          this.$confirm('添加失败')
        })
    },
    showAddDialog () {
      this.addDialogVisible = true
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(() => {
          done()
        })
        .catch(() => {})
    },
    delUser (id) {
      console.log(id)
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        axios.delete('http://localhost:3698/users/' + id)
          .then((res) => { // ellint-disable-line
            console.log(res)
            let delIndex = this.userList.findIndex(item => item.id === id)
            if (delIndex >= 0) {
              this.userList.splice(delIndex, 1)
            }
            this.$message({
              type: 'info',
              message: `数据删除成功`
            })
          })
          .catch((e) => {
            this.$message({
              type: 'info',
              message: `数据删除之后加载失败` + e
            })
          })
      }).catch((e) => {
        this.$message({
          type: 'info',
          message: `取消删除成功` + e
        })
      })
    },
    open () {
      // this.$message('这是一条消息提示')
      this.$message({
        type: 'info',
        message: `错误消息提示`
      })
    },
    handleClick: function () {
      this.$toast('Hello world!')
    },
    open_close () {
      // console.log( this.value_btn)
      // MessageBox({
      //   title: 'Notice',
      //   message: 'Are you sure?',
      //   showCancelButton: true
      // })
    }

  },
  components: {
    Row
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '~@/style/mixin';
.hello {
  // color: red;
  font-size: 36px;
  // @include header;
  .mytable {
    font-size: 25px;
  }
}
</style>
