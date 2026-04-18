import { useNavigate } from "react-router-dom";

export default function America() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <img
        src="/freccia.png"
        alt="Back to Continents"
        className="back-arrow"
        onClick={() => navigate("/continents")}
      />
      <h1>America</h1>
      <img
        src="/spiaggia.png"
        onClick={() => navigate("/spiaggia_america")}
        className="image_spiaggia"
      />
      <img
        src="/montagna.jpg"
        onClick={() => navigate("/montagna_america")}
        className="image_montagna"
      />
      <img
        src="/citta.jpg"
        onClick={() => navigate("/citta_america")}
        className="image_citta"
      />
    </div>
  );
}
