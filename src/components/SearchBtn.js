import { SearchIcon } from "./Icons";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

export default function SearchBtn() {
  const { toggleSearchInput } = useContext(SearchContext);
  const location = useLocation();

  return (
    <Button onClick={toggleSearchInput} pathname={location.pathname}>
      <SearchIcon />
    </Button>
  );
}

const Button = styled.button`
svg {
  ${({ pathname }) =>
    pathname === "/search" &&
    `
  fill: #DD0426;

  path {
    stroke: #DD0426;
    stroke-width: 0.75px;
  }
}
`}
`;
