import TripEventsListView from '../view/trip-events-list-view.js';
import TripEventItemView from '../view/trip-event-item-view.js';
import EventOverviewView from '../view/event-overview-view.js';
import EventCardView from '../view/event-card-view.js';
import EventInformatioView from '../view/event-information-view.js';
import EventOffersView from '../view/event-offers-view.js';
import EventDestinationView from '../view/event-destination-view.js';

import {render, RenderPosition} from '../render.js';

export default class TripEventListPresenter {
  tripEventList = new TripEventsListView();
  eventCardComponent = new EventCardView();
  eventInformationComponent = new EventInformatioView();
  eventOffersComponent = new EventOffersView();
  eventDestination = new EventDestinationView();

  constructor({tripEvents}) {
    this.tripEvents = tripEvents;
  }

  init() {
    render(this.tripEventList, this.tripEvents);
    for(let i = 0; i < 3; i++) {
      if(i === 0) {
        render(new TripEventItemView(), this.tripEventList.getElement());
        render(this.eventInformationComponent, this.eventCardComponent.getElement(), RenderPosition.AFTERBEGIN);
        render(this.eventOffersComponent, this.eventCardComponent.getElement().querySelector('.event__details'));
        render(this.eventDestination, this.eventCardComponent.getElement().querySelector('.event__details'));
        render(this.eventCardComponent, this.tripEventList.getElement().querySelectorAll('.trip-events__item')[i]);
      } else {
        render(new TripEventItemView(), this.tripEventList.getElement());
        render(new EventOverviewView(), this.tripEventList.getElement().querySelectorAll('.trip-events__item')[i]);
      }
    }

  }
}
