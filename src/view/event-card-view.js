import {EVENT_TYPES, DESTINATION_LIST} from '../const.js';
import DetailEventModel from '../model/detail-event-model';
import AbstractView from '../framework/view/abstract-view.js';

//const NEW_EVENT = {};

const NEW_EVENT = new DetailEventModel({
  id: null,
  basePrice: null,
  dateFrom: null,
  dateTo: null,
  isFavorite: false,
  type: null,
  destination: null,
  allOffers: null,
  selectedOffersId: null,
});

const creatEventTypesList = (types) => types.map((item) => `
  <div class="event__type-item">
      <input id="event-type-${item}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${item}">
      <label class="event__type-label  event__type-label--${item}" for="event-type-${item}">${item}</label>
  </div>`).join('');

const creatDestinationList = (destinations) => destinations.map((item) => `
  <option value="${item}"></option>`).join('');

const creatEventDestinationPhotosList = (photos) => photos.map((item) => `
  <img class="event__photo" src="${item.src}" alt="${item.description}">`).join('');

const creatEventOffersList = (allOffers, selectedOffersId, offerType, id) => allOffers.map((offer) => {
  const isChecked = selectedOffersId.includes(offer.id) ? 'checked' : '';
  return `<div class="event__offer-selector">
    <input class="event__offer-checkbox visually-hidden"
          id="event-offer-${id}-${offerType}-${offer.id}"
          type="checkbox"
          name="event-offer-${offerType}" ${isChecked} data-value="${offer.id}">
    <label class="event__offer-label" for="event-offer-${id}-${offerType}-${offer.id}">
      <span class="event__offer-title">${offer.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${offer.price}</span>
    </label>
  </div>`;
}).join('');

const creatEventHeader = (id, type, dateFrom, dateTo, basePrice, destination) => {
  const eventTypes = creatEventTypesList(EVENT_TYPES);
  const destinations = creatDestinationList(DESTINATION_LIST);
  return `
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-${id}-${type}">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${id}-${type}" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>
              ${eventTypes}
          </fieldset>
        </div>
      </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-${id}-${destination.id}">
          ${type}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-${id}-${destination.id}" type="text" name="event-destination" value="${destination.name}" list="destination-list-1">
        <datalist id="destination-list-${id}-${destination.id}">
          ${destinations}
        </datalist>
      </div>

      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-${id}-${type}">From</label>
        <input class="event__input  event__input--time" id="event-start-time-${id}-${type}" type="text" name="event-start-time" value="18/03/19 12:25">
        &mdash;
        <label class="visually-hidden" for="event-end-time-${id}-${type}">To</label>
        <input class="event__input  event__input--time" id="event-end-time-${id}-${type}" type="text" name="event-end-time" value="18/03/19 13:35">
      </div>

      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-${id}-${type}">
          <span class="visually-hidden">Price</span>
          &euro;
        </label>
        <input class="event__input  event__input--price" id="event-price-${id}-${type}" type="text" name="event-price" value="${basePrice}">
      </div>

      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Delete</button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </header>`;
};

const creatEventOffers = (allOffers, selectedOffersId, offerType, id) => {
  const eventOffers = creatEventOffersList(allOffers, selectedOffersId, offerType, id);
  return `
  <section class="event__section  event__section--offers">
    <h3 class="event__section-title  event__section-title--offers">Offers</h3>
    <div class="event__available-offers">
      ${eventOffers}
    </div>
  </section>`;
};

const creatEventDestination = (destination) => {
  const eventDestinationPhotos = creatEventDestinationPhotosList(destination.pictures);
  return `
    <section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description"> ${destination.description}</p>

      <div class="event__photos-container">
        <div class="event__photos-tape">
          ${eventDestinationPhotos}
        </div>
      </div>
    </section>`;
};
function createEventCard(detailEventModel) {
  const {id, type, destination, dateFrom, dateTo, allOffers, selectedOffersId, basePrice} = detailEventModel;
  const headerTemplate = creatEventHeader(id, type, dateFrom, dateTo, basePrice, destination);
  const offersTemplate = creatEventOffers(allOffers, selectedOffersId, type, id);
  const destinationTemplate = creatEventDestination(destination);

  return `
    <li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        ${headerTemplate}
        <section class="event__details">
          ${offersTemplate}
          ${destinationTemplate}
        </section>
      </form>
    </li>
  `;
}

export default class EventCardView extends AbstractView {
  #detailEventModel = null;
  #handleFormSubmit = null;

  constructor({detailEventModel = NEW_EVENT, onFormSubmit}) {
    super();
    this.#detailEventModel = detailEventModel;
    this.#handleFormSubmit = onFormSubmit;

    this.element.querySelector('form')
      .addEventListener('submit', this.#formSubmitHandler);
  }

  get template() {
    return createEventCard(this.#detailEventModel);
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#checkedEventType();
    this.#handleFormSubmit(this.#checkedOffers(), this.#checkedEventType());
  };


  //проверить правильно ли сделана проверка 
  #checkedOffers() {
    const offersList = this.element.querySelectorAll('.event__offer-checkbox');
    const checkedOffersList = [...offersList].filter((item) => item.checked).map((item) => item.dataset.value);
    return checkedOffersList;
  }

  #checkedEventType() {
    const eventTypesList = this.element.querySelectorAll('input[name="event-type"]');
    const checkedEvent = [...eventTypesList].filter((item) => item.checked);
    const typeName = checkedEvent.length ? checkedEvent[0].value : this.#detailEventModel.type;
    return typeName;
  }
}
