import { nanoid } from "nanoid";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { isPast, tellMonth } from "../helpers/Utils";
import HistoryItem from "../components/HistoryItem";
import styled from "styled-components";

export default function History() {
  const { mealSchedule } = useContext(RecipeContext);

  return (
    <>
      <HistoryTitle>RECIPE HISTORY</HistoryTitle>
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
                  <HistoryItem schedule={schedule} mealtime={"breakfast"} />
                )}
                {schedule?.lunch && (
                  <HistoryItem schedule={schedule} mealtime={"lunch"} />
                )}
                {schedule?.dinner && (
                  <HistoryItem schedule={schedule} mealtime={"dinner"} />
                )}
                {schedule?.snacks && (
                  <HistoryItem schedule={schedule} mealtime={"snacks"} />
                )}
              </div>
            </HistoryList>
          );
        })}
    </>
  );
}

const HistoryTitle = styled.h3`
  margin: 0.5rem auto;
  padding: 1rem;
  color: #7d1100;
  border-bottom: 3px double#7d1100;
  width: 90%;
`;

const HistoryList = styled.article`
  padding: 1.5rem 0.5rem;
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  z-index: 10;
  width: 95%;
  margin: auto;

  :not(:last-child) {
    border-bottom: 1px solid rgba(255, 156, 8, 0.5);
  }

  .history__meal-date {
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
    width: 85%;
  }
`;
