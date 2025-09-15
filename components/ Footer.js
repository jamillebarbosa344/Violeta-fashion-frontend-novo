import './Footer.css';

export default function Rodape() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Violeta Fashion. Todos os direitos reservados.</p>
    </footer>
  );
}
