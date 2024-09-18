import LuckLily from "../../assets/images/cookies/lucklily.png";
import CookiesBox from "../../assets/images/cookies/cookies_box.png";
import Cookie from "../../assets/images/cookies/cookie.png";
import CarrotCake from "../../assets/images/cakes/carrot_cake.png";
import CarrotCake2 from "../../assets/images/cakes/carrot_cake_3.png";

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
            <img src={LuckLily}></img>
            <img src={CookiesBox}></img>
            <img src={Cookie}></img>
          </div>
          <div className="gallery_group_2">
            <img src={CarrotCake}></img>
            <img src={CarrotCake2}></img>
          </div>
        </div>
      </section>
    </>
  );
}
