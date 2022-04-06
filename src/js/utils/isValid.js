export default function isValid(value) {
  const check = Number(value.toString().slice(-1));
  const payload = value.toString().slice(0, value.toString().length - 1);

  const summ = payload
    .split('')
    .reverse()
    .reduce((acc, val, index) => {
      if (index % 2 === 0) {
        return acc + (+val * 2 > 9 ? +val * 2 - 9 : +val * 2);
      }
      return acc + +val;
    }, 0);
  if (summ % 10 === 0) return check === 0;

  return check === 10 - (summ % 10);
}
const CARD_NAMES = [
  {
    name: 'American_Express',
    numbers: ['34', '37'],
  },
  {
    name: 'MasterCard',
    numbers: ['51', '52', '53', '54', '55', '222100', '272099'],
  },
  {
    name: 'Visa',
    numbers: ['4'],
  },
  {
    name: 'Maestro',
    numbers: [
      '5018',
      '5020',
      '5038',
      '5893',
      '6304',
      '6759',
      '6761',
      '6762',
      '6763',
    ],
  },
];

export function checkCardByNumber(number) {
  let NAME = '';
  CARD_NAMES.forEach((card) => {
    const { name, numbers } = card;
    numbers.forEach((num) => {
      if (String(number).startsWith(num)) {
        NAME = name;
      }
    });
  });
  return NAME;
}
