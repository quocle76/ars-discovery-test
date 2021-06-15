import Vuex from 'vuex'
import auth from '~/store/modules/auth'
import homeModule from '~/store/module_home/home_module'
import {
  HOME_MODULE_NAME,
} from "~/utils/constants";
import user from '~/store/modules/user'

/**
 * Modular Vuex
 * https://vuex.vuejs.org/guide/modules.html#module-local-state
 */
const store = () => {
  return new Vuex.Store({
    modules: {
      auth,
      [HOME_MODULE_NAME]: homeModule,
      user
    }
  })
}

export default store