<template>
  <div id="orderFlow">
    <el-steps :space="100" direction="vertical" :active="4">
      <el-step title="2016年11月8日16:28:05 xx公司发布订单"></el-step>
      <el-step title="2016年11月8日19:44:41 yy公司接受订单"></el-step>
      <el-step title="2016年11月8日21:12:15 yy公司发货"></el-step>
      <div class="img">
        <img src="../../../assets/logo.png" alt="">
        <img src="../../../assets/logo.png" alt="">
        <img src="../../../assets/logo.png" alt="">
      </div>
      <el-step title="2016年11月11日21:12:15 xx公司收货" :finish-status="success"></el-step>
    </el-steps>
  </div>
</template>

<style scoped>
  #orderFlow{
    margin: 10px;
  }
  .img{
    margin-left: 50px;
  }
  .img > img{
    width: 100px;
    height: 100px;
  }
</style>
