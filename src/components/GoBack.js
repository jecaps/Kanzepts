import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "./Icons";
import styled from "styled-components";

export default function GoBack() {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(-1)}>
      <ArrowLeft /> <p>Previous Page</p>
    </Button>
  );
}

const Button = styled.button`
  all: unset;
  font-size: 0.8rem;
  display: flex;
  padding: 0.5rem;
  gap: 5px;
  color: #db4200;
  margin: 0;

  svg {
    width: 15px;
    fill: #db4200;
  }
`;
