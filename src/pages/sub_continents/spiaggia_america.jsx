import { useState } from "react";
import { supabase } from "../../services/supabase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import freccia from "../../assets/freccia.png";
import myrtle from "../../../public/myrtle.jpg";
import miami from "../../../public/miami_beach.jpg";
import sanfrancisco from "../../../public/sanfrancisco_beach.jpg";
import ninetynine from "../../../public/ninetynine.png";
import hundred from "../../../public/hundred.png";

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
      console.error("unauthenticated user");
      return;
    }

    const { data: existing, error: checkError } = await supabase
      .from("widgets")
      .select("*")
      .eq("user_id", userData.user.id)
      .eq("type", "trip");

    if (checkError) {
      console.error("Error checking:", checkError);
      return;
    }

    if (existing.length > 0) {
      alert("You have already added this trip!");
      return;
    }

    const { error } = await supabase.from("widgets").insert([
      {
        user_id: userData.user.id,
        type: "trip",
        content: "../assets/citta.jpg",
        visible: true,
      },
    ]);

    if (error) {
      console.error(error);
    } else {
      alert("Added!");
    }
  }

  useEffect(() => {
    async function fetchWidgets() {
      const { data, error } = await supabase.from("widgets").select("*");

      if (error) {
        console.error("Error fetching:", error);
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
      console.error("Error deleting:", error);
    } else {
      setWidgets([]);
    }
  }

  /////two

  async function handleAddTripTwo() {
    const { data: userData, error: userError } = await supabase.auth.getUser();

    if (userError || !userData?.user) {
      console.error("unauthenticated user");
      return;
    }

    const { data: existing, error: checkError } = await supabase
      .from("widgetstwo")
      .select("*")
      .eq("user_id", userData.user.id)
      .eq("type", "trip");

    if (checkError) {
      console.error("Error checking:", checkError);
      return;
    }

    if (existing.length > 0) {
      alert("You have already added this trip!");
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
      alert("Added!");
    }
  }

  useEffect(() => {
    async function fetchWidgetsTwo() {
      const { data, error } = await supabase.from("widgetstwo").select("*");

      if (error) {
        console.error("Error fetching:", error);
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
      console.error("Error deleting:", error);
    } else {
      setWidgetsTwo([]);
    }
  }

  /////three

  async function handleAddTripThree() {
    const { data: userData, error: userError } = await supabase.auth.getUser();

    if (userError || !userData?.user) {
      console.error("unauthenticated user");
      return;
    }

    const { data: existing, error: checkError } = await supabase
      .from("widgetsthree")
      .select("*")
      .eq("user_id", userData.user.id)
      .eq("type", "trip");

    if (checkError) {
      console.error("Error checking:", checkError);
      return;
    }

    if (existing.length > 0) {
      alert("You have already added this trip!");
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
      alert("Added!");
    }
  }

  useEffect(() => {
    async function fetchWidgetsThree() {
      const { data, error } = await supabase.from("widgetsthree").select("*");

      if (error) {
        console.error("Error fetching:", error);
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
      console.error("Error deleting:", error);
    } else {
      setWidgetsThree([]);
    }
  }

  return (
    <div className="container">
      <div className="spiaggia-content">
        <img
          src={freccia}
          alt="Back to Home"
          className="back-arrow"
          onClick={() => navigate("/america")}
        />
        <img src={ninetynine} alt="" className="status" />

        <div className="spiaggia-images">
          <img
            src={myrtle}
            alt="Myrtle Beach"
            className="myrtle_img"
            onClick={openModal}
          />
          <img
            src={miami}
            alt="Miami Beach"
            className="myrtle_img"
            onClick={openModalTwo}
          />
          <img
            src={sanfrancisco}
            alt="San Francisco Beach"
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
            <img src={hundred} alt="" className="hundred" />
            <h2>Miami Beach</h2>
            <p>
              Miami Beach is a famous stretch of coastline along the Atlantic
              Ocean known for its soft white sand, clear turquoise water, and
              vibrant atmosphere. The beach is typically warm year-round, making
              it ideal for swimming, sunbathing, and water sports.
            </p>
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
                delete
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
            <img src={hundred} alt="" className="hundred" />
            <h2> Myrtle Beach</h2>
            <p>
              Myrtle Beach is a popular coastal destination along the Atlantic
              Ocean, known for its wide sandy shoreline and lively atmosphere.
              The beach stretches for about 60 miles (often called the “Grand
              Strand”), offering soft sand, gentle waves, and plenty of space
              for swimming, sunbathing, and family activities.
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
            <img src={hundred} alt="" className="hundred" />
            <h2> San Francisco Beach</h2>
            <p>
              Ocean Beach is a long, windswept stretch of coastline along the
              Pacific Ocean. Unlike warmer beach destinations, it’s known for
              its cool temperatures, strong waves, and frequent fog. The beach
              has wide sandy shores and dramatic views, especially near
              landmarks like the Golden Gate Bridge. It’s popular for walking,
              surfing, and enjoying sunsets, but the water is usually too cold
              and rough for casual swimming. Overall, it offers a more rugged,
              scenic, and peaceful coastal experience compared to typical sunny
              beaches.
            </p>
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
                delete
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
