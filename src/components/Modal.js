import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RecipeContext } from "../context/RecipeContext";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import DateInput from "./DateInput";
import DefaulImage from "../image/default-placeholder.png";

export default function Modal() {
  const {
    mealSchedule,
    setMealSchedule,
    meal,
    setMeal,
    showModal,
    setShowModal,
    toReschedule,
    setToReschedule,
  } = useContext(RecipeContext);
  const { mealDate, mealtime } = toReschedule;
  const [slot, setSlot] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  function toggleModal(e) {
    e.preventDefault();
    setShowModal(!showModal);
  }

  function slotChecker(e) {
    const selectedSlot = e.target.value;
    if (date in mealSchedule && selectedSlot in mealSchedule[date]) {
      alert(`${selectedSlot} has already been added for this day.`);
      e.target.value = "";
    } else {
      setSlot(selectedSlot);
    }
  }

  function scheduleMealHandler(e) {
    e.preventDefault();

    if (!Object.keys(meal).length) {
      alert("Please select a recipe you want to schedule.");
    } else {
      !mealSchedule.hasOwnProperty(date)
        ? setMealSchedule({ ...mealSchedule, [date]: { [slot]: meal } })
        : setMealSchedule({
            ...mealSchedule,
            [date]: { ...mealSchedule[date], [slot]: meal },
          });
      navigate("/plan");
      setMeal({});
      setShowModal(false);
      e.target.reset();
    }
  }

  function rescheduleHandler(e) {
    e.preventDefault();
    const newMealSchedule = { ...mealSchedule };

    // Checks if a date has only one meal
    Object.values(newMealSchedule[mealDate]).length === 1
      ? delete newMealSchedule[mealDate]
      : delete newMealSchedule[mealDate][mealtime];

    !newMealSchedule.hasOwnProperty(date)
      ? setMealSchedule({ ...newMealSchedule, [date]: { [slot]: meal } })
      : setMealSchedule({
          ...newMealSchedule,
          [date]: { ...newMealSchedule[date], [slot]: meal },
        });

    navigate("/plan");
    setToReschedule({});
    setMeal({});
    setShowModal(false);
    e.target.reset();
  }

  return (
    <ModalContainer>
      <Overlay onClick={toggleModal}></Overlay>

      <Form
        onSubmit={
          location.pathname === "/plan"
            ? rescheduleHandler
            : scheduleMealHandler
        }
      >
        <Title>Add To Plan</Title>
        <Recipe>{meal.title}</Recipe>

        <Input>
          <DateInput setDate={setDate} />

          <div>
            <select name="slots" id="slots" onChange={slotChecker} required>
              <option value="" hidden>
                Choose Slot
              </option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="snacks">Snacks</option>
            </select>
          </div>
        </Input>

        <Image image={meal.image ?? DefaulImage}>
          <div></div>
        </Image>

        <Buttons>
          <button className="cancel" onClick={toggleModal}>
            Cancel
          </button>
          <button className="confirm" type="submit">
            {location.pathname === "/plan" ? "Reschedule" : "Confirm"}
          </button>
        </Buttons>
      </Form>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background-color: rgba(255, 236, 210, 0.6);
  backdrop-filter: blur(5px);
`;

const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 19rem;
  height: 21rem;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: auto;
  background: #fff;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.75rem;
  color: #273043;
`;

const Title = styled.h3`
  margin: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
`;

const Recipe = styled.h4`
  font-family: "Baloo Chettan 2", cursive;
  margin: 0;
`;

const Image = styled.div`
  div {
    background-image: url(${({ image }) => image});
    border-radius: 0.5rem;
    background-position: center;
    width: 15rem;
    height: 7rem;
    margin: auto;
  }
`;

const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    display: flex;
    flex-direction: column;
    width: 45%;
  }

  input,
  select {
    font-family: "Baloo Chettan 2", cursive;
    padding: 0.125rem;
    font-size: 1rem;
    color: #333;
    background: #faf9f8;
    border: 1px solid #c7c6c6;
    border-radius: 4px;
  }

  label {
    font-family: "Baloo Chettan 2", cursive;
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-family: "Baloo Chettan 2", cursive;

  button {
    all: unset;
    width: 45%;
    border-radius: 0.25rem;
    font-weight: 600;
    padding: 0.5rem 0;
    margin: 0.25rem 0;
  }

  .confirm {
    background: #50ba6e;
    border-radius: 24px;
    color: #ffffff;
  }

  .cancel {
    background: #cccccc;
    border-radius: 24px;
    color: #6b6a6a;
  }
`;
