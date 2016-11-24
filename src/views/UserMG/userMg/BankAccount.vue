<template>
<div id="baccount">
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="联系人"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="联系电话"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="银行">
    </el-table-column>
    <el-table-column
      prop="address"
      label="账号">
    </el-table-column>
    <el-table-column
      prop="address"
      label="默认">
    </el-table-column>
  </el-table>
  <el-row>
    <el-col>
      <el-button offset="11">确定</el-button>
    </el-col>
  </el-row>
</div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>
