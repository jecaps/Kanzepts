import FavesPageBtn from "./FavesPageBtn";
import logo from "../image/kanzepts-logo.png";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <div>
        <img src={logo} alt="kanzepts logo" />
        <p>Kanzepts</p>
      </div>
      <FavesPageBtn />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #faca00;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
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
  }

  svg {
    height: 25px;
    width: 25px;
    fill: #0d0d0d;
  }
`;
