<template>
  <div id="BatchPayment">
    <p>支付宝批量付款给销售商(收债人)</p>
    <el-row :gutter="20" class="bp_warp">
      <el-col :span="2"><span>付款时期</span></el-col>
      <el-col :span="4">
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="起始日期"
          :picker-options="pickerOptions0">
        </el-date-picker>
      </el-col>
      <el-col :span="1"><span>-</span></el-col>
      <el-col :span="4">
        <el-date-picker
          v-model="value2"
          type="date"
          placeholder="结束日期"
          :picker-options="pickerOptions0">
        </el-date-picker>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="bp_warp">
      <el-col :span="2"><span>付款类型</span></el-col>
      <el-col :span="3">
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="付款给销售商(订单)" class="check_label"></el-checkbox>
          <el-checkbox label="付款给销售商(债务单)" class="check_label"></el-checkbox>
          <el-checkbox label="付款给收债人" class="check_label"></el-checkbox>
        </el-checkbox-group>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="bp_warp bp_warp_mp">
      <el-col :span="2">币种</el-col>
      <el-col :span="4">
        <el-select v-model="formInline.region" placeholder="货币选择">
          <el-option label="美元" value="shanghai"></el-option>
          <el-option label="人民币" value="beijing"></el-option>
          <el-option label="英镑" value="beijing"></el-option>
          <el-option label="法郎" value="beijing"></el-option>
          <el-option label="韩元" value="beijing"></el-option>
          <el-option label="日币" value="beijing"></el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="bp_warp bp_warp_mp">
      <el-col :span="2" :offset="2"><el-button>查询</el-button></el-col>
    </el-row>
    <table2></table2>
    <el-row class="bp_warp">
      <el-col :span="2" :offset="8"><el-button>支付宝批量付款</el-button></el-col>
    </el-row>
  </div>
</template>
<script>
  import table2 from './BPtable.vue'

  export default {
    components:{
      table2
    },
    data() {
      return {
        checkList: [],
        formInline: {
          user: '',
          region: ''
        },
        pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: ''
      };
    }
  };
</script>
<style scoped>
  #BatchPayment{
    margin-left: 10%;
  }
  p{
    font-size: 20px;
    padding: 20px 10px;
  }
  span{
    font-size: 14px;
    display: inline-block;
    height: 36px;
    line-height: 36px;
  }
  .check_label{
    margin-left: 0px;
  }
  .bp_warp{
    margin-top:20px;
  }
  .bp_warp_mp{
    margin-bottom: 20px;
  }
</style>
