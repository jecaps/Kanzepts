import styled from "styled-components";

export default function MealSlotCard({ recipe, slot, sched }) {
  const { title, image } = recipe;

  return (
    <SlotCard>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>for</p>
        <h2>{slot.toUpperCase()}</h2>
      </div>
    </SlotCard>
  );
}

const SlotCard = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem auto;
  overflow: hidden;
  border: 1px solid transparent;
  border-radius: 16px;
  width: 90%;

  img {
    width: 100%;
    filter: blur(5px) grayscale(50%);
    border-radius: 16px;
  }

  div {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #000;
    width: 90%;

    h2,
    h3,
    p {
      margin: 0;
      text-align: center;
    }
  }
`;
