import { useNavigate } from "react-router-dom";

export default function ExempleTest() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>is an example of a page we would ask you to go in</h1>
      <button onClick={() => navigate("/america")} className="button_modal">
        Go to America
      </button>
    </div>
  );
}
