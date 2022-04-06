import Validator from './components/cardValidator';

import isValid, { checkCardByNumber } from './utils/isValid';
import '../../node_modules/bootstrap/scss/bootstrap.scss';
import '../css/style.scss';

window.onload = () => {
  const validator = new Validator('#app');
};
