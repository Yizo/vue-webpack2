<template>
<div>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="account"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="phone"
      label="用户名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="emali"
      label="用户类型">
    </el-table-column>
    <el-table-column
      prop="start"
      label="公司名称">
    </el-table-column>
    <el-table-column
      prop="address"
      label="手机号码">
    </el-table-column>
    <el-table-column
      inline-template
      label="操作">
      <el-button type="text" size="small" @click="openDialog">编辑</el-button>
    </el-table-column>
  </el-table>
  <modal-dialog :show.sync="show" :class="dialogClass" @closeDialogX="closeDialogx">

    <header class="dialog-header" slot="header">
      <h2 class="dialog-title">张三详细资料</h2>
    </header>

    <div class="dialog-body" slot="body">
        <div class="info">
          <h3>基本资料</h3>
          <label>用户名:<span>xxxx</span></label>
          <label>手机号码:<span>xxxx</span></label>
          <label>邮箱:<span>xxxx</span></label>
          <h3>认证资料:</h3>
          <label>真实姓名:<span>xxxx</span></label>
          <label>身份证号码:<span>xxxx</span></label>
          <label>认证类别:<span>xxxx</span></label>
          <label>营业执照:<span>xxxx</span></label>
          <label>税务登记号:<span>xxxx</span></label>
        </div>
        <div class="img">
          <h3>附件</h3>
          <img src="../../../assets/logo.png" alt="">
          <img src="../../../assets/logo.png" alt="">
          <img src="../../../assets/logo.png" alt="">
        </div>
    </div>

    <footer class="dialog-footer" slot="footer">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-button @click="closeDialog">确定</el-button>
        </el-col>
        <el-col :span="12">
          <el-button @click="closeDialog">关闭</el-button>
        </el-col>
      </el-row>
    </footer>
  </modal-dialog>
</div>
</template>

<script>
  import modalDialog from '../../../components/common/vue/dialog.vue'
  export default {
    components:{
      modalDialog
    },
    data() {
      return {
        show:false,
        tableData: [{
          account:'531412',
          phone:1341555421,
          emali: 'sahfoaw@xgit.com',
          start: '已付款',
          address: '管理员'
        }, {
          account:'531412',
          phone:1341555421,
          emali: 'sahfoaw@xgit.com',
          start: '已付款',
          address: '管理员'
        },{
          account:'531412',
          phone:1341555421,
          emali: 'sahfoaw@xgit.com',
          start: '已付款',
          address: '管理员'
        },{
          account:'531412',
          phone:1341555421,
          emali: 'sahfoaw@xgit.com',
          start: '已付款',
          address: '管理员'
        },{
          account:'531412',
          phone:1341555421,
          emali: 'sahfoaw@xgit.com',
          start: '已付款',
          address: '管理员'
        },{
          account:'531412',
          phone:1341555421,
          emali: 'sahfoaw@xgit.com',
          start: '已付款',
          address: '管理员'
        },{
          account:'531412',
          phone:1341555421,
          emali: 'sahfoaw@xgit.com',
          start: '已付款',
          address: '管理员'
        }]
      }
    },
    methods:{
      openDialog(){
        this.show = true
      },
      closeDialog(){
        this.show = false
      },
      closeDialogx(){
        this.show = false
      }
    }
  }
</script>
<style scoped>
  h3{
    color: #1D8CE0;
  }
  .dialog-body{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }
  .dialog-body > div{
    margin: 20px;
  }
  label{
    display: block;
    margin: 10px;
    font-family: "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei UI", "Microsoft YaHei", SimHei, "宋体", simsun, sans-serif;
    font-size: 14px;
  }
  .img img{
    width: 100px;
    height: 100px;
    display: inline-block;
  }
</style>
