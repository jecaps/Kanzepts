import styled from "styled-components";

export default function Instruction({ instruction }) {
  const { number, step } = instruction;

  return (
    <InstructionContainer>
      <StepNum>Step {number}:</StepNum>
      <Step>{step}</Step>
    </InstructionContainer>
  );
}

const InstructionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
`;

const StepNum = styled.p`
  width: 20%;
  font-weight: 600;
`;

const Step = styled.p`
  width: 70%;
`;
