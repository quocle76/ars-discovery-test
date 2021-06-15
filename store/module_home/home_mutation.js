import {
  ACTION_ADD_COUNTRY,
} from "~/utils/constants";

export const initialState = {
  'gameCountry': ''
};

export default {
  [ACTION_ADD_COUNTRY]: (state, response) => {
    state.gameCountry = response;
  },
}