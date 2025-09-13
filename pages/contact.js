import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h1>Contato 📞</h1>
        <p>Entre em contato com a Violeta Fashion pelos canais abaixo:</p>

        <p>
          📱 WhatsApp:{" "}
          <a href="https://wa.me/5567993400590" target="_blank" rel="noreferrer">
            Fale conosco
          </a>
        </p>

        <p>
          📸 Instagram:{" "}
          <a href="https://instagram.com/seu_instagram" target="_blank" rel="noreferrer">
            @seu_instagram
          </a>
        </p>

        <p style={{ color: "gray" }}>
          (Depois você pode trocar o número e o Instagram pelos seus reais 😉)
        </p>
      </div>
    </div>
  );
}import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      {/* conteúdo da Home */}
      
      <Footer />
    </div>
  );
}
