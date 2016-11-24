<!--用户资料认证-->
<template>
  <div id="userIMCC">
    <el-row :gutter="20">
      <el-form :model="formAlignRight" label-width="120px" class="clearfix">
      <el-col :span="12">
        <el-form-item label="真实姓名" class="ui_input_warp">
          <el-input v-model="formAlignRight.name" class="ui_input"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="身份证号码" class="ui_input_warp">
          <el-input v-model="formAlignRight.region" class="ui_input"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="认证类别" class="ui_input_warp">
          <el-input v-model="formAlignRight.type" class="ui_input"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="公司名" class="ui_input_warp">
          <el-input v-model="formAlignRight.name" class="ui_input"></el-input>
        </el-form-item>
      </el-col>
        <el-col :span="12">
          <el-form-item label="营业执照号" class="ui_input_warp">
            <el-input v-model="formAlignRight.name" class="ui_input"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="税务登记号" class="ui_input_warp">
            <el-input v-model="formAlignRight.name" class="ui_input"></el-input>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
    <el-row :gutter="2" class="img_warp">
      <el-col :span="3" :offset="5">
        <img src="../../../assets/logo.png" alt="" class="ui_img">
      </el-col>
      <el-col :span="3">
        <img src="../../../assets/logo.png" alt="" class="ui_img">
      </el-col>
      <el-col :span="3">
        <img src="../../../assets/logo.png" alt="" class="ui_img">
      </el-col>
      <el-col :span="3">
        <img src="../../../assets/logo.png" alt="" class="ui_img">
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12" :offset="9">
        <el-button :span="12">确定</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        formAlignRight: {
          name: '',
          region: '',
          type: ''
        }
      };
    }
  }
</script>

<style scoped>
  #userIMCC{
    width: 80%;
    margin: 0 auto;
    margin-top: 50px;
  }
  .ui_input{
    width: 50%;
  }
  .img_warp{
    margin-top: 20px;
  }
  .ui_img{
    width: 100px;
    height: 100px;
    border:1px solid #f4f4f4;
  }
</style>
