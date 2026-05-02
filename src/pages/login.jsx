import { useState } from "react";
import { supabase } from "../services/supabase";
import { useNavigate } from "react-router-dom";
import freccia from "../assets/freccia.png";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      navigate("/dashboard");
    }
  }

  async function handleRegister() {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
        },
      },
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Account created!");
      navigate("/dashboard");
    }
  }

  return (
    <div className="container">
      <div className="container_login">
        <div className="sub_container_login">
          <img
            src={freccia}
            alt="Back to Continents"
            className="back-arrow"
            onClick={() => navigate("/")}
          />
          <h1>Login</h1>

          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            style={{ backgroundColor: "rgb(160, 218, 69)" }}
            className="button_login_page"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            style={{ backgroundColor: "#0a50e6" }}
            className="button_login_page"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
