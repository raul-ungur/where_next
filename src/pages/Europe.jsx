import { useNavigate } from "react-router-dom";

export default function Europe() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <img
        src="/freccia.png"
        alt="Back to Continents"
        className="back-arrow"
        onClick={() => navigate("/continents")}
      />

      <h1>Europe</h1>
      <img
        src="/spiaggia.png"
        onClick={() => navigate("/spiaggia_europe")}
        className="image_spiaggia"
      />
      <img
        src="/montagna.jpg"
        onClick={() => navigate("/montagna_europe")}
        className="image_montagna"
      />
      <img
        src="/citta.jpg"
        onClick={() => navigate("/citta_europe")}
        className="image_citta"
      />
    </div>
  );
}
