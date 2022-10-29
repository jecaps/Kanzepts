import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { RecipeContext } from "../context/RecipeContext";

import styled from "styled-components";

export default function SearchInput() {
  const { toggleSearchInput, setIsShown } = useContext(SearchContext);
  const { query, setQuery, setResults, prevQuery } = useContext(RecipeContext);
  const navigate = useNavigate();

  function searchRecipeHandler(e) {
    e.preventDefault();
    prevQuery.current = query;

    async function searchQuery() {
      const RES = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=${query}&number=6`
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
      <Input
        autoFocus
        type="input"
        placeholder="Search Recipes"
        onInput={(e) => setQuery(e.target.value)}
      />
      <button type="button" onClick={toggleSearchInput}>
        Cancel
      </button>
    </InputContainer>
  );
}

const InputContainer = styled.form`
  display: flex;
  justify-content: space-around;
  gap: 5px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  background-color: #fff;
  height: 2.05rem;
  width: 85%;
  border: 1px solid #ffd400;
  border-radius: 8px;
  text-align: left;
  padding: 0 5px;
`;
