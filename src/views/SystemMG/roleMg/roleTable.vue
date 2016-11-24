<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="account"
      label="账号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="phone"
      label="手机号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="emali"
      label="邮箱">
    </el-table-column>
    <el-table-column
      prop="start"
      label="状态">
    </el-table-column>
    <el-table-column
      prop="address"
      label="权限">
    </el-table-column>
    <el-table-column
      inline-template
      label="操作">
      <el-button>配置</el-button>
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
