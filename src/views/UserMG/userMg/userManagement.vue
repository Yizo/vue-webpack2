<template>
  <div id="orderQuery">
    <serch-input3
      :tsb_input1="input1"
      :tsb_input2="input2"
      :tsb_options="optionsParent"
      :tsb_selectTitle="type"
      :tsb_button1="button1"
      :tsb_button2="button2"
      :input2_show="ip2"
      :button2_show="bt2"
      :select_show="sl">
    </serch-input3>
    <table2></table2>
    <pages></pages>
  </div>
</template>

<style scoped>

</style>
<script>
  import serchInput3 from '../../../components/common/vue/top_serch_button.vue'
  import table2 from './userMgTable.vue'
  import pages from '../../../components/common/vue/pagination.vue'

  export default {
    components:{
      serchInput3,table2,pages
    },
    data(){
      return {
        optionsParent:["所有状态","已接单","已发货","已收货","已付款","已收款","已评价","发货逾期","付款逾期","违约"],
        type:'所有状态',
        input1:'手机号码',
        input2:'姓名',
        button1:'搜索',
        button2:'统计所有用户',
        ip2:true,
        bt2:true,
      }
    },
  }
</script>
