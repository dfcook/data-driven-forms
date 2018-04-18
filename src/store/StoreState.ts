import { Question, Answer } from '../types';

export default interface StoreState {
  questions: Question[];
  answers: Answer[];
}
