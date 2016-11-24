<template>
  <div id="cb-nav-warp">
    <el-col :span="24">
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" theme="dark" unique-opened="true">
        <el-menu-item index="1"><router-link :to="{name:'home'}" tag="p">首页</router-link></el-menu-item>
        <el-submenu index="2">
          <template slot="title">用户管理</template>
<!--            <el-menu-item index="2-1"><router-link :to="{name:'ShippingAddress'}"  tag="p">收货地址</router-link></el-menu-item>
            <el-menu-item index="2-2"><router-link :to="{name:'BankAccount'}"  tag="p">银行账户</router-link></el-menu-item>
            <el-menu-item index="2-3"><router-link :to="{name:'userInformation'}"  tag="p">用户基本资料</router-link></el-menu-item>
            <el-menu-item index="2-4"><router-link :to="{name:'userIMCC'}"  tag="p">用户认证资料</router-link></el-menu-item>&ndash;&gt;-->
            <el-menu-item index="2-1"><router-link :to="{name:'userManagement'}"  tag="p">用户管理</router-link></el-menu-item>
            <el-menu-item index="2-2"><router-link :to="{name:'systemUserMG'}"  tag="p">后台用户管理</router-link></el-menu-item>
            <el-menu-item index="2-3"><router-link :to="{name:'PendingUsersMG'}"  tag="p">待审核用户管理</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">资讯管理</template>
          <el-menu-item index="3-1"><router-link :to="{name:'newsChannelMG'}"  tag="p">新闻频道管理</router-link></el-menu-item>
          <el-menu-item index="3-2"><router-link :to="{name:'newsMG'}"  tag="p">新闻管理</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">订单管理</template>
          <el-menu-item index="4-1"><router-link :to="{name:'orderQuery'}"  tag="p">订单查询</router-link></el-menu-item>
          <el-menu-item index="4-2"><router-link :to="{name:'pendingOrder'}"  tag="p">待转账订单</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">债权管理</template>
          <el-menu-item index="5-1"><router-link :to="{name:'debtQuery'}"  tag="p">债权查询</router-link></el-menu-item>
          <el-menu-item index="5-2"><router-link :to="{name:'pendingDebt'}"  tag="p">待转账债权</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">系统管理</template>
          <el-menu-item index="6-1"><router-link :to="{name:'poundageMG'}"  tag="p">手续费管理</router-link></el-menu-item>
          <el-menu-item index="6-2"><router-link :to="{name:'roleMG'}"  tag="p">角色管理</router-link></el-menu-item>
          <el-menu-item index="6-3"><router-link :to="{name:'dataStatistics'}"  tag="p">数据统计</router-link></el-menu-item>
          <el-menu-item index="6-4"><router-link :to="{name:'accountSecurity'}"  tag="p">账户安全</router-link></el-menu-item>
          <el-menu-item index="6-5"><router-link :to="{name:'BatchPayment'}"  tag="p">批量付款</router-link></el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </div>
</template>
<style scoped>
  #cb-nav-warp{
    width: 200px;
    display: inline-block;
  }
  .el-menu-vertical-demo{
    border-radius: 0;
    min-height: 880px;
  }
  a{
    display: block;
  }
</style>
