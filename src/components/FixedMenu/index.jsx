import Menu from "../../assets/icons/menu.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Whatsapp from "../../assets/icons/whatsapp.svg";
import "./index.scss";

export function FixedMenu() {
  return (
    <section className="fixed_menu_container">
      <a className="fixed_menu">
        <div>
          <p>Cardápio</p>
        </div>
        <img src={Menu}></img>
      </a>
      <a className="fixed_menu">
        <div>
          <p>Instagram</p>
        </div>
        <img src={Instagram}></img>
      </a>
      <a className="fixed_menu">
        <div>
          <p>Whatsapp</p>
        </div>
        <img src={Whatsapp}></img>
      </a>
    </section>
  );
}
