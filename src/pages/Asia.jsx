import { useNavigate } from "react-router-dom";

export default function Asia() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <img
        src="/freccia.png"
        alt="Back to Continents"
        className="back-arrow"
        onClick={() => navigate("/continents")}
      />
      <h1>Asia</h1>
      <img
        src="/spiaggia.png"
        onClick={() => navigate("/spiaggia_asia")}
        className="image_spiaggia"
      />
      <img
        src="/montagna.jpg"
        onClick={() => navigate("/montagna_asia")}
        className="image_montagna"
      />
      <img
        src="/citta.jpg"
        onClick={() => navigate("/citta_asia")}
        className="image_citta"
      />
    </div>
  );
}
