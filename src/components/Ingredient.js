import styled from "styled-components";

export default function Ingredient({ ingredient }) {
  const { name, unit, amount } = ingredient;

  return (
    <IngredientContainer>
      <Amount>
        {amount} {unit}
      </Amount>
      <Name>{name}</Name>
    </IngredientContainer>
  );
}

const IngredientContainer = styled.li`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
`;

const Amount = styled.p`
  width: 40%;
  font-weight: 600;
`;

const Name = styled.p`
  width: 50%;
`;
