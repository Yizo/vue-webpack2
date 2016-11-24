//创建一个路由实例并配置路由规则
export default {
  //默认路由
  '/': {
    name: 'home',
    linkActiveClass: 'active',
    component: require('./views/home.vue')
  },
  //首页
  '/home': {
    name: 'home',
    linkActiveClass: 'active',
    component: require('./views/home.vue')
  },
  //用户管理
  //用户管理
  '/userManagement': {
    name: 'userManagement',
    linkActiveClass: 'active',
    component: require('./views/UserMG/userMg/userManagement.vue'),
  },
  //收货地址
  '/userManagement/ShippingAddress': {

    name: 'ShippingAddress',
    component: require('./views/UserMG/AddressManagement.vue')
  },
  //银行账户
  '/userManagement/BankAccount': {

    name: 'BankAccount',
    component: require('./views/UserMG/userMg/BankAccount.vue')
  },
  //用户基本资料
  '/userManagement/userInformation': {

    name: 'userInformation',
    component: require('./views/UserMG/userMg/userInformation.vue')
  },
  //用户基本资料
  '/userManagement/userIMCC': {

    name: 'userIMCC',
    component: require('./views/UserMG/userMg/userIMCC.vue')
  },
  //后台用户管理
  '/userManagement/systemUserMG': {

    name: 'systemUserMG',
    component: require('./views/UserMG/systemUserMg/systemUserMG.vue')
  },
  //待审核用户管理
  '/userManagement/PendingUsersMG': {

    name: 'PendingUsersMG',
    component: require('./views/UserMG/PendingUserMg/PendingUserMG.vue')
  },
  //资讯管理
  //新闻频道管理
  '/NewsMG/newsChannelMG': {

    name: 'newsChannelMG',
    component: require('./views/NewsMG/newsChannelMg/newsChannelMG.vue')
  },
  //新闻管理
  '/NewsMG/newsMG': {

    name: 'newsMG',
    component: require('./views/NewsMG/newsMg/newsMG.vue')
  },
  //订单管理
  //订单管理
  '/OrderMG/orderQuery': {

    name: 'orderQuery',
    component: require('./views/OrderMG/orderQuery/orderQuery.vue')
  },
  //待转账订单
  '/OrderMG/pendingOrder': {

    name: 'pendingOrder',
    component: require('./views/OrderMG/pendingOrder/pendingOrder.vue')
  },
  //债权管理
  //债权查询
  '/DebtMG/debtQuery': {

    name: 'debtQuery',
    component: require('./views/DebtMG/debtQuery/debtQuery.vue')
  },
  //待转账债权
  '/DebtMG/pendingDebt': {

    name: 'pendingDebt',
    component: require('./views/DebtMG/pendingDebt/pendingDebt.vue')
  },
  //系统管理
  //手续费管理
  '/SystemMG/poundageMG': {

    name: 'poundageMG',
    component: require('./views/SystemMG/poundageMG.vue')
  },
  //角色管理
  '/SystemMG/roleMG': {

    name: 'roleMG',
    component: require('./views/SystemMG/roleMg/roleMG.vue')
  },
  //数据统计
  '/SystemMG/dataStatistics': {

    name: 'dataStatistics',
    component: require('./views/SystemMG/dataStatistics.vue')
  },
  //账户安全
  '/SystemMG/accountSecurity': {

    name: 'accountSecurity',
    component: require('./views/SystemMG/accountSecurity.vue')
  },
  //批量付款
  '/SystemMG/BatchPayment': {

    name: 'BatchPayment',
    component: require('./views/SystemMG/BatchPayment.vue')
  },
}
