import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { RecipeContext } from "../context/RecipeContext";

import styled from "styled-components";
// import data from "../data";

export default function SearchInput() {
  const { toggleSearchInput, setIsShown } = useContext(SearchContext);
  const { query, setQuery, setResults } = useContext(RecipeContext);
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    console.log("fetching data");
    async function searchQuery() {
      const RES = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=${query}&number=6`
      );
      const DATA = await RES.json();
      console.log(DATA.recipes);
      setResults(DATA.recipes);
    }
    searchQuery();
    navigate("/search");
    setIsShown(false);
  }

  return (
    <InputContainer type="submit" onSubmit={submitHandler}>
      <Input
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
