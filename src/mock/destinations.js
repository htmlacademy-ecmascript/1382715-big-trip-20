import {getRandomInt} from '../utils/common.js';

const destinations = [
  {
    id: '1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    name: 'Chamonix',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(0, 500)}`,
        description: 'Cras aliquet varius magna, non porta ligula feugiat eget.'
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(0, 500)}`,
        description: 'Fusce tristique felis at fermentum pharetra'
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(0, 500)}`,
        description: 'Aliquam id orci ut lectus varius viverra.'
      },
    ]
  },
  {
    id: '2',
    description: 'Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Form',
    name: 'Rome',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(0, 500)}`,
        description: 'Sed blandit, eros vel aliquam faucibus'
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(0, 500)}`,
        description: 'euismod diam, eu luctus nunc ante ut dui.'
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(0, 500)}`,
        description: 'ex euismod diam, eu luctus nunc .'
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(0, 500)}`,
        description: 'Sed blandit,'
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(0, 500)}`,
        description: 'Sed.'
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(0, 500)}`,
        description: 'faucibus, purus ex euismod diam.'
      },
    ]
  },
  {
    id: '3',
    description: 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
    name: 'Amsterdam',
    pictures: [ ],
  },
  {
    id: '4',
    description: 'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.',
    name: 'Geneva',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(0, 500)}`,
        description: 'In rutrum ac purus sit amet tempus.'
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(0, 500)}`,
        description: 'Nunc fermentum tortor ac porta dapibus.'
      },
    ],
  }
];

export {destinations};
