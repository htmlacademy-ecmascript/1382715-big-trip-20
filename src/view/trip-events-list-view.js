import {createElement} from '../render.js';

function createTripEventsList() {
  return `
     <ul class="trip-events__list">
        <li class="trip-events__item"></li>
        <li class="trip-events__item"></li>
      </ul>
  `;
}

export default class TripEventsList{
  getTemplate() {
    return createTripEventsList();
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
