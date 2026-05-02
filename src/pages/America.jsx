import { useNavigate } from "react-router-dom";
import freccia from "../assets/freccia.png";
import spiaggia from "../../public/spiaggia.png";
import montagna from "../../public/montagna.jpg";
import citta from "../assets/citta.jpg";
import sixtysix from "../../public/sixtysix.png";

export default function America() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <img
        src={freccia}
        alt="Back to Continents"
        className="back-arrow"
        onClick={() => navigate("/continents")}
      />
      <img src={sixtysix} alt="" className="status" />

      <img
        src={spiaggia}
        onClick={() => navigate("/spiaggia_america")}
        className="image_spiaggia"
      />
      <img
        src={montagna}
        onClick={() => navigate("/montagna_america")}
        className="image_montagna"
      />
      <img
        src={citta}
        onClick={() => navigate("/citta_america")}
        className="image_citta"
      />
    </div>
  );
}
