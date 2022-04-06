import AmericanExpress from '../../../img/american_express_straight.png';
import MasterCard from '../../../img/mastercard_straight.png';
import Visa from '../../../img/visa_straight.png';
import Maestro from '../../../img/maestro_straight.png';

import isValid, { checkCardByNumber } from '../../utils/isValid';

import './index.scss';

export default class Validator {
  constructor(selector) {
    this.element = document.querySelector(selector);
    this.imagesEl = this.element.querySelector('.app__cards');
    this.inputEl = this.element.querySelector('#app__input');
    this.btnEl = this.element.querySelector('#app__btn');
    this.alert = this.element.querySelector('#alert');
    this.btnEl.addEventListener('click', this.checkValid.bind(this));
    this.inputEl.addEventListener('input', this.changeInputHandler.bind(this));
    this.CARD_NAMES = [
      {
        name: 'American_Express',
        imgSrc: AmericanExpress,
      },
      {
        name: 'MasterCard',
        imgSrc: MasterCard,
      },
      {
        name: 'Visa',
        imgSrc: Visa,
      },
      {
        name: 'Maestro',
        imgSrc: Maestro,
      },
    ];
    this.renderImages();
  }

  renderImages() {
    this.CARD_NAMES.forEach((card) => {
      const cardImage = new Image();
      cardImage.src = card.imgSrc;
      cardImage.dataset.name = card.name;
      cardImage.classList.add('card__image');
      this.imagesEl.appendChild(cardImage);
    });
  }

  checkValid() {
    if (isValid(this.inputEl.value)) {
      const cardName = checkCardByNumber(this.inputEl.value);
      this.updateImages(cardName);
      this.showAlert(`это карта ${cardName}`, 'success');
    } else {
      this.resetAll();
      this.showAlert('карта не валидна', 'danger');
    }
  }

  updateImages(name) {
    this.resetAll();
    const img = this.imagesEl.querySelector(`[data-name=${name}]`);
    img.classList.add('active');
  }

  showAlert(text, type) {
    this.alert.textContent = text;
    this.alert.className = `alert alert-${type}`;
  }

  changeInputHandler(evt) {
    if (evt.target.value === '') {
      this.resetAll();
    }
  }

  resetAll() {
    this.imagesEls = this.element.querySelectorAll('.card__image');
    this.imagesEls.forEach((image) => {
      image.classList.remove('active');
    });
    this.alert.textContent = '';
    this.alert.className = '';
  }
}
