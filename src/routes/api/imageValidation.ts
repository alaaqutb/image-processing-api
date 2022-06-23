import { query } from 'express-validator';

const validation = [
  query('width')
    .isInt()
    .withMessage('Invaild width!')
    .custom((value) => {
      return value > 0;
    }),

  query('height')
    .isInt()
    .withMessage('Invaild height!')
    .custom((value) => {
      return value > 0;
    }),
];

export default validation;
