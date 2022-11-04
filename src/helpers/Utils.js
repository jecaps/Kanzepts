// Checks if a date in the mealSchedule has already passed
export function isPast(date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(date) < today;
}
