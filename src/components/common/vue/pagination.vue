<template>
<div class="block">
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="5"
    :page-sizes="[10, 20, 50, 100]"
    :page-size="10"
    layout="total, sizes, prev, pager, next, jumper"
    :total="100">
  </el-pagination>
</div>
</template>
<script>
  export default {
    methods: {
      handleSizeChange(val) {
        alert(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        alert(`当前页: ${val}`);
      }
    }
  }
</script>
<style scoped>
  .block{
    padding: 10px;
  }
</style>
