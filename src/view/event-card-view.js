import {createElement} from '../render.js';
import {EVENT_TYPES, DESTINATION_LIST} from '../const.js';

const creatEventTypesList = (types, pointId) => types.map((item) => `
  <div class="event__type-item">
      <input id="event-type-${pointId}-${item}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${item}">
      <label class="event__type-label  event__type-label--${item}" for="event-type-${pointId}-${item}">${item}</label>
  </div>`).join('');

const creatDestinationList = (destinations) => destinations.map((item) => `
  <option value="${item}"></option>`).join('');

const creatEventDestinationPhotosList = (photos) => photos.map((item) => `
  <img class="event__photo" src="${item.src}" alt="${item.description}">`).join('');

const creatEventHeader = (pointId, type, dateFrom, dateTo, basePrice, destination) => `
  <header class="event__header">
    <div class="event__type-wrapper">
      <label class="event__type  event__type-btn" for="event-type-toggle-${pointId}-${type}">
        <span class="visually-hidden">Choose event type</span>
        <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
      </label>
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${pointId}-${type}" type="checkbox">

      <div class="event__type-list">
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Event type</legend>
            ${creatEventTypesList(EVENT_TYPES)}
        </fieldset>
      </div>
    </div>

    <div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-${pointId}-${destination.id}">
        ${type}
      </label>
      <input class="event__input  event__input--destination" id="event-destination-${pointId}-${destination.id}" type="text" name="event-destination" value="${destination.name}" list="destination-list-1">
      <datalist id="destination-list-${pointId}-${destination.id}">
        ${creatDestinationList(DESTINATION_LIST)}
      </datalist>
    </div>

    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-${pointId}-${type}">From</label>
      <input class="event__input  event__input--time" id="event-start-time-${pointId}-${type}" type="text" name="event-start-time" value="18/03/19 12:25">
      &mdash;
      <label class="visually-hidden" for="event-end-time-${pointId}-${type}">To</label>
      <input class="event__input  event__input--time" id="event-end-time-${pointId}-${type}" type="text" name="event-end-time" value="18/03/19 13:35">
    </div>

    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-${pointId}-${type}">
        <span class="visually-hidden">Price</span>
        &euro;
      </label>
      <input class="event__input  event__input--price" id="event-price-${pointId}-${type}" type="text" name="event-price" value="${basePrice}">
    </div>

    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    <button class="event__reset-btn" type="reset">Delete</button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </header>`;

const creatEventOffersList = (allOffers, selectedOffersId, offerType, pointId) => allOffers.map((offer) => {
  const isChecked = selectedOffersId.includes(offer.id) ? 'checked' : '';
  return `<div class="event__offer-selector">
    <input class="event__offer-checkbox visually-hidden" id="event-offer-${pointId}-${offerType}-${offer.id}" type="checkbox" name="event-offer-${offerType}" ${isChecked}>
    <label class="event__offer-label" for="event-offer-${pointId}-${offerType}-${offer.id}">
      <span class="event__offer-title">${offer.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${offer.price}</span>
    </label>
  </div>`;
}).join('');

const creatEventOffers = (allOffers, selectedOffersId, offerType, pointId) => `
  <section class="event__section  event__section--offers">
    <h3 class="event__section-title  event__section-title--offers">Offers</h3>
    <div class="event__available-offers">
      ${creatEventOffersList(allOffers, selectedOffersId, offerType, pointId)}
    </div>
  </section>`;

const creatEventDestination = (destination) =>`
  <section class="event__section  event__section--destination">
    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
    <p class="event__destination-description"> ${destination.description}</p>

    <div class="event__photos-container">
      <div class="event__photos-tape">
        ${creatEventDestinationPhotosList(destination.pictures)}
      </div>
    </div>
  </section>`;
function createEventCard(detailEventModel) {
  const {pointId, type, destination, dateFrom, dateTo, allOffers, selectedOffersId, basePrice} = detailEventModel;

  return `
    <form class="event event--edit" action="#" method="post">
      ${creatEventHeader(pointId, type, dateFrom, dateTo, basePrice, destination)}
      <section class="event__details">
        ${creatEventOffers(allOffers, selectedOffersId, type, pointId)}
        ${creatEventDestination(destination)}
      </section>
    </form>
  `;
}

export default class EventCardView {
  constructor({detailEventModel}) {
    this.detailEventModel = detailEventModel;
  }

  getTemplate() {
    return createEventCard(this.detailEventModel);
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
