import isValid, { checkCardByNumber } from '../utils/isValid';

describe('isValid function:', () => {
  const cases = [4556936018975248, 4916413054842307];
  const errCases = [4556936018975247, 4916413054842306];

  test.each(cases)('for %s should return true', (number) => {
    expect(isValid(number)).toBe(true);
  });
  test.each(errCases)('for %s should return false', (number) => {
    expect(isValid(number)).toBe(false);
  });
});

describe('checkCardByNumber function:', () => {
  const cases2 = [
    [2720990778715364, 'MasterCard'],
    [5349944742430539, 'MasterCard'],
    [2720999888252259, 'MasterCard'],
    [4716692530207001, 'Visa'],
    [4532403507075781, 'Visa'],
    [4532210818573614, 'Visa'],
  ];

  test.each(cases2)('for %s should return %s', (a, b) => {
    expect(checkCardByNumber(a)).toBe(b);
  });
});
