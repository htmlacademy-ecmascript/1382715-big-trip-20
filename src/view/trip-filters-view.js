import AbstractView from '../framework/view/abstract-view.js';


function createTripFilterItem(filter, isChecked) {
  const {type, count} = filter;

  return(
    `<div class="trip-filters__filter">
        <input
          id="filter-${type}"
          class="trip-filters__filter-input
          visually-hidden"
          type="radio"
          name="trip-filter"
          value="${type}"
          ${isChecked ? 'checked' : ''}
          ${count === 0 ? 'disabled' : ''}
        />
        <label
          class="trip-filters__filter-label"
          for="filter-${type}">
          ${type}
        </label>
     </div>`
  );
}
function createTripFilters(filterItems) {
  const filterItemsTemplate = filterItems.map((filter, index) => createTripFilterItem(filter, index === 0)).join('');

  return `
        <form class="trip-filters" action="#" method="get">
          ${filterItemsTemplate}
          <button class="visually-hidden" type="submit">Accept filter</button>
        </form>
  `;
}

export default class TripFilters extends AbstractView {
  #filters = null;

  constructor({filters}) {
    super();
    this.#filters = filters;
  }

  get template() {
    return createTripFilters(this.#filters);
  }
}
