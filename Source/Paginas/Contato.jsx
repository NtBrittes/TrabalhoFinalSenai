import { useState } from "react";

function Contatos() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("Preencha todos os campos!");
      return;
    }

    setStatus("Mensagem enviada com sucesso!");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div>
      <h1>Contato</h1>
      <h3>Tem algum elogio ou reclamação?</h3>
      <h3>Fale conosco!</h3>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Nome"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <div>
        <textarea
          name="message"
          placeholder="Insira mensagem aqui."
          rows={15}
          cols={50}
          maxLength={300}
          value={form.message}
          onChange={handleChange}
        />
        </div>

        <button type="submit">Enviar</button>
      </form>

      <p>{status}</p>
    </div>
  );
}

export default Contatos;