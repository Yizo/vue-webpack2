<template>
<div id="BPtable">
  <el-table :data="tableData" style="width: 80%" border id="table">
    <el-table-column type="selection">
    </el-table-column>
    <el-table-column prop="orderNumber" label="订单号">
    </el-table-column>
    <el-table-column prop="type" label="付款类型">
    </el-table-column>
    <el-table-column prop="Amount" label="金额">
    </el-table-column>
    <el-table-column prop="address" label="收款人(公司名)">
    </el-table-column>
    <el-table-column prop="account" label="收款账号">
    </el-table-column>
  </el-table>
  <page-tab></page-tab>
</div>
</template>

<script>
  import pageTab from '../components/common/vue/pagination.vue'
  export default {
    components:{
      pageTab
    },
    data() {
      return {
        tableData: [{
          orderNumber: '649465416844',
          type: '收债人',
          Amount:'5000',
          address: '上海市普陀区金沙江路 1518 弄',
          account:'24841264'
        }, {
          orderNumber: '6416168431',
          type: '销售商(订单)',
          Amount:'6000',
          address: '上海市普陀区金沙江路 1528 弄',
          account:'2483511264'
        }, {
          orderNumber: '561684064',
          type: '销售商(债务)',
          Amount:'8400',
          address: '上海市普陀区金沙江路 1018 弄',
          account:'24841264'
        }, {
          orderNumber: '55168416841',
          type: '采购商(订单)',
          Amount:'41398',
          address: '上海市普陀区金沙江路 1918 弄',
          account:'5161510'
        }],
      }
    }
  }
</script>
<style scoped>
</style>
