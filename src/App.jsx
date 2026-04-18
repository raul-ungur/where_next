import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import "./App.css";
import Home from "./pages/Home";
import Continents from "./pages/continents.jsx";
import America from "./pages/America";
import Europe from "./pages/Europe";
import Asia from "./pages/Asia";
import Login from "./pages/login.jsx";
import Dashboard from "./pages/Dashboard";
import SpiaggiaAmerica from "./pages/sub_continents/spiaggia_america.jsx";
import MontagnaAmerica from "./pages/sub_continents/montagna_ameria.jsx";
import CittaAmerica from "./pages/sub_continents/citta_america.jsx";
import SpiaggiaEurope from "./pages/sub_continents/spiaggia_europe.jsx";
import MontagnaEurope from "./pages/sub_continents/montagna_europe.jsx";
import CittaEurope from "./pages/sub_continents/citta_europe.jsx";
import SpiaggiaAsia from "./pages/sub_continents/spiaggia_asia.jsx";
import MontagnaAsia from "./pages/sub_continents/montagna_asia.jsx";
import CittaAsia from "./pages/sub_continents/citta_asia.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/continents" element={<Continents />} />
          <Route path="/america" element={<America />} />
          <Route path="/europe" element={<Europe />} />
          <Route path="/asia" element={<Asia />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Home />} />
          <Route path="/spiaggia_america" element={<SpiaggiaAmerica />} />
          <Route path="/montagna_america" element={<MontagnaAmerica />} />
          <Route path="/citta_america" element={<CittaAmerica />} />
          <Route path="/spiaggia_europe" element={<SpiaggiaEurope />} />
          <Route path="/montagna_europe" element={<MontagnaEurope />} />
          <Route path="/citta_europe" element={<CittaEurope />} />
          <Route path="/spiaggia_asia" element={<SpiaggiaAsia />} />
          <Route path="/montagna_asia" element={<MontagnaAsia />} />
          <Route path="/citta_asia" element={<CittaAsia />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
