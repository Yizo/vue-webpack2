<template>
  <div id="accountSecurity">
    <el-form :model="formAlignRight" label-width="150px">
      <p>账号管理</p>
      <el-form-item label="您的账号" class="label">
        <el-input v-model="formAlignRight.name" class="input"></el-input>
      </el-form-item>
      <el-form-item label="您的姓名" class="label">
        <el-input v-model="formAlignRight.region" class="input"></el-input>
      </el-form-item>
      <el-form-item label="上次登入时间" class="label">
        <el-input v-model="formAlignRight.type" class="input"></el-input>
      </el-form-item>
      <el-form-item label="上次改密时间" class="label">
        <el-input v-model="formAlignRight.name" class="input"></el-input>
        <el-button class="button">修改密码</el-button>
      </el-form-item>
      <p>账号管理</p>
      <el-form-item label="安全问题设置" class="label">
        <el-input v-model="formAlignRight.region" class="input"></el-input>
        <el-button class="button">修改安全问题</el-button>
      </el-form-item>
      <el-form-item label="手机号码" class="label">
        <el-input v-model="formAlignRight.region" class="input"></el-input>
        <el-button class="button">绑定安全手机</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style scoped>
  p{
    width: 150px;
    text-align: right;
    font-size: 36px;
    padding: 20px;
  }
  .label{
    padding: 0 10px;
    position: relative;
  }
  .input{
    width: 200px;
  }
  .button{
    position: absolute;
    top:0;
    left: 250px;
  }
</style>
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
