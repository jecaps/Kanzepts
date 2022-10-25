import logo from "../image/kanzepts-logo.png";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="bi bi-star"
          viewBox="0 0 16 16"
        >
          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
        </svg>
      </button>
      <div>
        <img src={logo} alt="kanzepts logo" />
        <p>Kanzepts</p>
      </div>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="bi bi-star"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </button>
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

  div {
    display: flex;
    align-items: center;
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
