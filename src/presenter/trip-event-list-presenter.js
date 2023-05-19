import TripEventsListView from '../view/trip-events-list-view.js';
import TripEventItemView from '../view/trip-event-item-view.js';
import EventOverviewView from '../view/event-overview-view.js';
import EventCardView from '../view/event-card-view.js';

import {render} from '../render.js';
import DetailEventModel from '../model/detail-event-model';

export default class TripEventListPresenter {
  tripEventList = new TripEventsListView();

  constructor({tripEvents, eventsModel}) {
    this.tripEvents = tripEvents;
    this.eventsModel = eventsModel;
  }

  init() {
    this.events = [...this.eventsModel.getPoints()];
    this.destinations = [...this.eventsModel.getDestinations()];
    this.availableOffers = this.eventsModel.getOffers();

    render(this.tripEventList, this.tripEvents);
    render(new TripEventItemView(), this.tripEventList.getElement());
    render(
      new EventCardView({
        detailEventModel: this.createDetailEventModel(this.events[0])
      }),
      this.tripEventList.getElement().querySelectorAll('.trip-events__item')[0]);

    for(let i = 1; i < this.events.length; i++) {
      render(new TripEventItemView(), this.tripEventList.getElement());
      render(
        new EventOverviewView({
          detailEventModel:this.createDetailEventModel(this.events[i])
        }),
        this.tripEventList.getElement().querySelectorAll('.trip-events__item')[i]
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
