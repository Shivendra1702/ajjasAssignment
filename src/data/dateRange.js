import { startOfWeek, getYear, endOfISOWeek } from "date-fns";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const date = new Date();

const today = `${weekDays[date.getDay()]}, ${
  months[date.getMonth()]
} ${date.getDate()} `;

const yesterDayDate = new Date(date);
yesterDayDate.setDate(date.getDate() - 1);
const yesterday = `${weekDays[yesterDayDate.getDay()]}, ${
  months[yesterDayDate.getMonth()]
} ${yesterDayDate.getDate()} `;

const dayBeforeYesterdayDate = new Date(date);
dayBeforeYesterdayDate.setDate(date.getDate() - 2);
const dayBeforeYesterday = `${weekDays[dayBeforeYesterdayDate.getDay()]}, ${
  months[dayBeforeYesterdayDate.getMonth()]
} ${dayBeforeYesterdayDate.getDate()} `;

const lastSevenDaysDate = new Date(date);
lastSevenDaysDate.setDate(date.getDate() - 7);
const lastSevenDays = `${
  months[lastSevenDaysDate.getMonth()]
} ${lastSevenDaysDate.getDate()} - ${months[date.getMonth()]} ${
  date.getDate() - 1
} `;

const thisWeek = `${months[startOfWeek(date).getMonth()]} ${startOfWeek(
  date
).getDate()} - ${months[endOfISOWeek(date).getMonth()]} ${
  endOfISOWeek(date).getDate() - 1
}  `;

const lastWeek = `${months[startOfWeek(date - 7).getMonth()]} ${
  startOfWeek(date).getDate() - 7
} - ${months[endOfISOWeek(date).getMonth()]} ${
  endOfISOWeek(date).getDate() - 1 - 7
}  `;

const lastThirtyDaysDate = new Date(date);
lastThirtyDaysDate.setDate(date.getDate() - 30);
const lastThirtyDays = `${
  months[lastThirtyDaysDate.getMonth()]
} ${lastThirtyDaysDate.getDate()} - ${
  months[date.getMonth()]
} ${date.getDate()}  `;

const thisMonth = `${months[date.getMonth()]} `;

const lastMonth = `${months[date.getMonth() - 1]} `;

const thisYear = `Jan 1 - ${
  months[date.getMonth()]
} ${date.getDate()}, ${date.getFullYear()}  `;

const lastYear = `Jan 1 - Dec 31, ${getYear(date) - 1} `;

const lifeTime = `Jan 1, 2022 - ${
  months[date.getMonth()]
} ${date.getDate()}, ${date.getFullYear()} `;

export const dateRange = {
  today: today,
  yesterday: yesterday,
  dayBeforeYesterday: dayBeforeYesterday,
  lastSevenDays: lastSevenDays,
  thisWeek: thisWeek,
  lastWeek: lastWeek,
  lastThirtyDays: lastThirtyDays,
  thisMonth: thisMonth,
  lastMonth: lastMonth,
  thisYear: thisYear,
  lastYear: lastYear,
  lifeTime: lifeTime,
};

export const DateRange = {
  today: {
    start: new Date().setHours(0, 0, 0, 0),
    end: new Date().setHours(23, 59, 59, 999),
  },
  yesterday: {
    start: yesterDayDate.setHours(0, 0, 0, 0),
    end: yesterDayDate.setHours(23, 59, 59, 999),
  },
  dayBeforeYesterday: {
    start: dayBeforeYesterdayDate.setHours(0, 0, 0, 0),
    end: dayBeforeYesterdayDate.setHours(23, 59, 59, 999),
  },
  lastSevenDays: {
    start: lastSevenDaysDate.setHours(0, 0, 0, 0),
    end: new Date(date).setHours(23, 59, 59, 999),
  },
  thisWeek: {
    start: startOfWeek(date).setHours(0, 0, 0, 0),
    end: endOfISOWeek(date).setHours(23, 59, 59, 999),
  },
  lastWeek: {
    start: startOfWeek(date - 7).setHours(0, 0, 0, 0),
    end: endOfISOWeek(date - 7).setHours(23, 59, 59, 999),
  },
  lastThirtyDays: {
    start: lastThirtyDaysDate.setHours(0, 0, 0, 0),
    end: new Date(date).setHours(23, 59, 59, 999),
  },
  thisMonth: {
    start: new Date(date.getFullYear(), date.getMonth(), 1).setHours(
      0,
      0,
      0,
      0
    ),
    end: new Date(date.getFullYear(), date.getMonth() + 1, 0).setHours(
      23,
      59,
      59,
      999
    ),
  },
  lastMonth: {
    start: new Date(date.getFullYear(), date.getMonth() - 1, 1).setHours(
      0,
      0,
      0,
      0
    ),
    end: new Date(date.getFullYear(), date.getMonth(), 0).setHours(
      23,
      59,
      59,
      999
    ),
  },
  thisYear: {
    start: new Date(date.getFullYear(), 0, 1).setHours(0, 0, 0, 0),
    end: new Date(date.getFullYear(), 11, 31).setHours(23, 59, 59, 999),
  },
  lastYear: {
    start: new Date(date.getFullYear() - 1, 0, 1).setHours(0, 0, 0, 0),
    end: new Date(date.getFullYear() - 1, 11, 31).setHours(23, 59, 59, 999),
  },
  lifeTime: {
    start: new Date(2022, 0, 1).setHours(0, 0, 0, 0),
    end: new Date(date.getFullYear(), date.getMonth(), date.getDate()).setHours(
      23,
      59,
      59,
      999
    ),
  },
};
