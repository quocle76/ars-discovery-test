
export const login = (email, password) => {
  const axios = window.$nuxt.context.$axios;
  return axios.$post('/login', {
    email,
    password
  })
}

export const logout = () => {
  const axios = window.$nuxt.context.$axios;
  return axios.$post('/logout');
}

export default {
  login,
  logout
}