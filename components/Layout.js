import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div>
      {/* Aqui você pode colocar um Header se quiser */}
      <main>{children}</main>
      <Footer />
    </div>
  );
}
