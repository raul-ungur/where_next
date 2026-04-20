import { useState } from "react";
import { supabase } from "../../services/supabase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import citta from "../../assets/citta.jpg";

export default function SpiaggiaAmerica() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const [showModalTwo, setShowModalTwo] = useState(false);
  const openModalTwo = () => setShowModalTwo(true);
  const closeModalTwo = () => setShowModalTwo(false);
  const [showModalThree, setShowModalThree] = useState(false);
  const openModalThree = () => setShowModalThree(true);
  const closeModalThree = () => setShowModalThree(false);
  const navigate = useNavigate();
  const [widgets, setWidgets] = useState([]);
  const [widgetstwo, setWidgetsTwo] = useState([]);
  const [widgetsthree, setWidgetsThree] = useState([]);

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

  /////two

  async function handleAddTripTwo() {
    const { data: userData, error: userError } = await supabase.auth.getUser();

    if (userError || !userData?.user) {
      console.error("Utente non autenticato");
      return;
    }

    const { data: existing, error: checkError } = await supabase
      .from("widgetstwo")
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

    const { error } = await supabase.from("widgetstwo").insert([
      {
        user_id: userData.user.id,
        type: "trip",
        content: "/montagna.jpg",
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
    async function fetchWidgetsTwo() {
      const { data, error } = await supabase.from("widgetstwo").select("*");

      if (error) {
        console.error("Errore fetch:", error);
      } else {
        setWidgetsTwo(data);
      }
    }

    fetchWidgetsTwo();
  }, []);

  async function handleDeleteAllTwo() {
    const { data: userData } = await supabase.auth.getUser();

    const { error } = await supabase
      .from("widgetstwo")
      .delete()
      .eq("user_id", userData.user.id);

    if (error) {
      console.error("Errore cancellazione:", error);
    } else {
      setWidgetsTwo([]);
    }
  }

  /////three

  async function handleAddTripThree() {
    const { data: userData, error: userError } = await supabase.auth.getUser();

    if (userError || !userData?.user) {
      console.error("Utente non autenticato");
      return;
    }

    const { data: existing, error: checkError } = await supabase
      .from("widgetsthree")
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

    const { error } = await supabase.from("widgetsthree").insert([
      {
        user_id: userData.user.id,
        type: "trip",
        content: "/spiaggia.png",
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
    async function fetchWidgetsThree() {
      const { data, error } = await supabase.from("widgetsthree").select("*");

      if (error) {
        console.error("Errore fetch:", error);
      } else {
        setWidgetsThree(data);
      }
    }

    fetchWidgetsThree();
  }, []);

  async function handleDeleteAllThree() {
    const { data: userData } = await supabase.auth.getUser();

    const { error } = await supabase
      .from("widgetsthree")
      .delete()
      .eq("user_id", userData.user.id);

    if (error) {
      console.error("Errore cancellazione:", error);
    } else {
      setWidgetsThree([]);
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
            onClick={openModalTwo}
          />
          <img
            src="./myrtle.jpg"
            alt="Myrtle Beach"
            className="myrtle_img"
            onClick={openModalThree}
          />
        </div>
      </div>
      {showModalTwo && (
        <div className="modal-overlay" onClick={closeModalTwo}>
          <div
            className="modal-card"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={closeModalTwo}
              aria-label="Chiudi popup"
            >
              ×
            </button>
            <h2>Benvenuto a Myrtle Beach</h2>
            <p>funziona</p>
            <button onClick={handleAddTripTwo} className="button_modal">
              add trip
            </button>
            <button
              onClick={() => navigate("/dashboard")}
              className="button_modal"
            >
              view dashboard
            </button>
            {widgetstwo.length > 0 && (
              <button className="button_modal" onClick={handleDeleteAllTwo}>
                Elimina tutto
              </button>
            )}
          </div>
        </div>
      )}

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

      {showModalThree && (
        <div className="modal-overlay" onClick={closeModalThree}>
          <div
            className="modal-card"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={closeModalThree}
              aria-label="Chiudi popup"
            >
              ×
            </button>
            <h2>Benvenuto a Myrtle Beach</h2>
            <p>funziona il tre</p>
            <button onClick={handleAddTripThree} className="button_modal">
              add trip
            </button>
            <button
              onClick={() => navigate("/dashboard")}
              className="button_modal"
            >
              view dashboard
            </button>
            {widgetsthree.length > 0 && (
              <button className="button_modal" onClick={handleDeleteAllThree}>
                Elimina tutto
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
