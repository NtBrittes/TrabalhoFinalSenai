import { Link } from "react-router-dom";

function BarraNavegacao() {
  return (
    <nav>
      <h2>🥖 Padaria Sonho de Mel</h2>
      <div>
        <button> <Link to="/">Página inicial</Link> </button>
        <button> <Link to="/sobre">Sobre</Link> </button>
        <button> <Link to="/contatos">Contatos</Link> </button>
      </div>
    </nav>
  );
}

export default BarraNavegacao;