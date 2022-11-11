import { render, screen, fireEvent } from "@testing-library/react";
import DateInput from "../components/DateInput";

const mockedSetDate = jest.fn();

describe("DateInput", () => {
  it("should render the date input", () => {
    render(<DateInput setDate={mockedSetDate} />);

    const inputElement = screen.getByText("Date");
    expect(inputElement).toBeInTheDocument();
  });

  it("should be able to add date", () => {
    render(<DateInput setDate={mockedSetDate} />);

    const inputElement = screen.getByLabelText("Date");
    fireEvent.change(inputElement, { target: { value: "2022-11-10" } });
    expect(inputElement.value).toBe("2022-11-10");
  });

  it("should not be able to add past date", () => {
    render(<DateInput setDate={mockedSetDate} />);

    const inputElement = screen.getByLabelText("Date");
    fireEvent.change(inputElement, { target: { value: "2022-10-10" } });
    expect(inputElement.value).not.toBe("2022-11-10");
  });
});
