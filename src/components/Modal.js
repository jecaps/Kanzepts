import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RecipeContext } from "../context/RecipeContext";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

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

  function toggleModal() {
    setShowModal(!showModal);
  }

  function slotChecker(e) {
    const selectedSlot = e.target.value;
    // if (date in mealSchedule && selectedSlot in mealSchedule[date]) {
    //   alert(`${selectedSlot} has already been added for this day.`);
    //   e.target.value = "";
    // } else {
    setSlot(selectedSlot);
    // }
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
      <div className="modal__overlay" onClick={toggleModal}></div>
      <form
        className="form"
        onSubmit={
          location.pathname === "/plan"
            ? rescheduleHandler
            : scheduleMealHandler
        }
      >
        <h3 className="form__title">Schedule Recipe</h3>

        <div className="form__input-container">
          <p className="form__label">Your Recipe</p>
          <p className="form__recipe">{meal.title}</p>
        </div>

        <div className="form__input-container">
          <label className="form__label" htmlFor="date">
            Date
          </label>
          <input
            className="form__input"
            type="date"
            id="date"
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="form__input-container">
          <label className="form__label" htmlFor="slots">
            Slot
          </label>
          <select
            className="form__input"
            name="slots"
            id="slots"
            onChange={slotChecker}
            required
          >
            <option value="" hidden>
              Choose Slot
            </option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snacks">Snacks</option>
          </select>
        </div>

        <div className="form__buttons">
          <button className="form__button confirm" type="submit">
            {/* {Object.keys(toReschedule).length ? "Reschedule" :  */}
            Confirm
            {/* } */}
          </button>
          <button className="form__button cancel" onClick={toggleModal}>
            Cancel
          </button>
        </div>
      </form>
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
  color: #7d1100;

  .modal__overlay {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 18rem;
    height: 18rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: auto;
    background: #fff;
    border-radius: 1rem;

    .form__title {
      margin: 0;
    }

    .form__input-container {
      display: flex;
      flex-direction: column;
      align-items: center;

      .form__input,
      .form__recipe {
        width: 100%;
        background-color: #f9f9f9;
        border: 1px solid #b1c1c0;
        border-radius: 0.25rem;
        text-align: left;
        padding: 0.125rem;
        font-size: 1rem;
        color: #333;
      }

      .form__label {
        font-weight: 600;
      }

      .form__label,
      .form__recipe {
        margin: 0;
      }
    }

    .form__buttons {
      display: flex;
      justify-content: space-evenly;

      .form__button {
        all: unset;
        width: 45%;
        padding: 0.5rem 0;
        border-radius: 0.25rem;
        font-weight: 600;
      }

      .confirm {
        background-color: #52aa5e;
        color: #fff;
      }

      .cancel {
        color: #c20114;
        border: 1px solid #c20114;
      }
    }
  }
`;
