import { useEffect, useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { RecipeContext } from "./context/RecipeContext";
import Layout from "./components/Layout";
import Details from "./components/Details";
import Home from "./pages/Home";
import AddMealPlan from "./pages/AddMealPlan";
import Plan from "./pages/Plan";
import History from "./pages/History";
import Error from "./pages/Error";
import Favorites from "./pages/Favorites";
import { saveToLocal, loadFromLocal } from "./lib/localStorage";
import Search from "./pages/Search";

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState(
    loadFromLocal("saved favorites") ?? []
  );
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState();
  const [meal, setMeal] = useState({});
  const [mealSchedule, setMealSchedule] = useState(
    loadFromLocal("saved schedule") ?? {}
  );
  const prevQuery = useRef(query);

  useEffect(() => {
    saveToLocal("saved schedule", mealSchedule);
  }, [mealSchedule]);

  useEffect(() => {
    saveToLocal("saved favorites", favorites);
  }, [favorites]);

  useEffect(() => {
    async function getData() {
      const RES = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=15`
      );
      const DATA = await RES.json();
      setRecipes(DATA.recipes.map((data) => ({ ...data, isFavorite: false })));
    }
    getData();
  }, []);

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        setRecipes,
        favorites,
        setFavorites,
        results,
        setResults,
        query,
        setQuery,
        prevQuery,
        meal,
        setMeal,
        mealSchedule,
        setMealSchedule,
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route>
            <Route index element={<Home />} />
            <Route path=":id/" element={<Details />} />
          </Route>
          <Route index path="favorites" element={<Favorites />} />
          <Route path="form" element={<AddMealPlan />} />
          <Route path="plan" element={<Plan />} />
          <Route path="history" element={<History />} />
          <Route path="search" element={<Search />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </RecipeContext.Provider>
  );
}
