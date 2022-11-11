import { tellDayOfWeek } from "../helpers/Utils";
import "@testing-library/jest-dom";

it("Function should return the day of the week of date that has already passed", async () => {
  const date = "2022-10-10";
  const result = tellDayOfWeek(date);
  expect(result).toEqual("MON");
});

it("Function should return the day of the week of a date in the future", async () => {
  const date = "2023-10-10";
  const result = tellDayOfWeek(date);
  expect(result).toEqual("TUE");
});

it("Function should return today", async () => {
  const result = tellDayOfWeek(new Date());
  expect(result).toEqual("TODAY");
});

it("Function should return tomorrow", async () => {
  const today = new Date();
  const tomorrow = new Date(today);
  const result = tellDayOfWeek(tomorrow.setDate(tomorrow.getDate() + 1));
  expect(result).toBe("TOMORROW");
});
