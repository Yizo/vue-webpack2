<template>
<div>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="account"
      label="用户名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="phone"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="手机号码">
    </el-table-column>
    <el-table-column
      prop="address"
      label="部门">
    </el-table-column>
    <el-table-column
      inline-template
      label="操作">
      <div>
        <el-button type="text" size="small" @click="openDialog">编辑</el-button>
        <el-button type="text" size="small">|</el-button>
        <el-button type="text" size="small">删除</el-button>
      </div>
    </el-table-column>
  </el-table>
  <modal-dialog :show.sync="show" :class="dialogClass" @closeDialogX="closeDialogx">

    <header class="dialog-header" slot="header">
      <h2 class="dialog-title">后台用户管理</h2>
    </header>

    <div class="dialog-body" slot="body">
        <el-form :model="formAlignLeft" label-position="left" @submit.native.prevent="onSubmit" label-width="80px">
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="用户名">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="姓名">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="手机号码">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="部门">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="密码">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="确认密码">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
            </el-row>
        </el-form>
      </el-form>
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
        tableData: []
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
    },
  }
</script>
<style scoped>
  .dialog-body{
    padding: 20px;
  }
</style>
