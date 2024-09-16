import Logo from "../../assets/images/logo.png";
import Instagram from "../../assets/icons/instagram.svg"
import Whatsapp from "../../assets/icons/whatsapp.svg"
import "./index.scss";

export default function Header() {
  return (
    <section id="header" className="header">
      <div className="menu">
        <img className="logo" src={Logo} />

        <a href="#header">
          <div className="background_menu_item">Início</div>
        </a>

        <a href="#products">
          <div className="background_menu_item">Produtos</div>
        </a>

        <a href="#gallery">
          <div className="background_menu_item">Galeria</div>
        </a>

        <a href="#about">
          <div className="background_menu_item">Sobre</div>
        </a>

        <a href="#contact">
          <div className="background_menu_item">Contato</div>
        </a>
      </div>
      <div className="socials">
        <a
          href="https://www.instagram.com/lucklilydoces"
          className="background_socials"
          target="blank"
        >
          <img src={Instagram} />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B5585994015585&text&type=phone_number&app_absent=0"
          className="background_socials"
          target="blank"
        >
          <img src={Whatsapp} />
        </a>
      </div>
    </section>
  );
}
