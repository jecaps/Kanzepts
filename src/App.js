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
import data from "./data";

export default function App() {
  const [recipes, setRecipes] = useState(data);
  // const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState(
    loadFromLocal("saved favorites") ?? []
  );

  useEffect(() => {
    saveToLocal("saved favorites", favorites);
  }, [favorites]);

  // useEffect(() => {
  //   async function getData() {
  //     const RES = await fetch(
  //       `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=15`
  //     );
  //     const DATA = await RES.json();
  //     setRecipes(DATA.recipes);
  //   }
  //   getData();
  // }, []);

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
