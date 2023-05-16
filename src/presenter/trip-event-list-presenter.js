import TripEventsListView from '../view/trip-events-list-view.js';
import TripEventItemView from '../view/trip-event-item-view.js';
import EventOverviewView from '../view/event-overview-view.js';
import EventCardView from '../view/event-card-view.js';
import EventInformatioView from '../view/event-information-view.js';
import EventOffersView from '../view/event-offers-view.js';
import EventDestinationView from '../view/event-destination-view.js';

import {render, RenderPosition} from '../render.js';
import * as events from 'events';
import DetailEventModel from '../model/detail-event-model';

export default class TripEventListPresenter {
  tripEventList = new TripEventsListView();
  eventCardComponent = new EventCardView();
  eventInformationComponent = new EventInformatioView();
  eventOffersComponent = new EventOffersView();
  eventDestination = new EventDestinationView();

  constructor({tripEvents, eventsModel}) {
    this.tripEvents = tripEvents;
    this.eventsModel = eventsModel;
  }

  init() {
    this.events = [...this.eventsModel.getPoints()];
    this.destinations = [...this.eventsModel.getDestinations()];
    this.availableOffers = this.eventsModel.getOffers();

//    console.log("DATA=> ", this.events);

    // BEFORE
//    render(this.tripEventList, this.tripEvents);
//    for(let i = 0; i < 3; i++) {
//      if(i === 0) {
//        render(new TripEventItemView(), this.tripEventList.getElement());
//        render(this.eventInformationComponent, this.eventCardComponent.getElement(), RenderPosition.AFTERBEGIN);
//        render(this.eventOffersComponent, this.eventCardComponent.getElement().querySelector('.event__details'));
//        render(this.eventDestination, this.eventCardComponent.getElement().querySelector('.event__details'));
//        render(this.eventCardComponent, this.tripEventList.getElement().querySelectorAll('.trip-events__item')[i]);
//      } else {
//        render(new TripEventItemView(), this.tripEventList.getElement());
//        render(new EventOverviewView(), this.tripEventList.getElement().querySelectorAll('.trip-events__item')[i]);
//      }
//    }

//    NEW

    render(this.tripEventList, this.tripEvents);
    for(let i = 0; i < this.events.length; i++) {
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
    const availableOffersForPoint = [];
    event.offers.forEach((offerId) => {
      availableOffersForPoint.push(offersForPointByType.find((value) => value.id === offerId));
    });

    return new DetailEventModel({
      pointId: event.id,
      basePrice: event.basePrice,
      dateFrom: event.dateFrom,
      dateTo: event.dateTo,
      isFavorite: event.isFavorite,
      type: event.type,
      destination: this.destinations.find((value) => value.id === event.destination),
      offers: availableOffersForPoint,
    });
  }
}
