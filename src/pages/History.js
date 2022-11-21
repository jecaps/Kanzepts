import { nanoid } from "nanoid";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { isPast, tellMonth } from "../helpers/Utils";
import HistoryItem from "../components/HistoryItem";
import AddToPlanBtn from "../components/AddToPlanBtn";
import styled from "styled-components";
import Modal from "../components/Modal";

export default function History() {
  const { mealSchedule, showModal } = useContext(RecipeContext);

  return (
    <>
      <HistoryTitle>Recipe History</HistoryTitle>
      {Object.keys(mealSchedule)
        .filter((mealDate) => isPast(mealDate))
        .sort()
        .reverse()
        .map((mealDate) => {
          const schedule = mealSchedule[mealDate];

          return (
            <HistoryList key={nanoid()}>
              <MealDate>
                <p>{tellMonth(mealDate)}</p>
                <p className="date">{mealDate.slice(8)}</p>
              </MealDate>

              <MealsList>
                {schedule?.breakfast && (
                  <Meal>
                    <AddToPlanBtn meal={schedule.breakfast} />
                    <HistoryItem schedule={schedule} mealtime={"breakfast"} />
                  </Meal>
                )}
                {schedule?.lunch && (
                  <Meal>
                    <AddToPlanBtn meal={schedule.lunch} />
                    <HistoryItem schedule={schedule} mealtime={"lunch"} />
                  </Meal>
                )}
                {schedule?.dinner && (
                  <Meal>
                    <AddToPlanBtn meal={schedule.dinner} />
                    <HistoryItem schedule={schedule} mealtime={"dinner"} />
                  </Meal>
                )}
                {schedule?.snacks && (
                  <Meal>
                    <AddToPlanBtn meal={schedule.snacks} />
                    <HistoryItem schedule={schedule} mealtime={"snacks"} />
                  </Meal>
                )}
              </MealsList>
            </HistoryList>
          );
        })}
      {showModal && <Modal />}
    </>
  );
}

const HistoryTitle = styled.h2`
  margin: 0;
  padding: 1rem;
  color: #273043;
`;

const HistoryList = styled.article`
  position: relative;
  padding: 0 0.5rem;
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: auto;

  :not(:last-child) {
    ul {
      border-bottom: 1px solid #30cfd0;
    }
  }
`;

const MealDate = styled.div`
  position: absolute;
  display: flex;
  top: 0.5rem;
  left: 0.75rem;
  gap: 0.25rem;
  font-weight: bold;

  p {
    margin: 0;
    font-size: 1rem;
    color: git @github.com:neuefische / web-event-slides-hh-web-22-5.git;
  }

  .date {
    color: #30cfd0;
  }
`;

const MealsList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 0.5rem;
  width: 100%;
  padding: 1.25rem 0;
  padding-top: 2rem;
  list-style: none;
  margin: 0;
`;

const Meal = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    width: 15%;
  }

  svg {
    fill: #273043;
    width: 1.5rem;
  }
`;
