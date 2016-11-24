import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//state
const state = {
  //数据
  uData:[],
  //索引
  uIndex:''
}

const mutations = {
  //更新数据
  UP_DATA(state,data){
    state.uData = { ...state.uData,data }
  },
  //更新索引
  UP_INDEX(state,index){
    state.uIndex = index;
  }
}

export default new Vuex.Store({
  state,mutations
})
