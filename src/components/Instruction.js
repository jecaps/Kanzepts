import styled from "styled-components";

export default function Instruction({ instruction }) {
  const { number, step } = instruction;

  return (
    <InstructionContainer>
      <p className="instruction__step">Step {number}:</p>
      <p className="instruction__text">{step}</p>
    </InstructionContainer>
  );
}

const InstructionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: auto;

  .instruction__step {
    width: 20%;
    font-weight: 500;
  }

  .instruction__text {
    width: 70%;
  }
`;
