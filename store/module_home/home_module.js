import homeAction from "./home_action";
import homeMutation, { initialState } from "./home_mutation";

export default {
  namespaced: true,
  state: initialState,
  mutations: homeMutation,
  actions: homeAction,
};
