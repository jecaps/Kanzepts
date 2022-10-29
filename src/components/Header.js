import FavesPageBtn from "./FavesPageBtn";
import SearchBtn from "./SearchBtn";
import SearchInput from "./SearchInput";
import logo from "../image/kanzepts-logo.png";
import styled from "styled-components";
import { SearchContext } from "../context/SearchContext";
import { useState } from "react";

export default function Header() {
  const [isShown, setIsShown] = useState(false);

  function toggleSearchInput() {
    setIsShown(!isShown);
  }

  return (
    <SearchContext.Provider value={{ toggleSearchInput }}>
      <StyledHeader>
        {isShown && <SearchInput />}
        {!isShown && (
          <>
            <FavesPageBtn />
            <div>
              <img src={logo} alt="kanzepts logo" />
              <p>Kanzepts</p>
            </div>
            <SearchBtn />
          </>
        )}
      </StyledHeader>
    </SearchContext.Provider>
  );
}

const StyledHeader = styled.header`
  background-color: #faca00;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;

  div {
    display: flex;
    align-items: center;
    margin: auto;
  }

  img {
    height: 35px;
    color: #027373;
  }

  p {
    margin: 0;
    font-family: "Annie Use Your Telescope", cursive;
    font-size: 1.5rem;
  }

  button {
    all: unset;
    font-size: 0.8rem;
  }

  svg {
    height: 25px;
    width: 25px;
    fill: #0d0d0d;
  }
`;
