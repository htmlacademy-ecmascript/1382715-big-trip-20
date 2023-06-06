import {FilterType} from '../const.js';
import dayjs from 'dayjs';

function isEventFuture(dueDate) {
  return dayjs().isBefore(dayjs(dueDate), 'D');
}

function isEventPresent(dueDate) {
  return dayjs().isSame(dayjs(dueDate), 'D');
}

function isEventPast(dueDate) {
  return dayjs().isAfter(dayjs(dueDate), 'D');
}

function sortByDate(dayA, dayB) {
  return dayjs(dayA) - dayjs(dayB);
}

const filter = {
  [FilterType.EVERYTHING]: (points) => points.sort((pointA, pointB) => sortByDate(pointA.dateFrom, pointB.dateFrom)),
  [FilterType.FUTURE]: (points) => points.filter((point) => isEventFuture(point.dateFrom)),
  [FilterType.PAST]: (points) => points.filter((point) => isEventPast(point.dateFrom)),
  [FilterType.PRESENT]: (points) => points.filter((point) => isEventPresent(point.dateFrom))
};

export {isEventFuture, isEventPresent, isEventPast, filter};
