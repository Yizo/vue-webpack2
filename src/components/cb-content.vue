<template>
  <div id="cb-content-warp">
    <router-view class="content-margin"></router-view>
  </div>
</template>
<style scoped>
  #cb-content-warp{
    width: calc(100% - 202px);
    display: inline-block;
    float: right;
  }
  .content-margin{
    margin: 10px;
  }
</style>
