import Vuex from 'vuex'
import country from '~/store/modules/country'
import user from '~/store/modules/user'

/**
 * Modular Vuex
 * https://vuex.vuejs.org/guide/modules.html#module-local-state
 */
const store = () => {
  return new Vuex.Store({
    modules: {
      country,
      user,
    }
  })
}

export default store