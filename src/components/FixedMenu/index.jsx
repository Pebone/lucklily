import Menu from "../../assets/icons/menu.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Whatsapp from "../../assets/icons/whatsapp.svg";
import "./index.scss";

export function FixedMenu() {
  return (
    <section className="fixed_menu_container">
      <a
        href="https://drive.google.com/file/d/1-3HicpDbg5NaUKUFZ7z6b6dt_Y4Qhyjm/view"
        target="blank"
        className="fixed_menu"
      >
        <div>
          <p>Cardápio</p>
        </div>
        <img src={Menu} alt="Acessar o cardápio."></img>
      </a>
      <a
        href="https://www.instagram.com/lucklilydoces"
        target="blank"
        className="fixed_menu"
      >
        <div>
          <p>Instagram</p>
        </div>
        <img src={Instagram} alt="Acessar o instagram da loja."></img>
      </a>
      <a
        href="https://api.whatsapp.com/send/?phone=%2B5585994015585&text&type=phone_number&app_absent=0"
        target="blank"
        className="fixed_menu"
      >
        <div>
          <p>Whatsapp</p>
        </div>
        <img src={Whatsapp} alt="Entrar em contato com a loja por Whatsapp."></img>
      </a>
    </section>
  );
}
