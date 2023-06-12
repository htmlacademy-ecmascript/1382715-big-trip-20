import {remove, render, replace} from '../framework/render.js';
import EventOverviewView from '../view/event-overview-view.js';
import EventCardView from '../view/event-card-view.js';

export default class PointPresenter {
  #tripListContainer = null;

  #overviewComponent = null;
  #editCardComponent = null;

  #event = null;

  constructor({tripListContainer}) {
    this.#tripListContainer = tripListContainer;
  }

  init(event) {
    this.#event = event;

    const prevOverviewComponent = null;
    const prevEditCardComponnent = null;

    this.#overviewComponent = new EventOverviewView({
      detailEventModel: this.#event,
      onEditClick: this.#handleEditClick,
    });

    this.#editCardComponent = new EventCardView({
      detailEventModel: this.#event,
      onFormSubmit: this.#handleEditCardSubmit,
    });

    if(prevOverviewComponent === null || prevEditCardComponnent === null) {
      render(this.#overviewComponent, this.#tripListContainer);
      return;
    }

    if(this.#tripListContainer.contains(prevOverviewComponent.element)) {
      replace(this.#overviewComponent, prevOverviewComponent);
    }

    if(this.#tripListContainer.contains(prevEditCardComponnent.element)) {
      replace(this.#editCardComponent, prevEditCardComponnent);
    }

    remove(prevOverviewComponent);
    remove(prevEditCardComponnent);
  }

  destroy() {
    remove(this.#overviewComponent);
    remove(this.#editCardComponent);
  }

  #replaceOverviewToEditCard() {
    replace(this.#editCardComponent, this.#overviewComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  #replaceEditCardToOverview() {
    replace(this.#overviewComponent, this.#editCardComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
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

  #handleEditCardSubmit = () => {
    this.#replaceEditCardToOverview();
  };
}
