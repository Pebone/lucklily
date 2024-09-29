import LuckLily from "../../assets/images/cookies/lucklily.webp";
import CookiesBox from "../../assets/images/cookies/cookies_box.webp";
import Cookie from "../../assets/images/cookies/cookie.webp";
import CarrotCake from "../../assets/images/carrot_cake.webp";
import CarrotCake2 from "../../assets/images/carrot_cake_3.webp";

import "./index.scss";

export default function Gallery() {
  return (
    <>
      <section id="gallery" className="gallery_container">
        <div className="gallery_title">
          <h1>Galeria</h1>
        </div>
        <div className="gallery_groups">
          <div className="gallery_group_1">
            <img src={LuckLily} alt="Cookie Lucklily."></img>
            <img src={CookiesBox} alt="Caixa de cookies."></img>
            <img src={Cookie} alt="Cookie em uma espátula."></img>
          </div>
          <div className="gallery_group_2">
            <img src={CarrotCake} alt="Bolo de cenoura com chocolate."></img>
            <img
              src={CarrotCake2}
              alt="Bolo de cenouro com cobertura de chocolate."
            ></img>
          </div>
        </div>
      </section>
    </>
  );
}
