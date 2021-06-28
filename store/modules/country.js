import gameService from '~/services/gameService.js';
import data from '~/assets/mockup/data.json'

function initialCountryGameStates (data = {}) {
  const dataJson = {...data}
  const country = new Object()
  Object.entries(dataJson).forEach(([key, value]) => {
    if (value?.gameId) {
      country[key] = {
        gameId: value.gameId,
        replay: 0,
        points: 0,
        chances: 0
      }
    }
  })
  return country
}

const state = () => ({
  gameCountry: '',
  attemptId: '',
  gameState: {
    isPlaying: false,
    submitSuccess: false,
    country: initialCountryGameStates(data)
  }
})

const getters = {
  getToken: state => state.token,
  getTotalPoints: state => Object.keys(state.gameState?.country).reduce((sum, key) => sum + parseInt(state.gameState.country[key].points || 0), 0),
  getTotalChances: state => Object.keys(state.gameState?.country).reduce(( sum, key ) => sum + parseInt(state.gameState.country[key].chances || 0), 0)
}

const actions = {
  setContry({ commit }, payload) {
    commit('ACTION_ADD_COUNTRY', payload);
  },
  setPlayingGame: ({ commit }, payload) => {
    commit('ACTION_SET_PLAYING_GAME', payload);
  },
  submitAnswer: ({ commit }, payload) => {
    commit('ACTION_SUBMIT_ANSWER', payload);
  },
  replay: ({ commit }) => {
    commit('ACTION_REPLAY');
  },
  async getAttemptId({ commit }, { gameId }) {
    try {
      const data = await gameService.createAttempt(gameId);
      commit('ACTION_GET_ATTEMPT', data.attemptId);
    } catch(e) {

    }
  },
  async finishAttempt({ commit, dispatch }, { attemptId }) {
    try {
      await gameService.finishAttempt(attemptId);
      commit('ACTION_GET_ATTEMPT');
      dispatch('country/getGameProgress', null, { root: true });
    } catch(e) {

    }
  },
  async getGameProgress({ commit }, payload) {
    try {
      const data = await gameService.getGameProgress();
      commit('ACTION_SET_GAME_PROGRESS', data.result);
    } catch(e) {

    }
  }
};

const mutations = {
  ACTION_ADD_COUNTRY: (state, response) => {
    state.gameCountry = response;
  },
  ACTION_SET_PLAYING_GAME: (state, response) => {
    state.gameState.isPlaying = response;
  },
  ACTION_SUBMIT_ANSWER: (state) => {
    const chances = state.gameState.country[state.gameCountry].chances;
    state.gameState.submitSuccess = true;
    state.gameState.country[state.gameCountry].chances = chances + 1;
  },
  ACTION_REPLAY: (state) => {
    state.gameState.submitSuccess = false;
  },
  ACTION_GET_ATTEMPT: (state, response) => {
    state.attemptId = response;
  },
  ACTION_SET_GAME_PROGRESS: (state, response) => {
    Object.entries(state.gameState.country).forEach(([key, value]) => {
      const index = response.findIndex((game) => parseInt(game.gameId) === parseInt(value.gameId));
      if (index >= 0) {
        state.gameState.country[key].points = response[index].points;
        state.gameState.country[key].chances = response[index].chances;
      }
    })
  },

};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}