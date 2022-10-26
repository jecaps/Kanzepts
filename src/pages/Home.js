import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

export default function Home() {
  const { recipes } = useContext(RecipeContext);

  return (
    <>
      <h2>Recipes you might enjoy</h2>
    </>
  );
}
