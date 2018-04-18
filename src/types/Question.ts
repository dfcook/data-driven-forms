import { AnswerType } from './AnswerType';

export default interface Question {
  key: string;
  text: string;
  answerType: AnswerType;
}
