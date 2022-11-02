import styled from "styled-components";
import { EditIcon, CalendarIcon } from "./Icons";

export default function EditBtn({ clickHandler }) {
  return (
    <Button onClick={clickHandler} className="edit">
      <CalendarIcon />
      <EditIcon />
    </Button>
  );
}

const Button = styled.button`
  position: relative;

  .pen {
    position: absolute;
    width: 7px !important;
    right: 4px;
    top: 5.5px;
    fill: #39393a !important;
  }
`;
