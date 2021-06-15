import {
  ACTION_ADD_COUNTRY,
} from "~/utils/constants";
export default {
  setContry: ({ commit }, payload) => {
    commit(ACTION_ADD_COUNTRY, payload);
  },
}