import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();

  return (
    <>
      <h2>Something went wrong</h2>
      <button onClick={() => navigate("/")}>Go return to the Home Page</button>
    </>
  );
}
