import HomeImage from "../../assets/images/Lily_left.webp";
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
          target="blank"
        >
          <div className="home_cookie"></div>
          <span>Peça agora!</span>
        </a>
      </div>

      <img className="intro_home_image" src={HomeImage} alt="Avatar principal"></img>
    </section>
  );
}
