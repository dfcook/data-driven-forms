import { AnswerType } from '../types/AnswerType';

export default {
  questions: [{
    key: 'age',
    text: 'What is your age band?',
    answerType: AnswerType.Select,
    index: 0,
    options: [
      {
        text: '18 to 34',
        key: '18To34',
      },
    ],
    helpText: 'How old are you?',
  }],
  answers: [],
};
