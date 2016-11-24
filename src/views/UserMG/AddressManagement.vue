<template>
    <div id="am_warp">
      <table-address></table-address>
      <el-button type="primary" class="am_button">确定</el-button>
    </div>
</template>
<script>
  import tableAddress from '../../components/common/vue/table.vue'

  export  default {
    components:{
      tableAddress
    }
  }
</script>

<style scoped>
  #am_warp{
    width: 100%;
    margin: 10px;
  }
  .am_button{
    margin-top:10px;
  }
</style>

