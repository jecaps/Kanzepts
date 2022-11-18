import SearchBtn from "./SearchBtn";
import SearchInput from "./SearchInput";
import styled from "styled-components";
import { SearchContext } from "../context/SearchContext";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function Header() {
  const [isShown, setIsShown] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const { id } = useParams();
  const path = useLocation().pathname.slice(1);

  function toggleSearchInput() {
    setIsShown(!isShown);
  }

  return (
    <SearchContext.Provider
      value={{
        toggleSearchInput,
        setIsShown,
        isLoading,
        setisLoading,
      }}
    >
      {isShown && (
        <StyledHeader isOnnDetailsPage={id === path}>
          <SearchInput />
          <button type="button" onClick={toggleSearchInput}>
            Cancel
          </button>
        </StyledHeader>
      )}
      {!isShown && (
        <StyledHeader isOnnDetailsPage={id === path}>
          <p>Kanzepts</p>
          <SearchBtn />
        </StyledHeader>
      )}
    </SearchContext.Provider>
  );
}

const StyledHeader = styled.header`
  background-color: #273043;
  display: ${({ isOnnDetailsPage }) => (isOnnDetailsPage ? "none" : "grid")};
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;

  p {
    margin: 0;
    font-family: "Annie Use Your Telescope", cursive;
    font-size: 1.5rem;
    color: #ddd;
    grid-column: 2 / 8;
  }

  form {
    grid-column: 2 / 8;
  }

  button {
    all: unset;
    font-size: 0.8rem;
    justify-content: end;
    color: #ddd;
  }

  svg {
    width: 1.25rem;
    fill: #ddd;
  }
`;
