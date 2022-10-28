import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { RecipeContext } from "./context/RecipeContext";
import Layout from "./components/Layout";
import Details from "./components/Details";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Plan from "./pages/Plan";
import History from "./pages/History";
import Error from "./pages/Error";
import Favorites from "./pages/Favorites";
import data from "./data";

export default function App() {
  const [recipes, setRecipes] = useState(data);

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route>
            <Route index element={<Home />} />
            <Route path=":id/" element={<Details />} />
          </Route>
          <Route index path="favorites" element={<Favorites />} />
          <Route path="form" element={<Form />} />
          <Route path="plan" element={<Plan />} />
          <Route path="history" element={<History />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </RecipeContext.Provider>
  );
}
