export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      
      {/* Banner */}
      <div style={{
        backgroundColor: "#E6E6FA", // lavanda claro
        padding: "60px 20px",
        borderRadius: "10px",
        marginBottom: "30px"
      }}>
        <h1 style={{ color: "#4B0082", fontSize: "40px" }}>
          🌸 Bem-vinda à Violeta Fashion 🌸
        </h1>
        <p style={{ fontSize: "18px", marginTop: "10px" }}>
          Moda feminina elegante, acessível e feita para você brilhar ✨
        </p>
        <button style={{
          backgroundColor: "#4B0082",
          color: "white",
          padding: "12px 25px",
          border: "none",
          borderRadius: "5px",
          marginTop: "20px",
          cursor: "pointer"
        }}>
          Ver Produtos
        </button>
      </div>

      {/* Sessão Destaque */}
      <h2 style={{ color: "#8A2BE2" }}>✨ Nossos Destaques ✨</h2>
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "20px",
        flexWrap: "wrap"
      }}>
        <div style={{
          background: "#fff",
          border: "1px solid #ddd",
          borderRadius: "10px",
          width: "250px",
          padding: "15px"
        }}>
          <img src="/produto1.jpg" alt="Produto 1" style={{ width: "100%", borderRadius: "10px" }} />
          <h3>Vestido Floral</h3>
          <p>R$ 99,90</p>
        </div>

        <div style={{
          background: "#fff",
          border: "1px solid #ddd",
          borderRadius: "10px",
          width: "250px",
          padding: "15px"
        }}>
          <img src="/produto2.jpg" alt="Produto 2" style={{ width: "100%", borderRadius: "10px" }} />
          <h3>Blusa Elegante</h3>
          <p>R$ 69,90</p>
        </div>
      </div>
    </div>
  );
}
