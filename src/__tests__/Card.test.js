import { render, screen } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import data from "../data";
import Card from "../components/Card";

const recipe = data[0];

describe("Recipe Card", () => {
  it("should render name of the recipe", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Card recipe={recipe} />} />
        </Routes>
      </BrowserRouter>
    );
    const titleElement = screen.getByText(recipe.title);
    expect(titleElement).toBeInTheDocument();
  });

  // it("should render a short summary of the recipe", () => {
  //   render(
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="*" element={<Card recipe={recipe} />} />
  //       </Routes>
  //     </BrowserRouter>
  //   );
  //   const descriptionElement = screen.getByText(
  //     recipe.summary.replace(/<\/?[^>]+(>|$)/g, "")
  //   );
  //   expect(descriptionElement).toBeInTheDocument();
  // });

  it("should render a duration of the recipe", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Card recipe={recipe} />} />
        </Routes>
      </BrowserRouter>
    );
    const durationElement = screen.getByText(recipe.readyInMinutes + "min");
    expect(durationElement).toBeInTheDocument();
  });

  it("should render the image of the recipe", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Card recipe={recipe} />} />
        </Routes>
      </BrowserRouter>
    );
    const imageElement = screen.getByRole("img", { name: recipe.title });
    expect(imageElement).toBeInTheDocument();
  });
});
