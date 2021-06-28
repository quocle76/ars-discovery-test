import userService from '~/services/userService.js';

const state = () => ({
  status: {},
  token: '',
  user: null,
  isFirstTime: false,
})

const getters = {
  getToken: state => state.token
}

const actions = {
  async login ({ dispatch, commit }, { email, password }) {
    try {
      const { user, isFirstTime, token } = await userService.login(email, password);
      commit('SET_TOKEN', token);
      commit('LOGIN_SUCCESS', { isFirstTime, user });
      dispatch('country/getGameProgress', null,{ root: true });
      return { user, isFirstTime, token };
    } catch(e) {
      commit('SET_TOKEN');
      commit('LOGIN_FAILURE', e);
      throw e;
    }
  },
  async logout({ commit }) {
    await userService.logout();
    commit('SET_TOKEN');
    commit('LOGOUT');
  },
  setToken ({ commit }, token) {
    commit('SET_TOKEN', token)
  },
};

const mutations = {
  LOGIN_SUCCESS: (state, { isFirstTime, user }) => {
    state.status = { loggedIn: true };
    state.user = user;
    state.isFirstTime = isFirstTime
  },
  LOGIN_FAILURE: (state) => {
    state.status = {};
    state.user = null;
  },
  LOGOUT: (state) => {
    state.status = {};
    state.user = null;
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}