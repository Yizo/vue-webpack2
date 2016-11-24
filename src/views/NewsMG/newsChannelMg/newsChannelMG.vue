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
  import table2 from './nCtable.vue'
  import pages from '../../../components/common/vue/pagination.vue'
  export default {
    components:{
      serchInput3,table2,pages
    },
    data(){
      return {
        input1:'频道',
        button1:'搜索',
        button2:'添加频道',
        bt2:true
      }
    }
  }
</script>
