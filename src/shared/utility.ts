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