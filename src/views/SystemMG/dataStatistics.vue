<template>
  <div id="dataStatistics">
    <p>数据统计</p>
    <el-form :model="formAlignRight" label-width="150px">
      <el-form-item label="新增用户量" class="label">
        <el-input v-model="formAlignRight.name" class="input"></el-input>
        <el-button class="button">统计</el-button>
      </el-form-item>
      <el-form-item label="15天注册量" class="label">
        <el-input v-model="formAlignRight.region" class="input"></el-input>
        <el-button class="button">统计</el-button>
      </el-form-item>
      <el-form-item label="30天注册量" class="label">
        <el-input v-model="formAlignRight.type" class="input"></el-input>
        <el-button class="button">统计</el-button>
      </el-form-item>
      <el-form-item label="30天没登入用户数" class="label">
        <el-input v-model="formAlignRight.name" class="input"></el-input>
        <el-button class="button">统计</el-button>
      </el-form-item>
      <el-form-item label="消费高峰期" class="label">
        <el-input v-model="formAlignRight.region" class="input"></el-input>
        <el-button class="button">统计</el-button>
      </el-form-item>
      <el-form-item label="注册高峰期" class="label">
        <el-input v-model="formAlignRight.region" class="input"></el-input>
        <el-button class="button">统计</el-button>
      </el-form-item>
      <el-form-item label="活跃用户量" class="label">
        <el-input v-model="formAlignRight.type" class="input"></el-input>
        <el-button class="button">统计</el-button>
      </el-form-item>
      <el-form-item label="订单总量" class="label">
        <el-input v-model="formAlignRight.type" class="input"></el-input>
        <el-button class="button">统计</el-button>
      </el-form-item>
      <el-form-item label="昨日订单递增量" class="label">
        <el-input v-model="formAlignRight.type" class="input"></el-input>
        <el-button class="button">统计</el-button>
      </el-form-item>
      <el-form-item label="30日订单量" class="label">
        <el-input v-model="formAlignRight.type" class="input"></el-input>
        <el-button class="button">统计</el-button>
      </el-form-item>
      <el-form-item label="订单手续费总额" class="label">
        <el-input v-model="formAlignRight.type" class="input"></el-input>
        <el-button class="button">统计</el-button>
      </el-form-item>
      <el-form-item label="订单手续费优惠金额" class="label">
        <el-input v-model="formAlignRight.type" class="input"></el-input>
        <el-button class="button">统计</el-button>
      </el-form-item>
      <el-form-item label="保险费总额" class="label">
        <el-input v-model="formAlignRight.type" class="input"></el-input>
        <el-button class="button">统计</el-button>
      </el-form-item>
      <el-form-item label="保险费优惠金额" class="label">
        <el-input v-model="formAlignRight.type" class="input"></el-input>
        <el-button class="button">统计</el-button>
      </el-form-item>
    </el-form>
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


