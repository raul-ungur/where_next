import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { useNavigate } from "react-router-dom";
import create_trip from "../assets/create_trip.jpg";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  useEffect(() => {
    async function initializeDashboard() {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Errore recupero sessione utente:", error.message);
        setMessage("Impossibile recuperare la sessione utente.");
        setLoading(false);
        return;
      }

      if (!data?.session?.user) {
        setMessage("Utente non autenticato. Accedi e riprova.");
        setLoading(false);
        return;
      }

      setUser(data.session.user);
      setLoading(false);
    }

    initializeDashboard();
  }, []);
  useEffect(() => {
    if (user) {
      getItems(); // 👈 AGGIUNGI QUESTA RIGA
    }
  }, [user]);

  const username = user?.user_metadata?.username;

  if (loading) {
    return <div>Caricamento...</div>;
  }

  if (!user) {
    return <div>Utente non autenticato</div>;
  }

  async function getItems() {
    const { data: userData } = await supabase.auth.getUser();

    const { data, error } = await supabase
      .from("widgets")
      .select("*")
      .eq("user_id", userData.user.id);

    if (error) {
      console.error(error.message);
    } else {
      setItems(data);
    }
  }

  async function handleDeleteAll() {
    const { data: userData } = await supabase.auth.getUser();

    const { error } = await supabase
      .from("widgets")
      .delete()
      .eq("user_id", userData.user.id);

    if (error) {
      console.error("Errore cancellazione:", error);
    } else {
      setItems([]);
      closeModal();
    }
  }

  return (
    <div className="container">
      {items.map((items) => (
        <div
          key={items.id}
          style={{
            margin: "10px",
            padding: "10px",
          }}
        >
          {items.type === "trip" && (
            <div>
              <img
                style={{ borderRadius: "15px" }}
                src={items.content}
                alt="trip"
                width="200"
              />
              <button className="button_info" onClick={openModal}>
                info
              </button>
            </div>
          )}
        </div>
      ))}
      <h1 className="title">Benvenuto {username ?? user.email}</h1>
      {message && <div style={{ marginTop: 12, color: "#333" }}>{message}</div>}
      <div>
        <h2>Add trip :</h2>
        <img
          onClick={() => navigate("/continents")}
          src={create_trip}
          className="create_trip"
        />
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

            {items.length > 0 && (
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
