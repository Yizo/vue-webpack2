<template>
  <div id="userInfomation">
    <el-row class="img_warp">
      <el-col :offset="9">
        <img src="../../../assets/logo.png" alt="" class="ui_img">
      </el-col>
    </el-row>
    <div class="input_warp">
      <div class="warp">
        <span>姓名</span>
        <input type="text" :value="uIndex">
      </div>
      <div class="warp">
        <span>用户名</span>
        <input type="text">
      </div>
      <div class="warp">
        <span>用户类型</span>
        <input type="text">
      </div>
      <div class="warp">
        <span>公司名称</span>
        <input type="text">
      </div>
      <div class="warp">
        <span>手机号码</span>
        <input type="text">
      </div>
    </div>
    <el-row class="button">
      <el-col offset="11">
        <el-button>确定</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        formAlignRight: {
          name: '',
          region: '',
          type: ''
        }
      };
    },
    computed:{
      ...mapGetters(['uIndex'])
    }
  }
</script>

<style scoped>
  .button{
    margin-top: 50px;
  }
  .img_warp{
    padding: 50px 0;
  }
  .input_warp{
    margin: 0 auto;
    display: flex;
    flex-flow:row wrap;
    justify-content: flex-start;
    width: 700px;
  }
  .warp{
    margin: 10px;
    padding:0 10px;
  }
  .warp span{
    height: 35px;
    line-height: 35px;
    text-align: left;
    width: 60px;
    padding:0 5px;
    display: inline-block;
  }
  .warp input{
    width: 200px;
    height: 25px;
    padding: 5px 0;
    border: 1px solid #e9e9e9;
    border-radius: 3px;
  }
  img{
    display: block;
    width: 100px;
    height: 100px;
  }
</style>
