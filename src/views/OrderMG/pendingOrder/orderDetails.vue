<template>
  <div id="orderDetails">
    <div class="left">
      <el-row class="info_warp">
        <el-col>销售方：<span>xxxx</span></el-col>
      </el-row>
      <el-row class="info_warp">
        <el-col>采购方：<span>xxx</span></el-col>
      </el-row>
      <el-row class="info_warp">
        <el-col>订单状态：<span>已线上付款</span></el-col>
      </el-row>
      <el-row>
        <h2>附件</h2>
        <img src="../../../assets/logo.png" alt="">
        <img src="../../../assets/logo.png" alt="">
        <img src="../../../assets/logo.png" alt="">
      </el-row>
    </div>
    <div class="right">
      <h2>订单内容：</h2>
      <p>
        xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      </p>
    </div>
  </div>
</template>

<style scoped>
  #orderDetails{
   display: flex;
   flex-flow: row nowrap;
   justify-content: space-around;
  }
  #orderDetails > div{
    padding: 10px;
  }
  #orderDetails img{
    width: 100px;
    height: 100px;
  }
  .info_warp{
    padding: 10px;
  }
  .right p{
    width: 300px;
    border: 1px solid #1d1d1d;
    margin: 10px;
  }
</style>
