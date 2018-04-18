import { AnswerType } from './AnswerType';
import Option from './Option';

export interface Question {
  key: string;
  text: string;
  answerType: AnswerType;
}

export interface SelectQuestion extends Question {
  options: Option[];
}
