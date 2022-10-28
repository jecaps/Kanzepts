import { useEffect, useState } from "react";
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
import { saveToLocal, loadFromLocal } from "./lib/localStorage";

export default function App() {
  const [recipes, setRecipes] = useState(loadFromLocal("saved recipes") ?? []);
  const [favorites, setFavorites] = useState(
    loadFromLocal("saved favorites") ?? []
  );

  useEffect(() => {
    saveToLocal("saved recipes", recipes);
  }, [recipes]);

  useEffect(() => {
    saveToLocal("saved favorites", favorites);
  }, [favorites]);

  useEffect(() => {
    async function getData() {
      const RES = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=103510da930a48bca9b595cf9ada0a49&number=15`
      );
      const DATA = await RES.json();
      setRecipes(DATA.recipes);
    }
    getData();
  }, []);

  return (
    <RecipeContext.Provider
      value={{ recipes, setRecipes, favorites, setFavorites }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route>
            <Route index element={<Home />} />
            <Route path=":id/" element={<Details />} />
          </Route>
          <Route>
            <Route index path="favorites" element={<Favorites />} />
            <Route path=":id/" element={<Details />} />
          </Route>
          <Route path="form" element={<Form />} />
          <Route path="plan" element={<Plan />} />
          <Route path="history" element={<History />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </RecipeContext.Provider>
  );
}
