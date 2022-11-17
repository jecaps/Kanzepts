import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { RecipeContext } from "../context/RecipeContext";

import styled from "styled-components";

export default function SearchInput() {
  const { setIsShown } = useContext(SearchContext);
  const { query, setQuery, setResults, prevQuery } = useContext(RecipeContext);
  const navigate = useNavigate();

  function searchRecipeHandler(e) {
    e.preventDefault();
    prevQuery.current = query;

    async function searchQuery() {
      const RES = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          process.env.REACT_APP_API_KEY
        }&tags=${query.toLowerCase()}&number=10`
      );
      const DATA = await RES.json();
      setResults(DATA.recipes.map((data) => ({ ...data, isFavorite: false })));
    }
    searchQuery();
    navigate("/search");
    setIsShown(false);
  }

  return (
    <InputContainer type="submit" onSubmit={searchRecipeHandler}>
      <input
        autoFocus
        type="input"
        placeholder="Search Recipes"
        onInput={(e) => setQuery(e.target.value)}
      />
    </InputContainer>
  );
}

const InputContainer = styled.form`
  width: 95%;

  input {
    all: unset;
    height: 2.05rem;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    text-align: left;
    padding: 0 5px;
    background-color: #fff;
  }
`;
