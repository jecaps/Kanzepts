import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { RecipeContext } from "./context/RecipeContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Plan from "./pages/Plan";
import History from "./pages/History";
import Error from "./pages/Error";
import Favorites from "./pages/Favorites";
import { saveToLocal, loadFromLocal } from "./lib/localStorage";
import data from "./data";

export default function App() {
  // const [data, setData] = useState([]);
  const [recipes, setRecipes] = useState(
    loadFromLocal("saved recipes") ?? data
  );

  useEffect(() => {
    saveToLocal("saved recipes, recipes");
  }, [recipes]);

  // useEffect(() => {
  //   async function getData() {
  //     // try to get from db if not get from api
  //     const RES = await fetch(
  //       `https://api.spoonacular.com/recipes/random?apiKey=${process.env.API_KEY}&number=25`
  //     );
  //     const DATA = await RES.json();
  //     // write to db
  //     console.log(DATA);
  //   }
  //   getData();
  // }, []);

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="favorites" element={<Favorites />} />
          <Route index element={<Home />} />
          <Route path="form" element={<Form />} />
          <Route path="plan" element={<Plan />} />
          <Route path="history" element={<History />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </RecipeContext.Provider>
  );
}
