import  Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    counter:1000
  },
  mutations:{
    madd(state){
      state.counter++
    },
    msub(state){
      state.counter--
    }
  },
  actions:{},
  getters:{},
  modules:{}
})

export default store
