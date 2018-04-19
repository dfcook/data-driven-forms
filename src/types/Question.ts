import { AnswerType } from './AnswerType';
import Option from './Option';

interface BaseQuestion {
  key: string;
  index: number;
  text: string;
  answerType: AnswerType;
  helpText?: string;
}

export interface SelectQuestion extends BaseQuestion {
  options: Option[];
}

export type Question = SelectQuestion;
