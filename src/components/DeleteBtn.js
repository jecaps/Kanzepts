import { DeleteIcon } from "./Icons";

export default function DeleteBtn({ clickHandler }) {
  return (
    <button className="delete" onClick={clickHandler}>
      <DeleteIcon />
    </button>
  );
}
