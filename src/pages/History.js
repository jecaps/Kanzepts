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
              <div className="history__meal-date">
                <p className="history__month">{tellMonth(mealDate)}</p>
                <p className="history__date">{mealDate.slice(8)}</p>
              </div>

              <div className="history__meals">
                {schedule?.breakfast && (
                  <div className="history__meal">
                    <AddToPlanBtn meal={schedule.breakfast} />
                    <HistoryItem schedule={schedule} mealtime={"breakfast"} />
                  </div>
                )}
                {schedule?.lunch && (
                  <div className="history__meal">
                    <AddToPlanBtn meal={schedule.lunch} />
                    <HistoryItem schedule={schedule} mealtime={"lunch"} />
                  </div>
                )}
                {schedule?.dinner && (
                  <div className="history__meal">
                    <AddToPlanBtn meal={schedule.dinner} />
                    <HistoryItem schedule={schedule} mealtime={"dinner"} />
                  </div>
                )}
                {schedule?.snacks && (
                  <div className="history__meal">
                    <AddToPlanBtn meal={schedule.snacks} />
                    <HistoryItem schedule={schedule} mealtime={"snacks"} />
                  </div>
                )}
              </div>
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
  color: #7d1100;
`;

const HistoryList = styled.article`
  position: relative;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  width: 95%;
  margin: auto;

  .history__meal-date {
    position: absolute;
    font-weight: bold;
    width: 10%;

    .history__month {
      font-size: 0.6rem;
      color: #7d1100;
    }

    .history__date {
      font-size: 1.4rem;
      color: #ff9c08;
    }

    .history__month,
    .history__date {
      margin: 0;
    }
  }

  .history__meals {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 1rem;
    width: 100%;
    padding-bottom: 1rem;

    .history__meal {
      display: flex;
      justify-content: space-between;

      .add-btn {
        width: 10%;
      }

      svg {
        fill: #db4200;
        width: 1.45rem;
      }
    }
  }

  :not(:last-child) {
    .history__meals {
      border-bottom: 1px solid #ff9c08;
    }
  }
`;
