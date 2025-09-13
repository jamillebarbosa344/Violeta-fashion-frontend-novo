import Header from "./Header";
import Footer from "./Footer.js"; 

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "80vh", padding: "20px" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
