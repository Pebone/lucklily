import Logo from "../../assets/images/logo.png";
import Instagram from "../../assets/icons/instagram.svg"
import Whatsapp from "../../assets/icons/whatsapp.svg"
import "./index.scss";

export default function Header() {
  return (
    <section id="header" className="header_container">
      <div className="header_menu">
        <img className="header_logo" src={Logo} />

        <a href="#header">
          <div className="header_background_menu_item">Início</div>
        </a>

        <a href="#products">
          <div className="header_background_menu_item">Produtos</div>
        </a>

        <a href="#gallery">
          <div className="header_background_menu_item">Galeria</div>
        </a>

        <a href="#about">
          <div className="header_background_menu_item">Sobre</div>
        </a>

        <a href="#contact">
          <div className="header_background_menu_item">Contato</div>
        </a>
      </div>
      <div className="header_socials">
        <a
          href="https://www.instagram.com/lucklilydoces"
          className="header_background_socials"
          target="blank"
        >
          <img src={Instagram} />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B5585994015585&text&type=phone_number&app_absent=0"
          className="header_background_socials"
          target="blank"
        >
          <img src={Whatsapp} />
        </a>
      </div>
    </section>
  );
}
