import {render, replace} from '../framework/render.js';
import EventOverviewView from '../view/event-overview-view.js';
import EventCardView from '../view/event-card-view.js';

export default class PointPresenter {
  #tripListContainer = null;

  #overviewComponnet = null;
  #editCardComponnet = null;

  #event = null;

  constructor({tripListContainer}) {
    this.#tripListContainer = tripListContainer;
  }

  init(event) {
    this.#event = event;

    this.#overviewComponnet = new EventOverviewView({
      detailEventModel: this.#event,
      onEditClick: this.#handleEditClick,
    });

    this.#editCardComponnet = new EventCardView({
      detailEventModel: this.#event,
      onFormSubmit: this.#handleEditCardSubmit,
    });

    render(this.#overviewComponnet, this.#tripListContainer);
  }

  #replaceOverviewToEditCard() {
    replace(this.#editCardComponnet, this.#overviewComponnet);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  #replaceEditCardToOverview() {
    replace(this.#overviewComponnet, this.#editCardComponnet);
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
