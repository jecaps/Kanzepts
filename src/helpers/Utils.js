// Checks if a date in the mealSchedule has already passed
export function isPast(date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(date) < today;
}

// scroll to top when visiting the recipe details page and sets meal state to a specific recipe
export function detailsPageNavigator(mealSetter, mealToSet) {
  window.scrollTo({ top: 0, left: 0 });
  mealSetter(mealToSet);
}

export function tellDayOfWeek(mealDate) {
  const dayOfWeek = new Date(mealDate).getDay();
  const today = new Date().getDay();

  return dayOfWeek === today
    ? "TODAY"
    : dayOfWeek + 1 === today + 1 || (dayOfWeek === 0 && today + 1 === 7)
    ? "TOMORROW"
    : dayOfWeek - 1 === today - 1 || (dayOfWeek === 0 && today - 1 === -1)
    ? "YESTERDAY"
    : dayOfWeek === 0
    ? "SUN"
    : dayOfWeek === 1
    ? "MON"
    : dayOfWeek === 2
    ? "TUE"
    : dayOfWeek === 3
    ? "WED"
    : dayOfWeek === 4
    ? "THU"
    : dayOfWeek === 5
    ? "FRI"
    : "SAT";
}

export function tellMonth(mealDate) {
  const month = new Date(mealDate).getMonth();

  return month === 0
    ? "JAN"
    : month === 1
    ? "FEB"
    : month === 2
    ? "MAR"
    : month === 3
    ? "APR"
    : month === 4
    ? "MAY"
    : month === 5
    ? "JUNE"
    : month === 6
    ? "JULY"
    : month === 7
    ? "AUG"
    : month === 8
    ? "SEP"
    : month === 9
    ? "OCT"
    : month === 10
    ? "NOV"
    : "DEC";
}
