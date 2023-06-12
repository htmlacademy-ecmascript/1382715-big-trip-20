import {render} from '../framework/render.js';
import TripEventsListView from '../view/trip-events-list-view.js';
import EventListEmptyView from '../view/event-list-empty-view.js';
import PointPresenter from './point-presenter.js';

import DetailEventModel from '../model/detail-event-model';

export default class TripEventListPresenter {
  #tripEventList = new TripEventsListView();
  #noEventListComponnet = new EventListEmptyView();
  #tripEvents = null;
  #eventsModel = null;
  #events = null;
  #destinations = null;
  #availableOffers = null;
  #pointsPresenter = new Map();
  constructor({tripEvents, eventsModel}) {
    this.#tripEvents = tripEvents;
    this.#eventsModel = eventsModel;
  }

  init() {
    this.#events = [...this.#eventsModel.points];
    this.#destinations = [...this.#eventsModel.destinations];
    this.#availableOffers = this.#eventsModel.offers;

    this.#renderEventList();
  }

  #renderEventList() {
    render(this.#tripEventList, this.#tripEvents);

    if(!this.#events.length) {
      this.#renderEventListEmpty();
    }

    for(let i = 0; i < this.#events.length; i++) {
      this.#renderEvent(this.#events[i]);
    }
  }

  #renderEvent(event) {
    const poitPresenter = new PointPresenter({
      tripListContainer: this.#tripEventList.element,
    });

    poitPresenter.init(this.#createDetailEventModel(event));
    this.#pointsPresenter.set(this.#createDetailEventModel(event).pointId, poitPresenter);
  }

  #clearEventList() {
    this.#pointsPresenter.forEach((presenter) => presenter.destroy);
    this.#pointsPresenter.clear();
  }

  #renderEventListEmpty() {
    render(this.#noEventListComponnet, this.#tripEvents);
  }

  #createDetailEventModel(event) {
    const offersForPointByType = this.#availableOffers.find((value) => value.type === event.type).offers;

    return new DetailEventModel({
      pointId: event.id,
      basePrice: event.basePrice,
      dateFrom: event.dateFrom,
      dateTo: event.dateTo,
      isFavorite: event.isFavorite,
      type: event.type,
      destination: this.#destinations.find((value) => value.id === event.destination),
      allOffers: offersForPointByType,
      selectedOffersId: event.offers,
    });
  }
}
