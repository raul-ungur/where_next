import { useState } from "react";
import { supabase } from "../../services/supabase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function SpiaggiaAmerica() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const navigate = useNavigate();
  const [widgets, setWidgets] = useState([]);

  async function handleAddTrip() {
    const { data: userData, error: userError } = await supabase.auth.getUser();

    if (userError || !userData?.user) {
      console.error("Utente non autenticato");
      return;
    }

    const { data: existing, error: checkError } = await supabase
      .from("widgets")
      .select("*")
      .eq("user_id", userData.user.id)
      .eq("type", "trip");

    if (checkError) {
      console.error("Errore controllo:", checkError);
      return;
    }

    if (existing.length > 0) {
      alert("Hai già aggiunto questo viaggio!");
      return;
    }

    const { error } = await supabase.from("widgets").insert([
      {
        user_id: userData.user.id,
        type: "trip",
        content: "/citta.jpg",
        visible: true,
      },
    ]);

    if (error) {
      console.error(error);
    } else {
      alert("Aggiunto!");
    }
  }

  useEffect(() => {
    async function fetchWidgets() {
      const { data, error } = await supabase.from("widgets").select("*");

      if (error) {
        console.error("Errore fetch:", error);
      } else {
        setWidgets(data);
      }
    }

    fetchWidgets();
  }, []);

  async function handleDeleteAll() {
    const { data: userData } = await supabase.auth.getUser();

    const { error } = await supabase
      .from("widgets")
      .delete()
      .eq("user_id", userData.user.id);

    if (error) {
      console.error("Errore cancellazione:", error);
    } else {
      setWidgets([]);
    }
  }

  return (
    <div className="container">
      <div className="spiaggia-content">
        <h1>Spiaggia America</h1>
        <div className="spiaggia-images">
          <img
            src="./myrtle.jpg"
            alt="Myrtle Beach"
            className="myrtle_img"
            onClick={openModal}
          />
          <img
            src="./myrtle.jpg"
            alt="Myrtle Beach"
            className="myrtle_img"
            onClick={openModal}
          />
          <img
            src="./myrtle.jpg"
            alt="Myrtle Beach"
            className="myrtle_img"
            onClick={openModal}
          />
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-card"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={closeModal}
              aria-label="Chiudi popup"
            >
              ×
            </button>
            <h2>Benvenuto a Myrtle Beach</h2>
            <p>
              Scopri il fascino di questa spiaggia dorata: onde delicate, brezza
              marina e un momento di relax perfetto per ricaricare l'anima.
              Clicca fuori dal popup o sulla X per chiudere.
            </p>
            <button onClick={handleAddTrip} className="button_modal">
              add trip
            </button>
            <button
              onClick={() => navigate("/dashboard")}
              className="button_modal"
            >
              view dashboard
            </button>
            {widgets.length > 0 && (
              <button className="button_modal" onClick={handleDeleteAll}>
                Elimina tutto
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
