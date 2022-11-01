import styled from "styled-components";

export default function MealSlotCard({ recipe, slot, sched }) {
  const { title, image } = recipe;

  return (
    <SlotCard>
      <img src={image} alt={title} />
      <div>
        <h5>{title}</h5>
        <p>for</p>
        <h4>{slot.toUpperCase()}</h4>
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
  border-radius: 8px;
  width: 90%;

  img {
    width: 100%;
    filter: blur(3px) grayscale(40%);
    border-radius: 8px;
  }

  div {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #000;
    width: 90%;
    height: 100%;

    h5,
    h4,
    p {
      margin: 0;
    }
  }
`;
