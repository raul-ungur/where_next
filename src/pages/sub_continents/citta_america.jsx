import { useState } from "react";
import { supabase } from "../../services/supabase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import newyork from "../../../public/new_york.jpg";
import washington from "../../../public/washington_dc.png";
import dallas from "../../../public/dallas.jpg";
import freccia from "../../assets/freccia.png";
import ninetynine from "../../../public/ninetynine.png";
import hundred from "../../../public/hundred.png";

export default function CittaAmerica() {
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
      .from("widgets_citta_america1")
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

    const { error } = await supabase.from("widgets_citta_america1").insert([
      {
        user_id: userData.user.id,
        type: "trip",
        content: "../new_york.jpg",
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
      const { data, error } = await supabase
        .from("widgets_citta_america1")
        .select("*");

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
      .from("widgets_citta_america1")
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
      .from("widgets_citta_america2")
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

    const { error } = await supabase.from("widgets_citta_america2").insert([
      {
        user_id: userData.user.id,
        type: "trip",
        content: "/washington_dc.jpg",
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
      const { data, error } = await supabase
        .from("widgets_citta_america2")
        .select("*");

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
      .from("widgets_citta_america2")
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
      .from("widgets_citta_america3")
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

    const { error } = await supabase.from("widgets_citta_america3").insert([
      {
        user_id: userData.user.id,
        type: "trip",
        content: "/dallas.jpg",
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
      const { data, error } = await supabase
        .from("widgets_citta_america3")
        .select("*");

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
      .from("widgets_citta_america3")
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
            src={newyork}
            alt="New York"
            className="myrtle_img"
            onClick={openModal}
          />
          <img
            src={washington}
            alt="Washington DC"
            className="myrtle_img"
            onClick={openModalTwo}
          />
          <img
            src={dallas}
            alt="Dallas"
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
            <h2>Washington</h2>
            <p>
              Washington, D.C. is the nation’s capital, located on the East
              Coast. It’s known for its historic monuments, government buildings
              like the White House and Capitol, and world-class museums along
              the National Mall. The city has a formal, political atmosphere
              mixed with vibrant neighborhoods and cultural diversity.
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
            <h2>New York</h2>
            <p>
              New York City is the largest city in the United States and one of
              the world’s most influential cultural and financial centers.
              Located on the East Coast, it’s made up of five boroughs and is
              known for its iconic skyline, fast-paced lifestyle, and diverse
              population.
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
            <h2>Dallas</h2>
            <p>
              Dallas is a major city in the southern United States known for its
              strong economy, modern skyline, and cultural mix. It’s a key hub
              for industries like finance, technology, and energy.
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
