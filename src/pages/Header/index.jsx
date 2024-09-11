import "./index.scss";

export default function Header() {
  return (
    <>
      <div className="container">
        <div className="header">
          <img src="../src/assets/images/logo.png" />
          <div className="menu">
            <span>Início</span>
            <span>Sobre</span>
            <span>Produtos</span>
            <span>Galeria</span>
            <span>Contato</span>
          </div>
          <div className="socials">
            <img src="../src/assets/icons/instagram.svg" />
            <img src="../src/assets/icons/whatsapp.svg" />
          </div>
        </div>
      </div>
    </>
  );
}
