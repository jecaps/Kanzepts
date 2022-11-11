import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";

describe("Header", () => {
  it("should hide the search button", async () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Header />} />
        </Routes>
      </BrowserRouter>
    );
    const btnElement = screen.getByRole("button", { name: "" });
    fireEvent.click(btnElement);
    expect(btnElement).not.toBeInTheDocument();
  });

  it("should should show the search input", async () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Header />} />
        </Routes>
      </BrowserRouter>
    );
    const btnElement = screen.getByRole("button", { name: "" });
    fireEvent.click(btnElement);
    const inputElement = screen.getByPlaceholderText("Search Recipes");
    expect(inputElement).toBeInTheDocument();
  });
});
