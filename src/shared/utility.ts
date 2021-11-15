export const setWeekPeriodTimeString = () => {
  const currentDate = new Date();
  const [currentYear, currentMonth, currentDay] = [currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate()];
  
  const sevenDaysAgoDay = currentDate.getDate() - 200;
  const weekAgoDate = new Date(currentDate.setDate(sevenDaysAgoDay));
  const [weekAgoYear, weekAgoMonth, weekAgoDay] = [weekAgoDate.getFullYear(), weekAgoDate.getMonth() + 1, weekAgoDate.getDate()];
  
  const weekTimePeriod = `${weekAgoYear}-${weekAgoMonth}-${weekAgoDay},${currentYear}-${currentMonth}-${currentDay}`;

  console.log(typeof(weekTimePeriod));
  return weekTimePeriod;
}