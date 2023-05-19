import {getRandomInt} from '../utils/common.js';
const offers = [
  {
    type: 'taxi',
    offers :[
      {
        id: '1',
        title: 'Upgrade to a business class',
        price: getRandomInt(200, 600)
      },
      {
        id: '2',
        title: 'Drive quickly, I\'m in a hurry',
        price: getRandomInt(200, 600)
      },
      {
        id: '3',
        title: 'Drive slowly',
        price: getRandomInt(200, 600)
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        'id': '1',
        'title': 'Switch to comfort',
        'price': getRandomInt(100, 1000)
      },
      {
        'id': '2',
        'title': 'Add luggage',
        'price': getRandomInt(100, 1000)
      },
      {
        'id': '3',
        'title': 'Spesial menu: vagan/vagetarian etc.',
        'price': getRandomInt(100, 1000)
      },
    ]
  },
  {
    type: 'sightseeing',
    offers: [
      {
        'id': '1',
        'title': 'Book tickets',
        'price': getRandomInt(100, 250)
      },
      {
        'id': '2',
        'title': 'Lunch in city ',
        'price': getRandomInt(400, 1650)
      },
    ]
  },
  {
    type: 'bus',
    offers: [
      {
        'id': '1',
        'title': 'Add luggage',
        'price': getRandomInt(100, 1000)
      },
      {
        'id': '2',
        'title': 'Choose seats',
        'price': getRandomInt(100, 200)
      },
      {
        'id': '3',
        'title': 'Book tickets',
        'price': getRandomInt(100, 250)
      },
    ]
  },
  {
    type: 'ship',
    offers: []
  },
  {
    type: 'train',
    offers: []
  },
  {
    type: 'drive',
    offers: []
  },
  {
    type: 'check-in',
    offers: []
  },
  {
    type: 'restaurant',
    offers: []
  },
];

export {offers};
