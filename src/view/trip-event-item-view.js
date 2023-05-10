import {createElement} from '../render.js';

function createTripEventItem() {
  return `
    <li class="trip-events__item"></li>
  `;
}

export default class TripEventItem{
  getTemplate() {
    return createTripEventItem();
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
