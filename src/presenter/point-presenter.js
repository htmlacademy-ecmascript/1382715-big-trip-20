import {remove, render, replace} from '../framework/render.js';
import EventOverviewView from '../view/event-overview-view.js';
import EventCardView from '../view/event-card-view.js';
import {copyDetailEventModel} from '../model/detail-event-model';
import {Mode} from '../const.js';

export default class PointPresenter {
  #tripListContainer = null;
  #handleDateChange = null;
  #handleModeChange = null;

  #overviewComponent = null;
  #editCardComponent = null;

  #event = null;
  #mode = Mode.DEFAULT;
  constructor({tripListContainer, onDateChange, onModeChange}) {
    this.#tripListContainer = tripListContainer;
    this.#handleDateChange = onDateChange;
    this.#handleModeChange = onModeChange;
  }

  init(event) {
    this.#event = event;

    const prevOverviewComponent = this.#overviewComponent;
    const prevEditCardComponent = this.#editCardComponent;

    this.#overviewComponent = new EventOverviewView({
      detailEventModel: this.#event,
      onEditClick: this.#handleEditClick,
      onFavoriteClick: this.#handleFavoriteClick,
    });

    this.#editCardComponent = new EventCardView({
      detailEventModel: this.#event,
      onFormSubmit: this.#handleEditCardSubmit,
    });

    if(prevOverviewComponent === null || prevEditCardComponent === null) {
      render(this.#overviewComponent, this.#tripListContainer);
      return;
    }

    if(this.#mode === Mode.DEFAULT) {
      replace(this.#overviewComponent, prevOverviewComponent);
    }

    if(this.#mode === Mode.EDITING) {
      replace(this.#editCardComponent, prevEditCardComponent);
    }

    remove(prevOverviewComponent);
    remove(prevEditCardComponent);
  }

  destroy() {
    remove(this.#overviewComponent);
    remove(this.#editCardComponent);
  }

  resetView() {
    if(this.#mode !== Mode.DEFAULT) {
      this.#replaceEditCardToOverview();
    }
  }

  #replaceOverviewToEditCard() {
    replace(this.#editCardComponent, this.#overviewComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  }

  #replaceEditCardToOverview() {
    replace(this.#overviewComponent, this.#editCardComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = Mode.DEFAULT;
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceEditCardToOverview();
    }
  };

  #handleEditClick = () => {
    this.#replaceOverviewToEditCard();
  };

  #handleFavoriteClick = () => {
    const newEvent = copyDetailEventModel({
      detailEventModel: this.#event,
      isFavorite: !this.#event.isFavorite
    });

    this.#handleDateChange(newEvent);
  };

  #handleEditCardSubmit = (offers, eventType) => {
    const newEvent = copyDetailEventModel({
      detailEventModel: this.#event,
      dateFrom: this.#event.dateFrom,
      dateTo: this.#event.dateTo,
      type: eventType,
      isFavorite: this.#event.isFavorite,
      destination: this.#event.destination,
      allOffers: this.#event.allOffers,
      selectedOffersId: offers,
    });

    this.#handleDateChange(newEvent);
    this.#replaceEditCardToOverview();
  };
}
