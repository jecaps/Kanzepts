import styled from "styled-components";

export default function Ingredient({ ingredient }) {
  const { name, unit, amount } = ingredient;

  return (
    <IngredientContainer>
      <Amount>
        {amount} {unit}
      </Amount>
      <IngredientName>{name}</IngredientName>
    </IngredientContainer>
  );
}

const IngredientContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
`;

const Amount = styled.p`
  width: 40%;
`;

const IngredientName = styled.p`
  width: 50%;
`;
