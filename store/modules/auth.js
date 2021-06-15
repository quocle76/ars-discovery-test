const state = () => ({
  token: ''
})

const getters = {
  getToken: state => state.token
}

const actions = {
  setToken ({ commit }, token) {
    commit('SET_TOKEN', token)
  },
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}