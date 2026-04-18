import { useNavigate } from "react-router-dom";

export default function Continents() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <img
        src="/freccia.png"
        alt="Back to Home"
        className="back-arrow"
        onClick={() => navigate("/dashboard")}
      />
      <div className="continent-images">
        <img
          src="/america.png"
          alt="America"
          className="continent-image"
          onClick={() => navigate("/america")}
        />
        <img
          src="/europa.png"
          alt="Europe"
          className="continent-image"
          onClick={() => navigate("/europe")}
        />
        <img
          src="/asia.png"
          alt="Asia"
          className="continent-image"
          onClick={() => navigate("/asia")}
        />
      </div>
    </div>
  );
}
