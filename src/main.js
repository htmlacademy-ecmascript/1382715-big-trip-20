import {render} from './render.js';
import TripFilters from './view/trip-filters-view.js';
import TripSort from './view/trip-sort-view.js';
import TripEventListPresenter from './presenter/trip-event-list-presenter.js';

const siteHeaderTripControlsFilters = document.querySelector('.trip-controls__filters');
const siteMainTrip = document.querySelector('.trip-events');

const siteMain = new TripEventListPresenter({
  tripEvents: siteMainTrip
});

render(new TripFilters(), siteHeaderTripControlsFilters);
render(new TripSort(), siteMainTrip);

siteMain.init();
