import { useState } from "react";
import { supabase } from "../../services/supabase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import appalachi from "../../../public/appalachian_mountains.jpg";
import rushmore from "../../../public/mount_rushmore.jpg";
import sierra from "../../../public/sierra_nevada.jpg";
import freccia from "../../assets/freccia.png";
import ninetynine from "../../../public/ninetynine.png";
import hundred from "../../../public/hundred.png";

export default function MontagnaAmerica() {
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
      .from("widgets_montagna_america1")
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

    const { error } = await supabase.from("widgets_montagna_america1").insert([
      {
        user_id: userData.user.id,
        type: "trip",
        content: "../appalachian_mountains.jpg",
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
        .from("widgets_montagna_america1")
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
      .from("widgets_montagna_america1")
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
      .from("widgets_montagna_america2")
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

    const { error } = await supabase.from("widgets_montagna_america2").insert([
      {
        user_id: userData.user.id,
        type: "trip",
        content: "/mount_rushmore.jpg",
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
        .from("widgets_montagna_america2")
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
      .from("widgets_montagna_america2")
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
      .from("widgets_montagna_america3")
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

    const { error } = await supabase.from("widgets_montagna_america3").insert([
      {
        user_id: userData.user.id,
        type: "trip",
        content: "/sierra_nevada.jpg",
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
        .from("widgets_montagna_america3")
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
      .from("widgets_montagna_america3")
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
            src={appalachi}
            alt="appalachian"
            className="myrtle_img"
            onClick={openModal}
          />
          <img
            src={rushmore}
            alt="Mount Rushmore"
            className="myrtle_img"
            onClick={openModalTwo}
          />
          <img
            src={sierra}
            alt="Sierra Nevada"
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
            <h2>Mount Rushmore</h2>
            <p>
              Mount Rushmore is a famous national monument carved into a granite
              mountain in the Black Hills. It features the large stone faces of
              four U.S. presidents—George Washington, Thomas Jefferson, Theodore
              Roosevelt, and Abraham Lincoln.
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
            <h2>Appalachian Mountains</h2>
            <p>
              The Appalachian Mountains are a vast mountain range stretching
              along the eastern United States and into Canada. They are among
              the oldest mountains in the world, known for their rounded peaks,
              dense forests, and rich biodiversity.
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
            <h2>Sierra Nevada</h2>
            <p>
              The Sierra Nevada is a major mountain range in the western United
              States, mainly in California and partly in Nevada. It’s known for
              its dramatic peaks, alpine lakes, and vast forests. The range
              includes famous natural landmarks like Yosemite National Park and
              Lake Tahoe, as well as Mount Whitney, the tallest mountain in the
              contiguous U.S. Overall, the Sierra Nevada is known for its
              stunning scenery, outdoor recreation, and ecological importance.
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
