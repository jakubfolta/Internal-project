export const setWeekPeriodTimeString = () => {
  const currentDate = new Date();

  const [currentYear, currentMonth, currentDay] = [
    currentDate.getFullYear(),
    (`0${currentDate.getMonth() + 1}`).slice(-2),
    (`0${currentDate.getDate()}`).slice(-2)
  ];
  
  const sevenDaysAgoDay = currentDate.getDate() - 7;
  const weekAgoDate = new Date(currentDate.setDate(sevenDaysAgoDay));
  
  const [weekAgoYear, weekAgoMonth, weekAgoDay] = [
    weekAgoDate.getFullYear(),
    (`0${weekAgoDate.getMonth() + 1}`).slice(-2),
    (`0${weekAgoDate.getDate()}`).slice(-2)
  ];

  const weekTimePeriod = `${weekAgoYear}-${weekAgoMonth}-${weekAgoDay},${currentYear}-${currentMonth}-${currentDay}`;

  return weekTimePeriod;
}