import {render, replace} from '../framework/render.js';
import TripEventsListView from '../view/trip-events-list-view.js';
import EventOverviewView from '../view/event-overview-view.js';
import EventCardView from '../view/event-card-view.js';
import EventListEmptyView from '../view/event-list-empty-view.js';

import DetailEventModel from '../model/detail-event-model';

export default class TripEventListPresenter {
  #tripEventList = new TripEventsListView();
  #tripEvents = null;
  #eventsModel = null;
  #events = null;
  #destinations = null;
  #availableOffers = null;
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
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceEditCardToOverview();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const overviewComponnet = new EventOverviewView({
      detailEventModel: this.#createDetailEventModel(event),
      onEditClick: () => {
        replaceOverviewToEditCatd();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const editCardComponnet = new EventCardView({
      detailEventModel: this.#createDetailEventModel(event),
      onFormSubmit: () => {
        replaceEditCardToOverview();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });

    function replaceEditCardToOverview() {
      replace(overviewComponnet, editCardComponnet);
    }

    function replaceOverviewToEditCatd() {
      replace(editCardComponnet, overviewComponnet);
    }

    render(overviewComponnet, this.#tripEventList.element);
  }

  #renderEventListEmpty() {
    render(new EventListEmptyView, this.#tripEvents);
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
