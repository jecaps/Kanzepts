import { CalendarIcon } from "./Icons";

export default function EditBtn({ clickHandler }) {
  return (
    <button onClick={clickHandler} className="edit">
      <CalendarIcon />
    </button>
  );
}
