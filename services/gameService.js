
export const createAttempt = (gameId) => {
  const axios = window.$nuxt.context.$axios;
  return axios.$post('/create-attempt', {
    gameId,
  })
}

export const finishAttempt = (attemptId) => {
  const axios = window.$nuxt.context.$axios;
  return axios.$post('/finish-attempt', {
    attemptId,
  })
}

export const getGameProgress = async() => {
  const axios = window.$nuxt.context.$axios;
  return await axios.$get('/get-game-progress');
}

export default {
  createAttempt,
  finishAttempt,
  getGameProgress
}