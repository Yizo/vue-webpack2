<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="account"
      label="订单"
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
      <el-button>查看详情</el-button>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
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
    }
  }
</script>
