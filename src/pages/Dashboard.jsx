import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { useNavigate } from "react-router-dom";
import create_trip from "../assets/create_trip.jpg";
import myrtle from "../../public/myrtle_beach2.jpg";
import miami from "../../public/miami_beach2.jpg";
import sanfrancisco from "../../public/sanfrancisco_beach2.jpeg";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [itemsTwo, setItemsTwo] = useState([]);
  const [itemsThree, setItemsThree] = useState([]);
  const [itemsMontagnaAmerica1, setItemsMontagnaAmerica1] = useState([]);
  const [itemsMontagnaAmerica2, setItemsMontagnaAmerica2] = useState([]);
  const [itemsMontagnaAmerica3, setItemsMontagnaAmerica3] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const [showModalTwo, setShowModalTwo] = useState(false);
  const openModalTwo = () => setShowModalTwo(true);
  const closeModalTwo = () => setShowModalTwo(false);
  const [showModalThree, setShowModalThree] = useState(false);
  const openModalThree = () => setShowModalThree(true);
  const closeModalThree = () => setShowModalThree(false);
  const [showModalMontagnaAmerica1, setShowModalMontagnaAmerica1] =
    useState(false);
  const openModalMontagnaAmerica1 = () => setShowModalMontagnaAmerica1(true);
  const closeModalMontagnaAmerica1 = () => setShowModalMontagnaAmerica1(false);
  const [showModalMontagnaAmerica2, setShowModalMontagnaAmerica2] =
    useState(false);
  const openModalMontagnaAmerica2 = () => setShowModalMontagnaAmerica2(true);
  const closeModalMontagnaAmerica2 = () => setShowModalMontagnaAmerica2(false);
  const [showModalMontagnaAmerica3, setShowModalMontagnaAmerica3] =
    useState(false);
  const openModalMontagnaAmerica3 = () => setShowModalMontagnaAmerica3(true);
  const closeModalMontagnaAmerica3 = () => setShowModalMontagnaAmerica3(false);

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
      getItemsMontagnaAmerica1();
      getItemsMontagnaAmerica2();
      getItemsMontagnaAmerica3();
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

  ///montagna_america1
  async function getItemsMontagnaAmerica1() {
    const { data: userData } = await supabase.auth.getUser();

    const { data, error } = await supabase
      .from("widgets_montagna_america1")
      .select("*")
      .eq("user_id", userData.user.id);

    if (error) {
      console.error(error.message);
    } else {
      setItemsMontagnaAmerica1(data);
    }
  }

  async function handleDeleteAllMontagnaAmerica1() {
    const { data: userData } = await supabase.auth.getUser();

    const { error } = await supabase
      .from("widgets_montagna_america1")
      .delete()
      .eq("user_id", userData.user.id);

    if (error) {
      console.error("Errore cancellazione:", error);
    } else {
      setItemsMontagnaAmerica1([]);
      closeModalMontagnaAmerica1();
    }
  }

  ///montagna_america2
  async function getItemsMontagnaAmerica2() {
    const { data: userData } = await supabase.auth.getUser();

    const { data, error } = await supabase
      .from("widgets_montagna_america2")
      .select("*")
      .eq("user_id", userData.user.id);

    if (error) {
      console.error(error.message);
    } else {
      setItemsMontagnaAmerica2(data);
    }
  }

  async function handleDeleteAllMontagnaAmerica2() {
    const { data: userData } = await supabase.auth.getUser();

    const { error } = await supabase
      .from("widgets_montagna_america2")
      .delete()
      .eq("user_id", userData.user.id);

    if (error) {
      console.error("Errore cancellazione:", error);
    } else {
      setItemsMontagnaAmerica2([]);
      closeModalMontagnaAmerica2();
    }
  }

  ///montagna_america3
  async function getItemsMontagnaAmerica3() {
    const { data: userData } = await supabase.auth.getUser();

    const { data, error } = await supabase
      .from("widgets_montagna_america3")
      .select("*")
      .eq("user_id", userData.user.id);

    if (error) {
      console.error(error.message);
    } else {
      setItemsMontagnaAmerica3(data);
    }
  }

  async function handleDeleteAllMontagnaAmerica3() {
    const { data: userData } = await supabase.auth.getUser();

    const { error } = await supabase
      .from("widgets_montagna_america3")
      .delete()
      .eq("user_id", userData.user.id);

    if (error) {
      console.error("Errore cancellazione:", error);
    } else {
      setItemsMontagnaAmerica3([]);
      closeModalMontagnaAmerica3();
    }
  }

  return (
    <>
      <header>
        <h1>Benvenuto {username ?? user?.email}</h1>
      </header>
      <div className="container">
        <div className="scroll_container">
          {items.map((items) => (
            <div
              className="card"
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
                    src={myrtle}
                    alt="trip"
                    width="310"
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
              className="card"
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
                    src={miami}
                    alt="trip"
                    width="310"
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
              className="card"
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
                    src={sanfrancisco}
                    alt="trip"
                    width="310"
                  />
                  <button className="button_info" onClick={openModalThree}>
                    info
                  </button>
                </div>
              )}
            </div>
          ))}
          {itemsMontagnaAmerica1.map((itemsMontagnaAmerica1) => (
            <div
              className="card"
              key={itemsMontagnaAmerica1.id}
              style={{
                margin: "10px",
                padding: "10px",
              }}
            >
              {itemsMontagnaAmerica1.type === "trip" && (
                <div>
                  <img
                    style={{ borderRadius: "15px" }}
                    src={myrtle}
                    alt="trip"
                    width="310"
                  />
                  <button
                    className="button_info"
                    onClick={openModalMontagnaAmerica1}
                  >
                    info
                  </button>
                </div>
              )}
            </div>
          ))}
          {itemsMontagnaAmerica2.map((itemsMontagnaAmerica2) => (
            <div
              className="card"
              key={itemsMontagnaAmerica2.id}
              style={{
                margin: "10px",
                padding: "10px",
              }}
            >
              {itemsMontagnaAmerica2.type === "trip" && (
                <div>
                  <img
                    style={{ borderRadius: "15px" }}
                    src={myrtle}
                    alt="trip"
                    width="310"
                  />
                  <button
                    className="button_info"
                    onClick={openModalMontagnaAmerica2}
                  >
                    info
                  </button>
                </div>
              )}
            </div>
          ))}
          {itemsMontagnaAmerica3.map((itemsMontagnaAmerica3) => (
            <div
              className="card"
              key={itemsMontagnaAmerica3.id}
              style={{
                margin: "10px",
                padding: "10px",
              }}
            >
              {itemsMontagnaAmerica3.type === "trip" && (
                <div>
                  <img
                    style={{ borderRadius: "15px" }}
                    src={myrtle}
                    alt="trip"
                    width="310"
                  />
                  <button
                    className="button_info"
                    onClick={openModalMontagnaAmerica3}
                  >
                    info
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {message && (
          <div style={{ marginTop: 12, color: "#333" }}>{message}</div>
        )}
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
                Scopri il fascino di questa spiaggia dorata: onde delicate,
                brezza marina e un momento di relax perfetto per ricaricare
                l'anima. Clicca fuori dal popup o sulla X per chiudere.
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
        {showModalMontagnaAmerica1 && (
          <div className="modal-overlay" onClick={closeModalMontagnaAmerica1}>
            <div
              className="modal-card"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={closeModalMontagnaAmerica1}
                aria-label="Chiudi popup"
              >
                ×
              </button>
              <h2>Benvenuto a Myrtle Beach</h2>
              <p>
                Scopri il fascino di questa spiaggia dorata: onde delicate,
                brezza marina e un momento di relax perfetto per ricaricare
                l'anima. Clicca fuori dal popup o sulla X per chiudere.
              </p>

              {itemsMontagnaAmerica1.length > 0 && (
                <button
                  className="button_modal"
                  onClick={handleDeleteAllMontagnaAmerica1}
                >
                  Elimina tutto
                </button>
              )}
            </div>
          </div>
        )}
        {showModalMontagnaAmerica2 && (
          <div className="modal-overlay" onClick={closeModalMontagnaAmerica2}>
            <div
              className="modal-card"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={closeModalMontagnaAmerica2}
                aria-label="Chiudi popup"
              >
                ×
              </button>
              <h2>Benvenuto a Myrtle Beach</h2>
              <p>
                Scopri il fascino di questa spiaggia dorata: onde delicate,
                brezza marina e un momento di relax perfetto per ricaricare
                l'anima. Clicca fuori dal popup o sulla X per chiudere.
              </p>

              {itemsMontagnaAmerica1.length > 0 && (
                <button
                  className="button_modal"
                  onClick={handleDeleteAllMontagnaAmerica2}
                >
                  Elimina tutto
                </button>
              )}
            </div>
          </div>
        )}
        {showModalMontagnaAmerica3 && (
          <div className="modal-overlay" onClick={closeModalMontagnaAmerica3}>
            <div
              className="modal-card"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={closeModalMontagnaAmerica3}
                aria-label="Chiudi popup"
              >
                ×
              </button>
              <h2>Benvenuto a Myrtle Beach</h2>
              <p>
                Scopri il fascino di questa spiaggia dorata: onde delicate,
                brezza marina e un momento di relax perfetto per ricaricare
                l'anima. Clicca fuori dal popup o sulla X per chiudere.
              </p>

              {itemsMontagnaAmerica1.length > 0 && (
                <button
                  className="button_modal"
                  onClick={handleDeleteAllMontagnaAmerica3}
                >
                  Elimina tutto
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
