import Navbar from "../components/Navbar";

const produtos = [
  { id: 1, nome: "Vestido Floral", preco: 149.90, imagem: "https://via.placeholder.com/300x200?text=Vestido+Floral" },
  { id: 2, nome: "Blusa de Seda", preco: 89.90, imagem: "https://via.placeholder.com/300x200?text=Blusa+de+Seda" },
  { id: 3, nome: "Calça Jeans", preco: 129.90, imagem: "https://via.placeholder.com/300x200?text=Calça+Jeans" },
  { id: 4, nome: "Saia Midi", preco: 99.90, imagem: "https://via.placeholder.com/300x200?text=Saia+Midi" }
];

export default function Produtos() {
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h1>Nossos Produtos 👗</h1>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}>
          {produtos.map((p) => (
            <div key={p.id} style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              background: "#fff"
            }}>
              <img src={p.imagem} alt={p.nome} style={{ width: "100%", borderRadius: "8px" }} />
              <h3>{p.nome}</h3>
              <p style={{ color: "purple", fontWeight: "bold" }}>R$ {p.preco.toFixed(2).replace(".", ",")}</p>
              <button style={{
                background: "purple",
                color: "white",
                border: "none",
                borderRadius: "6px",
                padding: "10px 15px",
                cursor: "pointer"
              }}>
                Adicionar ao carrinho
              </button>
            </div><button
  style={{
    background: "purple",
    color: "white",
    border: "none",
    borderRadius: "6px",
    padding: "10px 15px",
    cursor: "pointer"
  }}
  onClick={() => {
    let cart = JSON.parse(localStorage.getItem("carrinho") || "[]");
    const found = cart.find((item) => item.id === p.id);
    if (found) {
      found.quantidade += 1;
    } else {
      cart.push({ ...p, quantidade: 1 });
    }
    localStorage.setItem("carrinho", JSON.stringify(cart));
    alert(`${p.nome} foi adicionado ao carrinho!`);
  }}
>
  Adicionar ao carrinho
</button>
          ))}
        </div>
      </div>
    </div>
  );
}
