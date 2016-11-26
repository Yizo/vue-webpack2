<template>
  <div id="top_serch">
    <el-row :gutter="20">
      <el-col :span="3">
        <el-input icon="time" :placeholder="tsb_input1" @click="handleIconClick" class="input">
        </el-input>
      </el-col>
      <el-col :span="3" v-show="input2_show">
        <el-input icon="time" :placeholder="tsb_input2" @click="handleIconClick" class="input">
        </el-input>
      </el-col>
      <el-col :span="3" v-show="select_show">
        <el-select :placeholder="tsb_selectTitle">
          <el-option v-for="option in tsb_options" :label="option" @change="changes" :value="option">{{option}}</el-option>
        </el-select>
      </el-col>
      <el-col :span="3">
        <el-button>{{tsb_button1}}</el-button>
      </el-col>
      <el-col :span="2" :offset="4" v-show="button2_show" @click="openClose">
        <el-button>{{tsb_button2}}</el-button>
      </el-col>
</el-row>
</div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    props:['tsb_input1','tsb_input2','tsb_options','tsb_selectTitle','tsb_button1','tsb_button2','input2_show','select_show','button2_show'],
    data(){
      return {
        input2_show:true,
        select_show:true,
        button2_show:true,
      }
    },
    methods:{
      changes(value){
        alert(value);
      }
    }
  }
</script>
<style scoped>
  #top_serch{
    margin: 10px 0;
    color: #1d8ce0;
  }
</style>
