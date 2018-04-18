import { MutationTree } from 'vuex';
import StoreState from '@/store/StoreState';
import { Answer } from '@/types';
import findIndex from 'lodash/fp/findIndex';

export const mutations: MutationTree<StoreState> = {
  updateAnswer(state, answer: Answer) {
    const idx = findIndex((a) => a.key === answer.key, state.answers);

    if (idx !== -1) {
      state.answers.splice(idx, 1, answer);
    } else {
      state.answers.push(answer);
    }
  },
};
