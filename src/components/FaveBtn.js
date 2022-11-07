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

  svg {
    fill: ${({ isFavorite }) => (isFavorite ? "#faca00" : "#E6E8E6")};
    width: 1.25rem;
  }

  &:active {
    animation: shake 0.2s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    perspective: 1000px;
  }

  @keyframes shake {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(5deg);
    }
    50% {
      transform: rotate(0eg);
    }
    75% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
