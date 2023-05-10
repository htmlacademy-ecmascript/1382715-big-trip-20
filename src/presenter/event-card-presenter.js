import EventCardView from '../view/event-card-view.js';
import EventInformatioView from '../view/event-information-view.js';
import EventOffersView from '../view/event-offers-view.js';
import EventDestinationView from '../view/event-destination-view.js';

import {render, RenderPosition} from '../render.js';

export default class EventCardPresenter {
  eventCardComponent = new EventCardView();
  eventInformationComponent = new EventInformatioView();
  eventOffersComponent = new EventOffersView();
  eventDestination = new EventDestinationView();

  constructor({tripEventListContainer}) {
    this.tripEventListContainer = tripEventListContainer;
  }

  init() {
    render(this.eventInformationComponent, this.eventCardComponent.getElement(), RenderPosition.AFTERBEGIN);
    render(this.eventOffersComponent, this.eventCardComponent.getElement().querySelector('.event__details'));
    render(this.eventDestination, this.eventCardComponent.getElement().querySelector('.event__details'));
    render(this.eventCardComponent, this.tripEventListContainer);
//    render(this.boardComponent, this.boardContainer);
//    render(new SortView(), this.boardComponent.getElement());
//    render(this.taskListComponent, this.boardComponent.getElement());
//    render(new TaskEditView(), this.taskListComponent.getElement());
//
//    for (let i = 0; i < 3; i++) {
//      render(new TaskView(), this.taskListComponent.getElement());
//    }
//
//    render(new LoadMoreButtonView(), this.boardComponent.getElement());
  }
}
