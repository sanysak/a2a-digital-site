import api from '../API/APIClient'

export const ServiceDetailStore = {
  namespaced: true,
  state: {
    content : null

  },
  mutations: {
    LOAD (state, payload) {
      state.content = payload
    }
  },

  actions: { 
    load ({ commit},type) {
      var payload = api.loadAPI(type)
      commit('LOAD', payload)
    },
  },

  getters: { 
    content: (state) => {
      return state.content
    },
  }
}
  