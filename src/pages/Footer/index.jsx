import Logo from "../../assets/images/logo.webp";
import Instagram from "../../assets/icons/instagram.svg";
import Whatsapp from "../../assets/icons/whatsapp.svg";

import "./index.scss";

export default function Footer() {
  return (
    <section id="footer" className="footer_container">
      <div className="footer_infos">
        <img className="footer_logo" src={Logo} alt="Logomarca da loja."/>
        <div className="footer_menu">
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
        <div className="footer_socials">
          <a
            href="https://www.instagram.com/lucklilydoces"
            className="background_socials"
            target="blank"
          >
            <img src={Instagram} alt="Acessar o instagram da loja."/>
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=%2B5585994015585&text&type=phone_number&app_absent=0"
            className="background_socials"
            target="blank"
          >
            <img src={Whatsapp} alt="Entrar em contato com a loja por Whatsapp."/>
          </a>
        </div>
      </div>
      <div className="footer_signature">
        <p>
          Desenvolvido com 💜 por{" "}
          <a
            href="https://www.linkedin.com/in/davipereiracardoso/"
            target="_blank"
          >
            Davi Pereira
          </a>
        </p>
        <p>
          Todos os direitos reservados &copy; 2024. Ícones fornecidos por{" "}
          <a href="https://fontawesome.com" target="_blank">
            FontAwesome
          </a>{" "}
          e{" "}
          <a href="https://lucide.dev" target="_blank">
            Lucide-React
          </a>
          .
        </p>
      </div>
    </section>
  );
}
