import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function Cart() {
  const [items, setItems] = useState([]);

  // carregar os itens do carrinho do navegador
  useEffect(() => {
    const saved = localStorage.getItem("carrinho");
    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  // calcular o total
  const total = items.reduce((soma, item) => soma + item.preco * item.quantidade, 0);

  return (
    <div>
      <Navbar />
      <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
        <h1>🛒 Seu Carrinho</h1>
        {items.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <>
            <ul>
              {items.map((item, i) => (
                <li key={i} style={{ marginBottom: "10px" }}>
                  {item.nome} x {item.quantidade} —{" "}
                  <strong>R$ {(item.preco * item.quantidade).toFixed(2).replace(".", ",")}</strong>
                </li>
              ))}
            </ul>
            <h3>Total: R$ {total.toFixed(2).replace(".", ",")}</h3>
            <button
              style={{
                background: "green",
                color: "white",
                border: "none",
                borderRadius: "6px",
                padding: "12px 16px",
                cursor: "pointer"
              }}
              onClick={() => window.location.href = "/checkout"}
            >
              Finalizar Compra
            </button>
          </>
        )}
      </div>
    </div>
  );
}
