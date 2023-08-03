import { DateFormat, Day, Month, Year } from 'constants/types';

export const formatDate = (date: Date): DateFormat => {
  const months: Month[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const day: Day = `${date.getDate()}`;
  const month: Month = months[date.getMonth()];
  const year: Year = `${date.getFullYear()}`;

  return `${month} ${day}, ${year}`;
};
