import styled from "styled-components";

export default function Ingredient({ ingredient }) {
  const { name, unit, amount } = ingredient;

  return (
    <IngredientContainer>
      <p className="ingredient__amount">
        {amount} {unit}
      </p>
      <p className="ingredient__name">{name}</p>
    </IngredientContainer>
  );
}

const IngredientContainer = styled.li`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;

  .ingredient__amount {
    width: 40%;
    font-weight: 500;
  }

  .ingredient__name {
    width: 50%;
  }
`;
