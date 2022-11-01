import styled from "styled-components";

export default function MealSlotCard({ recipe, slot, sched }) {
  const { title, image } = recipe;
  // console.log(recipe);
  // console.log(slot);
  // console.log(sched);

  return (
    <SlotCard image={image}>
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

  img {
    width: 90%;
    border-radius: 8px;
    filter: blur(3px);
  }

  div {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    color: #fcfcfc;
    width: 90%;
    height: 100%;
    border-radius: 8px;

    h5,
    h4,
    p {
      margin: 0;
    }
  }
`;
