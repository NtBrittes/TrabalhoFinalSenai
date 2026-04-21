import { BrowserRouter, Routes, Route } from "react-router-dom";
import BarraNavegacao from "./Source/Componentes/BarraNavegacao.jsx";
import Footer from "./Source/Componentes/Footer.jsx";

import Home from "./Source/Paginas/Home.jsx";
import Sobre from "./Source/Paginas/Sobre.jsx";
import Contatos from "./Source/Paginas/Contato.jsx";

import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  if (loading) {
    return (
      <div style={{
        height: "100vh",
        background: "#8b5e3c",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white"
      }}>
        <div>
          <h1>🥖 Padaria Sonho de Mel</h1>
          <span>Preparando delícias...</span>
        </div>
      </div>
    );
  }

  return (
  <BrowserRouter>
  <div className="app">
    <BarraNavegacao />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contatos" element={<Contatos />} />
    </Routes>
    <Footer />
    </div>
  </BrowserRouter>
);
}

export default App;