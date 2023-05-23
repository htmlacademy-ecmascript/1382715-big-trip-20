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
    this.#renderEventCard(this.events[0], 0);

    for(let i = 1; i < this.events.length; i++) {
      this.#renderEventOverview(this.events[i], i);
    }
  }

  #renderEventOverview(event, index) {
    const tripEventItem = new TripEventItemView();
    const tripOverview = new EventOverviewView({
      detailEventModel:this.#createDetailEventModel(event)
    });

    render(tripEventItem, this.#tripEventList.element);
    render(tripOverview, this.#tripEventList.element.querySelectorAll('.trip-events__item')[index]);
  }

  #renderEventCard(event, index) {
    const tripEventItem = new TripEventItemView();
    const eventCard = new EventCardView({
      detailEventModel: this.#createDetailEventModel(event)
    });

    render(tripEventItem, this.#tripEventList.element);
    render(eventCard, this.#tripEventList.element.querySelectorAll('.trip-events__item')[index]);
  }

  #createDetailEventModel(event) {
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
