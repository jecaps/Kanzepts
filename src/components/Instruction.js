import styled from "styled-components";

export default function Instruction({ instruction }) {
  const { number, step } = instruction;

  return (
    <InstructionContainer>
      <Number>Step {number}:</Number>
      <Step>{step}</Step>
    </InstructionContainer>
  );
}

const InstructionContainer = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
`;

const Number = styled.p`
  width: 20%;
`;

const Step = styled.p`
  width: 80%;
`;
