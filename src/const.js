const EVENT_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const DESTINATION_LIST = ['Amsterdam', 'Geneva', 'Chamonix'];

const FilterType = {
  EVERYTHING : 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};

export {EVENT_TYPES, DESTINATION_LIST, FilterType, Mode};
