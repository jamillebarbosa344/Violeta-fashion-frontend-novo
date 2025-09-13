import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function Checkout() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("carrinho");
    if (saved) {
      const carrinho = JSON.parse(saved);
      setItems(carrinho);
      setTotal(carrinho.reduce((s, i) => s + i.preco * i.quantidade, 0));
    }
  }, []);

  const finalizarCompra = () => {
    alert("✅ Compra finalizada com sucesso!\nEm breve você receberá mais informações.");
    localStorage.removeItem("carrinho"); // limpa o carrinho
    window.location.href = "/"; // redireciona para a Home
  };

  return (
    <div>
      <Navbar />
      <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
        <h1>Checkout 💳</h1>
        {items.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <>
          import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      {/* conteúdo da Home */}
      
      <Footer />
    </div>
  );
}
            <h3>Resumo da Compra:</h3>
            <ul>
              {items.map((item, i) => (
                <li key={i} style={{ marginBottom: "8px" }}>
                  {item.nome} x {item.quantidade} —{" "}
                  <strong>R$ {(item.preco * item.quantidade).toFixed(2).replace(".", ",")}</strong>
                </li>
              ))}
            </ul>
            <h2>Total: R$ {total.toFixed(2).replace(".", ",")}</h2>

            <button
              onClick={finalizarCompra}
              style={{
                background: "green",
                color: "white",
                border: "none",
                borderRadius: "6px",
                padding: "12px 16px",
                cursor: "pointer"
              }}
            >
              Confirmar Compra
            </button>
          </>
        )}
      </div>
    </div>
  );
}
