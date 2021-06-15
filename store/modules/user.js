import userService from '~/services/userService.js';

const state = () => ({
  status: {},
  user: null
})

const actions = {
  login({ dispatch, commit }, { email, password }) {
    userService.login(email, password)
    .then(
      user => {
        dispatch('auth/setToken', user.token, { root: true });
        commit('LOGIN_SUCCESS', user);
      },
      error => {
        dispatch('auth/setToken', '', { root: true });
        commit('LOGIN_FAILURE', error);
      }
    );
  },
  logout({ commit }) {
    // userService.logout();
    dispatch('auth/setToken', '', { root: true });
    commit('LOGOUT');
  },
};

const mutations = {
  LOGIN_SUCCESS: (state, user) => {
    state.status = { loggedIn: true };
    state.user = user;
  },
  LOGIN_FAILURE: (state) => {
    state.status = {};
    state.user = null;
  },
  LOGOUT: (state) => {
    state.status = {};
    state.user = null;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
}