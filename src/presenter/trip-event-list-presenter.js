import TripEventsList from '../view/trip-events-list-view.js';
import TripEventItem from '../view/trip-event-item-view.js';
import EventCard from '../view/event-card-view.js';
import EventOverview from '../view/event-overview-view.js';

import {render} from '../render.js';

export default class EventCardPresenter {
  tripEventList = new TripEventsList();
  tripEventItem = new TripEventItem();
  eventCard = new EventCard();
  eventOverview = new EventOverview();

  constructor({tripEventListContainer}) {
    this.tripEventListContainer = tripEventListContainer;
  }

  init() {

    render();

  }
}
