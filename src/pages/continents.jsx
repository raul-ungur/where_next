import { useNavigate } from "react-router-dom";
import freccia from "../assets/freccia.png";
import america from "../assets/america.png";
import europe from "../assets/europa.png";
import asia from "../assets/asia.png";
import thirtythree from "../../public/thirtythree.png";

export default function Continents() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <img
        src={freccia}
        alt="Back to Home"
        className="back-arrow"
        onClick={() => navigate("/dashboard")}
      />
      <img src={thirtythree} alt="" className="status" />
      <div className="continent-images">
        <img
          src={america}
          alt="America"
          className="continent-image"
          onClick={() => navigate("/america")}
        />
        <img
          src={europe}
          alt="Europe"
          className="continent-image"
          onClick={() => navigate("/europe")}
        />
        <img
          src={asia}
          alt="Asia"
          className="continent-image"
          onClick={() => navigate("/asia")}
        />
      </div>
    </div>
  );
}
