import ErrorRepository from '../index';

test.each([
  [
    'Unknown error',
    12
  ],
  [
    'Ошибка ввода',
    1
  ],
  [
    'Не корректная команда',
    2
  ]
])// eslint-disable-next-line
('testing translate method with %s', (errorDescription, errorCode) => {
  const result = new ErrorRepository();
  
  expect(result.translate(errorCode)).toBe(errorDescription);
});