import AbstractView from '../framework/view/abstract-view.js';

function createTripEventItem() {
  return `
    <li class="trip-events__item"></li>
  `;
}

export default class TripEventItem extends AbstractView{
  get template() {
    return createTripEventItem();
  }
}
