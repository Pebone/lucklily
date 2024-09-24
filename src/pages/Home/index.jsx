import HomeImage from "../../assets/images/cakes/carrot_cake.png";
import "./index.scss";

export default function Home() {
  return (
    <section id="home" className="home_container">
      <div className="intro_home">
        <h1>Transmitindo a você uma experiência gastronômica única.</h1>
        <h2>Viva tudo em um momento!</h2>
        <a
          className="intro_home_button"
          href="https://api.whatsapp.com/send/?phone=%2B5585994015585&text&type=phone_number&app_absent=0"
          target="_blank"
        >
          <div className="home_cookie"></div>
          <span>Peça agora!</span>
        </a>
      </div>
      <div className="intro_home_image">
        <img src={HomeImage} alt="Bolo de cenoura com chocolate."></img>
      </div>
    </section>
  );
}
