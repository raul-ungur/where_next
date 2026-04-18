import { useState } from "react";
import { useNavigate } from "react-router-dom";
import world from "../assets/world.png";

export default function Home() {
  const navigate = useNavigate();
  const [zoom, setZoom] = useState(false);

  function handleZoom() {
    setZoom(true);

    setTimeout(() => {
      navigate("/login");
    }, 1500); // Adjust the delay as needed
  }

  return (
    <div className="container">
      <div className="globe-container" onClick={handleZoom}>
        <div className={`globe-wrapper ${zoom ? "zoom" : ""}`}>
          <img src={world} className="globe" />
        </div>

        <img
          src="/text.png"
          className={`text_wherenext ${zoom ? "hide" : ""}`}
        />
      </div>
    </div>
  );
}
