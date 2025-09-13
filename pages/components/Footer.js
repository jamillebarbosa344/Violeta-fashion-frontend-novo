export default function Footer() {
  return (
    <footer style={{
      marginTop: "50px",
      padding: "20px",
      backgroundColor: "#4B0082",
      color: "white",
      textAlign: "center"
    }}>
      <p>© {new Date().getFullYear()} Violeta Fashion - Todos os direitos reservados 🌸</p>
      
      <div style={{ marginTop: "10px" }}>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
          style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>
          📷 Instagram
        </a>
        <a href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer"
          style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>
          💬 WhatsApp
        </a>
        <a href="mailto:contato@violetafashion.com"
          style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>
          📧 E-mail
        </a>
      </div>
    </footer>
  );
}
