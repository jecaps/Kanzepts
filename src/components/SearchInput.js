import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import styled from "styled-components";

export default function SearchInput() {
  const { toggleSearchInput } = useContext(SearchContext);

  return (
    <InputContainer>
      <Input type="text" placeholder="Search Recipes" />
      <button type="button" onClick={toggleSearchInput}>
        Cancel
      </button>
    </InputContainer>
  );
}

const InputContainer = styled.div`
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
