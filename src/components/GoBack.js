import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "./Icons";
import styled from "styled-components";

export default function GoBack() {
  const navigate = useNavigate();

  return (
    <Button className="back-btn" onClick={() => navigate(-1)}>
      <ArrowLeft />
    </Button>
  );
}

const Button = styled.button`
  all: unset;
`;
