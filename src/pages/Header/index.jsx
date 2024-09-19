import Logo from "../../assets/images/logo.png";
import Instagram from "../../assets/icons/instagram.svg";
import Whatsapp from "../../assets/icons/whatsapp.svg";
import MenuBurguer from "../../assets/icons/burguer.svg";
import House from "../../assets/icons/house.svg";
import Gallery from "../../assets/icons/gallery.svg";
import Cookie from "../../assets/icons/cookie_font.svg";
import "./index.scss";
import { useState } from "react";

export default function Header() {
  const [menuBurguerClicked, setMenuBurguerClicked] = useState(false);

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
      <div className="header_socials_menu">
        <div className="header_menu_burguer">
          <img
            src={MenuBurguer}
            onClick={() => setMenuBurguerClicked(!menuBurguerClicked)}
          ></img>

          {menuBurguerClicked ? (
            <div className="header_menu_burguer_dropdown">
              <div className="header_menu_burguer_dropdown_container">
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
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="header_socials_menu_items">
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
      </div>
    </section>
  );
}
