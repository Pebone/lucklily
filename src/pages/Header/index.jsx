import "./index.scss";

export default function Header() {
  return (
    <>
      <div className="">
        <div className="header">
          <div className="menu">
            <img className="logo" src="../src/assets/images/logo.png" />

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
      </div>
    </>
  );
}
