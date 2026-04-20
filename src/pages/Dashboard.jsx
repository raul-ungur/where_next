import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [itemsTwo, setItemsTwo] = useState([]);
  const [itemsThree, setItemsThree] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const [showModalTwo, setShowModalTwo] = useState(false);
  const openModalTwo = () => setShowModalTwo(true);
  const closeModalTwo = () => setShowModalTwo(false);
  const [showModalThree, setShowModalThree] = useState(false);
  const openModalThree = () => setShowModalThree(true);
  const closeModalThree = () => setShowModalThree(false);

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
      getItems();
      getItemsTwo();
      getItemsThree();
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

  ///two

  async function getItemsTwo() {
    const { data: userData } = await supabase.auth.getUser();

    const { data, error } = await supabase
      .from("widgetstwo")
      .select("*")
      .eq("user_id", userData.user.id);

    if (error) {
      console.error(error.message);
    } else {
      setItemsTwo(data);
    }
  }

  async function handleDeleteAllTwo() {
    const { data: userData } = await supabase.auth.getUser();

    const { error } = await supabase
      .from("widgetstwo")
      .delete()
      .eq("user_id", userData.user.id);

    if (error) {
      console.error("Errore cancellazione:", error);
    } else {
      setItemsTwo([]);
      closeModalTwo();
    }
  }

  ////three

  async function getItemsThree() {
    const { data: userData } = await supabase.auth.getUser();

    const { data, error } = await supabase
      .from("widgetsthree")
      .select("*")
      .eq("user_id", userData.user.id);

    if (error) {
      console.error(error.message);
    } else {
      setItemsThree(data);
    }
  }

  async function handleDeleteAllThree() {
    const { data: userData } = await supabase.auth.getUser();

    const { error } = await supabase
      .from("widgetsthree")
      .delete()
      .eq("user_id", userData.user.id);

    if (error) {
      console.error("Errore cancellazione:", error);
    } else {
      setItemsThree([]);
      closeModalThree();
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
      {itemsTwo.map((itemsTwo) => (
        <div
          key={itemsTwo.id}
          style={{
            margin: "10px",
            padding: "10px",
          }}
        >
          {itemsTwo.type === "trip" && (
            <div>
              <img
                style={{ borderRadius: "15px" }}
                src={itemsTwo.content}
                alt="trip"
                width="200"
              />
              <button className="button_info" onClick={openModalTwo}>
                info
              </button>
            </div>
          )}
        </div>
      ))}
      {itemsThree.map((itemsThree) => (
        <div
          key={itemsThree.id}
          style={{
            margin: "10px",
            padding: "10px",
          }}
        >
          {itemsThree.type === "trip" && (
            <div>
              <img
                style={{ borderRadius: "15px" }}
                src={itemsThree.content}
                alt="trip"
                width="200"
              />
              <button className="button_info" onClick={openModalThree}>
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
          src="/create_trip.jpg"
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

            {itemsTwo.length > 0 && (
              <button className="button_modal" onClick={handleDeleteAllTwo}>
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
            <p>funziona anche il 3</p>

            {itemsThree.length > 0 && (
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
