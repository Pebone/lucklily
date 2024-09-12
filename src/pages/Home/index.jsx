import "./index.scss"

export default function Home() {
  return (
    <section className="home_container">
      <div className="intro_home">
        <h1>Transmitindo a você uma experiência gastronômica única.</h1>
        <h2>Viva tudo em um momento!</h2>
        <button className="intro_home_button">
          <img src="./src/assets/icons/cookie.svg"></img>
          <span>Peça agora!</span>
        </button>
      </div>
      <div className="intro_home_image">
        <img src="./src/assets/images/home_image.png"></img>
      </div>
    </section>
  );
}
