import {getRandomInt} from '../utils/common.js';

const points = [
  {
    id: '01',
    basePrice: getRandomInt(200, 500),
    dateFrom: '2025-08-04T22:28:01.397Z',
    dateTo: '2025-08-05T11:28:01.397Z',
    destination: '1',
    isFavorite: true,
    offers: ['2', '3'],
    type: 'taxi',
  },
  {
    id: '02',
    basePrice: getRandomInt(200, 500),
    dateFrom: '2024-08-05T23:28:01.397Z',
    dateTo: '2024-08-07T12:28:01.397Z',
    destination: '2',
    isFavorite: false,
    offers: ['1', '2'],
    type: 'flight',
  },
  {
    id: '03',
    basePrice: getRandomInt(200, 500),
    dateFrom: '2024-08-09T12:28:01.397Z',
    dateTo: '2024-08-10T03:28:01.397Z',
    destination: '2',
    isFavorite: false,
    offers: ['1', '2'],
    type: 'sightseeing',
  },
  {
    id: '04',
    basePrice: getRandomInt(200, 500),
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-08-11T23:28:01.397Z',
    destination: '2',
    isFavorite: true,
    offers: ['1', '2'],
    type: 'bus',
  }
];

export {points};
