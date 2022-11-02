import styled from "styled-components";
import { DeleteIcon } from "./Icons";

export default function DeleteBtn({ clickHandler }) {
  return (
    <Delete onClick={clickHandler}>
      <DeleteIcon />
    </Delete>
  );
}

const Delete = styled.button`
  all: unset;

  svg {
    fill: white;
    width: 15px;
  }
`;
