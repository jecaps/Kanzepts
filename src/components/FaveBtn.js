import { FavoriteBookmarkIcon } from "./Icons";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import styled from "styled-components";

export default function FaveBtn({ recipe }) {
  const { recipes, setRecipes, favorites, setFavorites, results, setResults } =
    useContext(RecipeContext);
  const { id, isFavorite } = recipe;

  function toggleFavorite() {
    setRecipes(
      recipes.map((r) =>
        r.id === id ? { ...r, isFavorite: !r.isFavorite } : r
      )
    );

    setResults(
      results.map((result) =>
        result.id === id
          ? { ...result, isFavorite: !result.isFavorite }
          : result
      )
    );

    // Checks if the recipe is already in the list of favorites
    favorites.every((favorite) => favorite.id !== id) && !isFavorite
      ? setFavorites([
          ...favorites,
          { ...recipe, isFavorite: !recipe.isFavorite },
        ])
      : setFavorites(favorites.filter((favorite) => favorite.id !== id));
  }

  return (
    <Button onClick={() => toggleFavorite()} isFavorite={isFavorite}>
      <FavoriteBookmarkIcon />
    </Button>
  );
}

const Button = styled.button`
  all: unset;
  position: absolute;
  top: -3px;
  right: -8px;
  border-radius: 8px;
  padding: 0.3rem;
  display: flex;
  justify-content: center;

  svg {
    fill: ${({ isFavorite }) => (isFavorite ? "red" : "#000000")};
    width: 40px;
    height: 40px;
  }
`;
