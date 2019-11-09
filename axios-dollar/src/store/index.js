import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: {
      title: '',
      state: false,
      colour: 'primary'
    }
  },
  mutations: {
    showLoading (state, payload) {
      console.log('showing', payload)
      state.loading.title = payload.title
      state.loading.colour = payload.colour
      state.loading.state = true
    },
    hideLoading (state) {
      setTimeout(() => {
        state.loading.state = false
      }, 500)
    }
  },
  actions: {
  },
  modules: {
  }
})
