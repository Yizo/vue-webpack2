<template>
<div>
  <el-table
    :data="tableData[0].result"
    style="width:100%">
    <el-table-column
      prop="rid"
      label="姓名"
      type="index"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="用户名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="wk"
      label="用户类型">
    </el-table-column>
    <el-table-column
      prop="wboxoffice"
      label="公司名称">
    </el-table-column>
    <el-table-column
      prop="tboxoffice"
      label="手机号码">
    </el-table-column>
    <el-table-column
      inline-template
      label="操作"
      :type="index">
      <div>
        <el-button type="text" size="small" @click="openDialog(row),upIndex(row)">编辑</el-button>
        <el-button type="text" size="small">|</el-button>
        <el-button type="text" size="small" @click="deleteCl(row)">删除</el-button>
        <el-button type="text" size="small">|</el-button>
        <el-button type="text" size="small">冻结</el-button>
      </div>
    </el-table-column>
  </el-table>
  <modal-dialog :show.sync="show" :class="dialogClass" v-on:closeDialogX="closeDialogx">

    <header class="dialog-header" slot="header">
      <h1 class="dialog-title">{{name}}的详细资料</h1>
    </header>

    <div class="dialog-body" slot="body">
      <div class="info_title">
        <span @click="toggleTabs(index1)">基本资料</span>
        <span @click="toggleTabs(index2)">认证资料</span>
        <span @click="toggleTabs(index3)">收货地址</span>
        <span @click="toggleTabs(index4)">收款账户</span>
      </div>
      <div>
        <component :is="currentView" transition-mode="out-in" keep-alive></component>
      </div>
    </div>

    <footer class="dialog-footer" slot="footer">
      <button class="btn" @click="closeDialog">关闭</button>
    </footer>
  </modal-dialog>
</div>
</template>
<script>
  import modalDialog from '../../../components/common/vue/dialog.vue'
  import userInfo from './userInformation.vue'
  import userImcc from './userIMCC.vue'
  import sadd from './ShippingAddress.vue'
  import bankAccount from './BankAccount.vue'
  import { mapActions,mapGetters } from 'vuex'
  export default {
    components:{
      'modalDialog':modalDialog,
      'userInfo':userInfo,
      'userImcc':userImcc,
      'sadd':sadd,
      'bankAccount':bankAccount
    },
    data() {
      return {
        //弹窗
        show:false,
        //编辑表格切换
        index1:'userInfo',
        index2:'userImcc',
        index3:'sadd',
        index4:'bankAccount',
        currentView:'userInfo',
        //表格属性
        tableData:[],
        name:''
      }
    },
    methods: {
      openDialog(row){
        this.show = true;
        this.name = row.name
      },
      closeDialog(){
        this.show = false
      },
      toggleTabs(index){
        this.currentView = index;
      },
      closeDialogx(){
        this.show = false
      },
      getUserInfo(){
        var vm = this;
        vm.$http.get('/boxoffice/rank',{
          params:{
            key:'c62481a7f231b3b34df8dc5e87a264a8',
            area:'CN',
          }
        }).then((response)=>{
            vm.tableData.push(response.data);
        })
      },
      deleteCl(row){
        const data = this.tableData[0].result;
        data.splice(data.indexOf(row),1);
      },
      ...mapActions({
        upIndex:'C_index'
      }),
    },
    watch:{
      '$route':'getUserInfo'
    },
    created(){
      this.getUserInfo();
    },
  }
</script>
<style scoped>
  .info_title{
    font-size: 16px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #1F2D3Dq;
  }
</style>
