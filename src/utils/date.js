import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const DATE_FORMAT = {
  monthDay: 'MMM DD',
  hoursMins: 'HH:MM',
};

function humanizeDateMonthDay(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT.monthDay) : '';
}

function humanizeDateHoursMin(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT.hoursMins) : '';
}

function humanizeDurationTime(startTime, endTime) {
  const start = dayjs(startTime);
  const end = dayjs(endTime);
  const timeDuration = dayjs.duration(end.diff(start));
  const { days, hours, minutes } = timeDuration.$d;

  switch (true) {
    case (days > 0):
      return timeDuration.format('DD[D] HH[H] mm[M]');
    case (hours > 0):
      return timeDuration.format('HH[H] mm[M]');
    case (minutes !== 60):
      return timeDuration.format('mm[M]');
  }
}

export {humanizeDateMonthDay, humanizeDateHoursMin, humanizeDurationTime};
