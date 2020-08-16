import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 组件的状态在这里进行一个集中的管理
  state: {
    count: 0
  },
  // 可以去改变Vuex里面状态的一个方法集
  mutations: {
    increase () {
      this.state.count++
    }
  },
  actions: {
  },
  modules: {
  }
})
