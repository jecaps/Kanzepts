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
                <Month>{tellMonth(mealDate)}</Month>
                <Date>{mealDate.slice(8)}</Date>
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
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  width: 95%;
  margin: auto;

  :not(:last-child) {
    ul {
      border-bottom: 1px solid #ff9c08;
    }
  }
`;

const MealDate = styled.div`
  position: absolute;
  font-weight: bold;
  width: 10%;
`;

const Month = styled.p`
  margin: 0;
  font-size: 0.6rem;
  color: #7d1100;
`;

const Date = styled.p`
  margin: 0;
  font-size: 1.4rem;
  color: #ff9c08;
`;

const MealsList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 1rem;
  width: 100%;
  padding-left: 0;
  padding-bottom: 1rem;
  list-style: none;
`;

const Meal = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    width: 10%;
  }

  svg {
    fill: #db4200;
    width: 1.45rem;
  }
`;
