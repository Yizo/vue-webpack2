import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//state
const state = {
  //数据
  uData:[],
  //索引
  uIndex:0
}

//getters
const getters = {
  uIndex:function(state){
    return state.uIndex
  }
}

//mutations
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

//actions
//更新用户数据
const actions = {
  C_upData({ commit },data){
      commit('UP_DATA',data)
  },
  C_index({ commit },index){
      commit('UP_INDEX',index)
  }
}

export default new Vuex.Store({
  state,mutations,getters,actions
})
