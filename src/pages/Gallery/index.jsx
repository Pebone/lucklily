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
            <img src="./src/assets/images/cookies/lucklily.png"></img>
            <img src="./src/assets/images/cookies/cookies_box.png"></img>
            <img src="./src/assets/images/cookies/cookie.png"></img>
          </div>
          <div className="gallery_group_2">
            <img src="./src/assets/images/cakes/carrot_cake.png"></img>
            <img src="./src/assets/images/cakes/carrot_cake_2.png"></img>
          </div>
        </div>
      </section>
    </>
  );
}
