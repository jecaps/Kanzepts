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
  width: 70%;
  margin: auto;
  text-align: right;

  p {
    margin: 0;
  }
`;

const Amount = styled.p`
  text-align: left;
  width: 40%;
`;

const IngredientName = styled.p`
  text-align: left;
  width: 60%;
`;
