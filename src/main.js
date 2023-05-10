import {render} from './render.js';
import TripFilters from './view/trip-filters-view.js';
import TripSort from './view/trip-sort-view.js';
import TripEventsList from './view/trip-events-list-view.js';
import TripEventItem from './view/trip-event-item-view.js';
import EventCardPresenter from './presenter/event-card-presenter.js';

const siteHeaderTripControlsFilters = document.querySelector('.trip-controls__filters');
const siteMainTripControlsSort = document.querySelector('.trip-events');

const tripEventList = new TripEventsList();
const tripEventItem = new TripEventItem();
const tripEventCardContainer = tripEventList.getElement().querySelectorAll('.trip-events__item')[0];

const eventCardPresenter = new EventCardPresenter({tripEventListContainer: tripEventCardContainer});

render(new TripFilters(), siteHeaderTripControlsFilters);
render(new TripSort(), siteMainTripControlsSort);
render(tripEventList, siteMainTripControlsSort);

eventCardPresenter.init();

