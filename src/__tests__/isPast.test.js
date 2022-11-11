import { isPast } from "../helpers/Utils";
import "@testing-library/jest-dom";

it("Function should return true for dates in the past", async () => {
  const date1 = "3024-11-23";
  const date2 = "3023-10-16";
  const date3 = "3025-1-29";

  const result1 = isPast(date1);
  const result2 = isPast(date2);
  const result3 = isPast(date3);

  expect(result1).toBeFalsy();
  expect(result2).toBeFalsy();
  expect(result3).toBeFalsy();
});

it("Function should return false for dates in the future", async () => {
  const date1 = "1165-6-1";
  const date2 = "1732-4-4";
  const date3 = "1448-12-3";

  const result1 = isPast(date1);
  const result2 = isPast(date2);
  const result3 = isPast(date3);

  expect(result1).toBeTruthy();
  expect(result2).toBeTruthy();
  expect(result3).toBeTruthy();
});
