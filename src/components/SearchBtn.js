import { SearchIcon, SearchIconFilled } from "./Icons";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

export default function SearchBtn() {
  const { toggleSearchInput } = useContext(SearchContext);
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Button onClick={toggleSearchInput} pathname={pathname}>
      {pathname === "/search" ? <SearchIconFilled /> : <SearchIcon />}
    </Button>
  );
}

const Button = styled.button`
    ${({ pathname }) =>
      pathname === "/search" &&
      `svg {
        width: 1.25rem;
        fill: #30cfd0;
      }`}
  }
`;
