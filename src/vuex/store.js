import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//state
const state = {
  //数据
  "uData":[],
  //当前行数据
  "thisData":[]
}

//getters
const getters = {
  uData:function(state){
    return state.uData
  },
  thisData:function(state){
    return state.thisData
  }
}

//mutations
const mutations = {
  //更新数据
  UP_DATA(state,data){
    state.uData = { ...state.uData,data }
  },
  //更新当前行数据
  UP_INDEX(state,data){
    state.thisData.splice(0,state.thisData.length)
    state.thisData.push(data)
  }
}

//actions
//更新用户数据
const actions = {
  C_upData({ commit },data){
      commit('UP_DATA',data)
  },
  C_index({ commit },data){
      commit('UP_INDEX',data)
  }
}

export default new Vuex.Store({
  state,mutations,getters,actions
})
