import Vue from 'vue';
import Vuex from 'vuex';
import initialState from './initialState';
import StoreState from './StoreState';

Vue.use(Vuex);

const store = new Vuex.Store<StoreState>({
  state: initialState,
});

export default store;
