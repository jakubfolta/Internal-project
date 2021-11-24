export const setHalfYearPeriodTimeString = () => {
  const currentDate = new Date();

  const [currentYear, currentMonth, currentDay] = [
    currentDate.getFullYear(),
    (`0${currentDate.getMonth() + 1}`).slice(-2),
    (`0${currentDate.getDate()}`).slice(-2)
  ];
  
  const sixMonthsAgoDay = currentDate.getDate() - 180;
  const halfYearAgoDate = new Date(currentDate.setDate(sixMonthsAgoDay));
  
  const [halfYearAgoYear, halfYearAgoMonth, halfYearAgoDay] = [
    halfYearAgoDate.getFullYear(),
    (`0${halfYearAgoDate.getMonth() + 1}`).slice(-2),
    (`0${halfYearAgoDate.getDate()}`).slice(-2)
  ];

  const halfYearTimePeriod = `${halfYearAgoYear}-${halfYearAgoMonth}-${halfYearAgoDay},${currentYear}-${currentMonth}-${currentDay}`;

  return halfYearTimePeriod;
}

export const getElapsedDaysSincePastDate = (pastDate: string, isRounded?: boolean) => {
  const elapsedSeconds = Math.floor((new Date().getTime() - new Date(pastDate).getTime()) / 1000);
  const elapsedMinutes = Math.floor(elapsedSeconds / 60);
  const elapsedHours = Math.floor(elapsedMinutes / 60);
  const elapsedDays = Math.floor(elapsedHours / 24);

  return isRounded ? getRoundedDaysGone(elapsedDays) : elapsedDays;
}

const getRoundedDaysGone = (daysGone: number) => {
  if (daysGone < 30) return `${daysGone} ${daysGone === 1 ? 'day' : 'days'} ago`;
  if (Math.round(daysGone / 30) === 1) return 'a month ago'; 
  return `${Math.round(daysGone / 30)} months ago`;
} 