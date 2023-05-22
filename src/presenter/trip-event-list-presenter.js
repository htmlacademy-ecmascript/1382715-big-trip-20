import {render} from '../framework/render.js';
import TripEventsListView from '../view/trip-events-list-view.js';
import TripEventItemView from '../view/trip-event-item-view.js';
import EventOverviewView from '../view/event-overview-view.js';
import EventCardView from '../view/event-card-view.js';

import DetailEventModel from '../model/detail-event-model';

export default class TripEventListPresenter {
  #tripEventList = new TripEventsListView();
  #tripEvents = null;
  #eventsModel = null;
  constructor({tripEvents, eventsModel}) {
    this.#tripEvents = tripEvents;
    this.#eventsModel = eventsModel;
  }

  init() {
    this.events = [...this.#eventsModel.points];
    this.destinations = [...this.#eventsModel.destinations];
    this.availableOffers = this.#eventsModel.offers;

    render(this.#tripEventList, this.#tripEvents);
    render(new TripEventItemView(), this.#tripEventList.element);
    render(
      new EventCardView({
        detailEventModel: this.createDetailEventModel(this.events[0])
      }),
      this.#tripEventList.element.querySelectorAll('.trip-events__item')[0]);

    for(let i = 1; i < this.events.length; i++) {
      render(new TripEventItemView(), this.#tripEventList.element);
      render(
        new EventOverviewView({
          detailEventModel:this.createDetailEventModel(this.events[i])
        }),
        this.#tripEventList.element.querySelectorAll('.trip-events__item')[i]
      );
    }
  }

  createDetailEventModel(event) {
    const offersForPointByType = this.availableOffers.find((value) => value.type === event.type).offers;

    return new DetailEventModel({
      pointId: event.id,
      basePrice: event.basePrice,
      dateFrom: event.dateFrom,
      dateTo: event.dateTo,
      isFavorite: event.isFavorite,
      type: event.type,
      destination: this.destinations.find((value) => value.id === event.destination),
      allOffers: offersForPointByType,
      selectedOffersId: event.offers,
    });
  }
}
