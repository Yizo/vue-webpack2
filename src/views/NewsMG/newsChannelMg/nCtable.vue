<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="account"
        label="频道ID"
        width="180">
      </el-table-column>
      <el-table-column
        inline-template
        label="频道icon"
        width="180">
        <el-button type="text">../assets/log.png</el-button>
      </el-table-column>
      <el-table-column
        prop="emali"
        label="频道名">
      </el-table-column>
      <el-table-column
        prop="start"
        label="父频道">
      </el-table-column>
      <el-table-column
        inline-template
        label="操作">
        <div>
          <el-button>↑</el-button>
          <el-button>↓</el-button>
          <el-button>置顶</el-button>
          <el-button @click="openDialog">编辑</el-button>
          <el-button>删除</el-button>
        </div>
      </el-table-column>
    </el-table>
    <modal-dialog :show.sync="show" :class="dialogClass" v-on:closeDialogX="closeDialogx">

      <header class="dialog-header" slot="header">
        <h2 class="dialog-title">编辑频道</h2>
      </header>

      <div class="dialog-body" slot="body">
        <div class="info">
          <el-form label-width="80px">
            <el-form-item label="频道名">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="父频道">
              <el-select>
                <el-option
                  v-for="item in options"
                  :label="item.label"
                  :value="item.value"
                  class="option">
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
        <div class="img">
          <h3>频道icon</h3>
          <img src="../../../assets/logo.png" alt="">
        </div>
      </div>

      <footer class="dialog-footer" slot="footer">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-button @click="closeDialog">确定</el-button>
          </el-col>
          <el-col :span="12">
            <el-button @click="closeDialog">关闭</el-button>
          </el-col>
        </el-row>
      </footer>
    </modal-dialog>
  </div>
</template>

<script>
  import modalDialog from '../../../components/common/vue/dialog.vue'
  export default {
    components:{
      modalDialog
    },
    data() {
      return {
        show:false,
        tableData: [{
          account:'531412',
          phone:1341555421,
          emali: 'sahfoaw@xgit.com',
          start: '已付款',
          address: '管理员'
        }, {
          account:'531412',
          phone:1341555421,
          emali: 'sahfoaw@xgit.com',
          start: '已付款',
          address: '管理员'
        },{
          account:'531412',
          phone:1341555421,
          emali: 'sahfoaw@xgit.com',
          start: '已付款',
          address: '管理员'
        },{
          account:'531412',
          phone:1341555421,
          emali: 'sahfoaw@xgit.com',
          start: '已付款',
          address: '管理员'
        },{
          account:'531412',
          phone:1341555421,
          emali: 'sahfoaw@xgit.com',
          start: '已付款',
          address: '管理员'
        },{
          account:'531412',
          phone:1341555421,
          emali: 'sahfoaw@xgit.com',
          start: '已付款',
          address: '管理员'
        },{
          account:'531412',
          phone:1341555421,
          emali: 'sahfoaw@xgit.com',
          start: '已付款',
          address: '管理员'
        }],
        options: [{
          value: '选项1',
          label: '条目一'
        }, {
          value: '选项2',
          label: '条目二'
        }, {
          value: '选项3',
          label: '条目三'
        }, {
          value: '选项4',
          label: '条目四'
        }],
      }
    },
    methods:{
      openDialog(){
        this.show = true
      },
      closeDialog(){
        this.show = false
      },
      closeDialogx(){
        this.show = false
      }
    }
  }
</script>
<style scoped>
  .dialog-body{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }
  .dialog-body > div{
    margin: 20px;
  }
  .option{
    width: 200px;
  }
</style>
