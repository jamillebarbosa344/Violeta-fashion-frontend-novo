/ components/Footer.js
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Violeta Fashion</p>
    </footer>
  );
}
