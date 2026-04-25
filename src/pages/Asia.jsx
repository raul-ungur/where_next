import { useNavigate } from "react-router-dom";
import freccia from "../assets/freccia.png";
import spiaggia from "../../public/spiaggia.png";
import montagna from "../../public/montagna.jpg";
import citta from "../assets/citta.jpg";

export default function Asia() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <img
        src={freccia}
        alt="Back to Continents"
        className="back-arrow"
        onClick={() => navigate("/continents")}
      />
      <h1>Asia</h1>
      <img
        src={spiaggia}
        onClick={() => navigate("/spiaggia_asia")}
        className="image_spiaggia"
      />
      <img
        src={montagna}
        onClick={() => navigate("/montagna_asia")}
        className="image_montagna"
      />
      <img
        src={citta}
        onClick={() => navigate("/citta_asia")}
        className="image_citta"
      />
    </div>
  );
}
