import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { useNavigate } from "react-router-dom";
import create_trip from "../assets/create_trip.jpg";
import myrtle from "../../public/myrtle_beach2.jpg";
import miami from "../../public/miami_beach2.jpg";
import sanfrancisco from "../../public/sanfrancisco_beach2.jpeg";
import appalachian from "../../public/appalachian_mountains2.jpg";
import rushmore from "../../public/mount_rushmore2.jpg";
import sierra from "../../public/sierra_nevada2.jpg";
import newyork from "../../public/new_york2.jpg";
import washington from "../../public/washington_dc2.jpg";
import dallas from "../../public/dallas2.png";

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
  const [itemsCittaAmerica1, setItemsCittaAmerica1] = useState([]);
  const [itemsCittaAmerica2, setItemsCittaAmerica2] = useState([]);
  const [itemsCittaAmerica3, setItemsCittaAmerica3] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const [showModalTwo, setShowModalTwo] = useState(false);
  const openModalTwo = () => setShowModalTwo(true);
  const closeModalTwo = () => setShowModalTwo(false);
  const [showModalThree, setShowModalThree] = useState(false);
  const openModalThree = () => setShowModalThree(true);
  const closeModalThree = () => setShowModalThree(false);
  const [showModalCittaAmerica1, setShowModalCittaAmerica1] = useState(false);
  const openModalCittaAmerica1 = () => setShowModalCittaAmerica1(true);
  const closeModalCittaAmerica1 = () => setShowModalCittaAmerica1(false);
  const [showModalCittaAmerica2, setShowModalCittaAmerica2] = useState(false);
  const openModalCittaAmerica2 = () => setShowModalCittaAmerica2(true);
  const closeModalCittaAmerica2 = () => setShowModalCittaAmerica2(false);
  const [showModalCittaAmerica3, setShowModalCittaAmerica3] = useState(false);
  const openModalCittaAmerica3 = () => setShowModalCittaAmerica3(true);
  const closeModalCittaAmerica3 = () => setShowModalCittaAmerica3(false);
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
      getItemsCittaAmerica1();
      getItemsCittaAmerica2();
      getItemsCittaAmerica3();
    }
  }, [user]);

  const username = user?.user_metadata?.username;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>unauthenticated user</div>;
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
      console.error("Error deleting:", error);
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
      console.error("Error deleting:", error);
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
      console.error("Error deleting:", error);
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
      console.error("Error deleting:", error);
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
      console.error("Error deleting:", error);
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
      console.error("Error deleting:", error);
    } else {
      setItemsMontagnaAmerica3([]);
      closeModalMontagnaAmerica3();
    }
  }

  ///citta_america1
  async function getItemsCittaAmerica1() {
    const { data: userData } = await supabase.auth.getUser();

    const { data, error } = await supabase
      .from("widgets_citta_america1")
      .select("*")
      .eq("user_id", userData.user.id);

    if (error) {
      console.error(error.message);
    } else {
      setItemsCittaAmerica1(data);
    }
  }

  async function handleDeleteAllCittaAmerica1() {
    const { data: userData } = await supabase.auth.getUser();

    const { error } = await supabase
      .from("widgets_citta_america1")
      .delete()
      .eq("user_id", userData.user.id);

    if (error) {
      console.error("Error deleting:", error);
    } else {
      setItemsCittaAmerica1([]);
      closeModalCittaAmerica1();
    }
  }

  ///citta_america2
  async function getItemsCittaAmerica2() {
    const { data: userData } = await supabase.auth.getUser();

    const { data, error } = await supabase
      .from("widgets_citta_america2")
      .select("*")
      .eq("user_id", userData.user.id);

    if (error) {
      console.error(error.message);
    } else {
      setItemsCittaAmerica2(data);
    }
  }

  async function handleDeleteAllCittaAmerica2() {
    const { data: userData } = await supabase.auth.getUser();

    const { error } = await supabase
      .from("widgets_citta_america2")
      .delete()
      .eq("user_id", userData.user.id);

    if (error) {
      console.error("Error deleting:", error);
    } else {
      setItemsCittaAmerica2([]);
      closeModalCittaAmerica2();
    }
  }

  ///citta_america3
  async function getItemsCittaAmerica3() {
    const { data: userData } = await supabase.auth.getUser();

    const { data, error } = await supabase
      .from("widgets_citta_america3")
      .select("*")
      .eq("user_id", userData.user.id);

    if (error) {
      console.error(error.message);
    } else {
      setItemsCittaAmerica3(data);
    }
  }

  async function handleDeleteAllCittaAmerica3() {
    const { data: userData } = await supabase.auth.getUser();

    const { error } = await supabase
      .from("widgets_citta_america3")
      .delete()
      .eq("user_id", userData.user.id);

    if (error) {
      console.error("Error deleting:", error);
    } else {
      setItemsCittaAmerica3([]);
      closeModalCittaAmerica3();
    }
  }

  return (
    <>
      <header>
        <h1>Welcome {username ?? user?.email}</h1>
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
                    src={appalachian}
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
                    src={rushmore}
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
                    src={sierra}
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
          {itemsCittaAmerica1.map((itemsCittaAmerica1) => (
            <div
              className="card"
              key={itemsCittaAmerica1.id}
              style={{
                margin: "10px",
                padding: "10px",
              }}
            >
              {itemsCittaAmerica1.type === "trip" && (
                <div>
                  <img
                    style={{ borderRadius: "15px" }}
                    src={newyork}
                    alt="trip"
                    width="310"
                  />
                  <button
                    className="button_info"
                    onClick={openModalCittaAmerica1}
                  >
                    info
                  </button>
                </div>
              )}
            </div>
          ))}
          {itemsCittaAmerica2.map((itemsCittaAmerica2) => (
            <div
              className="card"
              key={itemsCittaAmerica2.id}
              style={{
                margin: "10px",
                padding: "10px",
              }}
            >
              {itemsCittaAmerica2.type === "trip" && (
                <div>
                  <img
                    style={{ borderRadius: "15px" }}
                    src={washington}
                    alt="trip"
                    width="310"
                  />
                  <button
                    className="button_info"
                    onClick={openModalCittaAmerica2}
                  >
                    info
                  </button>
                </div>
              )}
            </div>
          ))}
          {itemsCittaAmerica3.map((itemsCittaAmerica3) => (
            <div
              className="card"
              key={itemsCittaAmerica3.id}
              style={{
                margin: "10px",
                padding: "10px",
              }}
            >
              {itemsCittaAmerica3.type === "trip" && (
                <div>
                  <img
                    style={{ borderRadius: "15px" }}
                    src={dallas}
                    alt="trip"
                    width="310"
                  />
                  <button
                    className="button_info"
                    onClick={openModalCittaAmerica3}
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
              <h2>Myrtle Beach</h2>
              <p>
                Myrtle Beach is a popular coastal destination along the Atlantic
                Ocean, known for its wide sandy shoreline and lively atmosphere.
                The beach stretches for about 60 miles (often called the “Grand
                Strand”), offering soft sand, gentle waves, and plenty of space
                for swimming, sunbathing, and family activities.
              </p>

              {items.length > 0 && (
                <button className="button_modal" onClick={handleDeleteAll}>
                  delete
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
              <h2>Miami Beach</h2>
              <p>
                Miami Beach is a famous stretch of coastline along the Atlantic
                Ocean known for its soft white sand, clear turquoise water, and
                vibrant atmosphere. The beach is typically warm year-round,
                making it ideal for swimming, sunbathing, and water sports.
              </p>

              {itemsTwo.length > 0 && (
                <button className="button_modal" onClick={handleDeleteAllTwo}>
                  delete
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
              <h2>San Francisco Beach</h2>
              <p>
                Ocean Beach is a long, windswept stretch of coastline along the
                Pacific Ocean. Unlike warmer beach destinations, it’s known for
                its cool temperatures, strong waves, and frequent fog. The beach
                has wide sandy shores and dramatic views, especially near
                landmarks like the Golden Gate Bridge. It’s popular for walking,
                surfing, and enjoying sunsets, but the water is usually too cold
                and rough for casual swimming. Overall, it offers a more rugged,
                scenic, and peaceful coastal experience compared to typical
                sunny beaches.
              </p>

              {itemsThree.length > 0 && (
                <button className="button_modal" onClick={handleDeleteAllThree}>
                  delete
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
              <h2>Appalachian Mountains</h2>
              <p>
                The Appalachian Mountains are a vast mountain range stretching
                along the eastern United States and into Canada. They are among
                the oldest mountains in the world, known for their rounded
                peaks, dense forests, and rich biodiversity.
              </p>

              {itemsMontagnaAmerica1.length > 0 && (
                <button
                  className="button_modal"
                  onClick={handleDeleteAllMontagnaAmerica1}
                >
                  delete
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
              <h2>Mount Rushmore</h2>
              <p>
                Mount Rushmore is a famous national monument carved into a
                granite mountain in the Black Hills. It features the large stone
                faces of four U.S. presidents—George Washington, Thomas
                Jefferson, Theodore Roosevelt, and Abraham Lincoln.
              </p>

              {itemsMontagnaAmerica2.length > 0 && (
                <button
                  className="button_modal"
                  onClick={handleDeleteAllMontagnaAmerica2}
                >
                  delete
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
              <h2>Sierra Nevada</h2>
              <p>
                The Sierra Nevada is a major mountain range in the western
                United States, mainly in California and partly in Nevada. It’s
                known for its dramatic peaks, alpine lakes, and vast forests.
                The range includes famous natural landmarks like Yosemite
                National Park and Lake Tahoe, as well as Mount Whitney, the
                tallest mountain in the contiguous U.S. Overall, the Sierra
                Nevada is known for its stunning scenery, outdoor recreation,
                and ecological importance.
              </p>

              {itemsMontagnaAmerica3.length > 0 && (
                <button
                  className="button_modal"
                  onClick={handleDeleteAllMontagnaAmerica3}
                >
                  delete
                </button>
              )}
            </div>
          </div>
        )}
        {showModalCittaAmerica1 && (
          <div className="modal-overlay" onClick={closeModalCittaAmerica1}>
            <div
              className="modal-card"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={closeModalCittaAmerica1}
                aria-label="Chiudi popup"
              >
                ×
              </button>
              <h2>New York</h2>
              <p>
                New York City is the largest city in the United States and one
                of the world’s most influential cultural and financial centers.
                Located on the East Coast, it’s made up of five boroughs and is
                known for its iconic skyline, fast-paced lifestyle, and diverse
                population.
              </p>

              {itemsCittaAmerica1.length > 0 && (
                <button
                  className="button_modal"
                  onClick={handleDeleteAllCittaAmerica1}
                >
                  delete
                </button>
              )}
            </div>
          </div>
        )}
        {showModalCittaAmerica2 && (
          <div className="modal-overlay" onClick={closeModalCittaAmerica2}>
            <div
              className="modal-card"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={closeModalCittaAmerica2}
                aria-label="Chiudi popup"
              >
                ×
              </button>
              <h2>Washington</h2>
              <p>
                Washington, D.C. is the nation’s capital, located on the East
                Coast. It’s known for its historic monuments, government
                buildings like the White House and Capitol, and world-class
                museums along the National Mall. The city has a formal,
                political atmosphere mixed with vibrant neighborhoods and
                cultural diversity.
              </p>

              {itemsCittaAmerica2.length > 0 && (
                <button
                  className="button_modal"
                  onClick={handleDeleteAllCittaAmerica2}
                >
                  delete
                </button>
              )}
            </div>
          </div>
        )}
        {showModalCittaAmerica3 && (
          <div className="modal-overlay" onClick={closeModalCittaAmerica3}>
            <div
              className="modal-card"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={closeModalCittaAmerica3}
                aria-label="Chiudi popup"
              >
                ×
              </button>
              <h2>Dallas</h2>
              <p>
                Dallas is a major city in the southern United States known for
                its strong economy, modern skyline, and cultural mix. It’s a key
                hub for industries like finance, technology, and energy.
              </p>

              {itemsCittaAmerica3.length > 0 && (
                <button
                  className="button_modal"
                  onClick={handleDeleteAllCittaAmerica3}
                >
                  delete
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
