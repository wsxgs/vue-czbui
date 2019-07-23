import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    isShowLoading: true
  },
  mutations: {
    toggleLoaingStatus (state, val) {
      // mutate state
      state.isShowLoading = val
    }
  }
})

export default store
