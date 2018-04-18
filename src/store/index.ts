import Vue from 'vue';
import Vuex from 'vuex';
import initialState from './initialState';
import StoreState from './StoreState';
import actions from './actions/index';
import { mutations } from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store<StoreState>({
  state: initialState,
  actions,
  mutations,
});

export default store;
