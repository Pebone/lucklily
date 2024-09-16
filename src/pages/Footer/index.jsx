import "./index.scss";

export default function Footer() {
  return (
    <section className="footer_container">
      <div className="footer_infos">
        <img className="footer_logo" src="../src/assets/images/logo.png" />
        <div className="footer_menu">
          <a href="#1">
            <div className="background_menu_item">Início</div>
          </a>

          <a href="#2">
            <div className="background_menu_item">Sobre</div>
          </a>

          <a href="#3">
            <div className="background_menu_item">Produtos</div>
          </a>

          <a href="#4">
            <div className="background_menu_item">Galeria</div>
          </a>

          <a href="#5">
            <div className="background_menu_item">Contato</div>
          </a>
        </div>
        <div className="socials">
          <a
            href="https://www.instagram.com/lucklilydoces"
            className="background_socials"
            target="blank"
          >
            <img src="../src/assets/icons/instagram.svg" />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=%2B5585994015585&text&type=phone_number&app_absent=0"
            className="background_socials"
            target="blank"
          >
            <img src="../src/assets/icons/whatsapp.svg" />
          </a>
        </div>
      </div>
      <div className="footer_signature">
        <p>
          Desenvolvido com 💜 por{" "}
          <a href="https://www.linkedin.com/in/davipereiracardoso/" target="_blank">
            Davi Pereira
          </a>
        </p>
        {/* <p>Desenvolvido com&nbsp;</p>
        <img src="./src/assets/icons/heart.svg" />
        <p>&nbsp;por Davi Pereira</p> */}
      </div>
    </section>
  );
}
