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
