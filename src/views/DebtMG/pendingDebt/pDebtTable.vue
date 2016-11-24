<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="account"
        label="订单ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="销售方"
        width="180">
      </el-table-column>
      <el-table-column
        prop="emali"
        label="采购方">
      </el-table-column>
      <el-table-column
        prop="start"
        label="订单状态">
      </el-table-column>
      <el-table-column
        prop="address"
        label="创建时间">
      </el-table-column>
      <el-table-column
        prop="address"
        label="订单内容">
      </el-table-column>
      <el-table-column
        inline-template
        label="操作">
        <el-button @click="openDialog">查看详情</el-button>
      </el-table-column>
    </el-table>

    <modal-dialog :show.sync="show" :class="dialogClass">
      <header class="dialog-header" slot="header">
        <h2 class="dialog-title">订单详情</h2>
      </header>
      <div class="dialog-body" slot="body">
        <div class="info_title">
          <span @click="toggleTabs(index1)">订单详情</span>
          <span @click="toggleTabs(index2)">订单流转</span>
        </div>
        <div>
          <component :is="currentView" transition-mode="out-in" keep-alive></component>
        </div>
      </div>

      <footer class="dialog-footer" slot="footer">
        <el-row :gutter="20">
          <el-col :span="8" offset="4">
            <el-button @click="closeDialog">确定</el-button>
          </el-col>
        </el-row>
      </footer>
    </modal-dialog>
  </div>
</template>

<script>
  import modalDialog from '../../../components/common/vue/dialog.vue'
  import orderDetails from './orderDetails.vue'
  import orderFlow from './orderFlow.vue'
  export default {
    components:{
      modalDialog,
      'orderDetails':orderDetails,
      'orderFlow':orderFlow
    },
    data() {
      return {
        currentView:'orderDetails',
        index1:'orderDetails',
        index2:'orderFlow',
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
      toggleTabs(index){
        this.currentView = index
      }
    },
  }
</script>
<style scoped>
  .dialog-body{
    font-family: "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei UI", "Microsoft YaHei", SimHei, "宋体", simsun, sans-serif;
  }
  .info_title > span{
    display: inline-block;
    font-size: 15px;
    border: 1px solid #ccc;
    padding: 2px 5px;
    cursor: pointer;
  }
</style>
