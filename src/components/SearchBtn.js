import { SearchIcon } from "./Icons";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export default function SearchBtn() {
  const { toggleSearchInput } = useContext(SearchContext);

  return (
    <button onClick={toggleSearchInput}>
      <SearchIcon />
    </button>
  );
}
