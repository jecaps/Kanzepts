import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export default function SearchInput() {
  const { toggleSearchInput } = useContext(SearchContext);

  return (
    <>
      <input type="text" placeholder="Search Recipes" />
      <button type="button" onClick={toggleSearchInput}>
        Cancel
      </button>
    </>
  );
}
