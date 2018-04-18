import { ActionTree } from 'vuex';
import StoreState from '@/store/StoreState';
import { Answer } from '@/types';

export const answerActions: ActionTree<StoreState, any> = {
  updateAnswer({ commit }, answer: Answer) {
    commit('updateAnswer', answer);
  },
};
