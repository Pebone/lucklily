import Card from "../../components/Card";
import "./index.scss";

export default function Products() {
  return (
    <>
      <section id="products" className="products_container">
        <div className="products_title">
          <h1>Produtos</h1>
          <h2>Mais vendidos</h2>
        </div>
        <div className="products_best_sellers">
          <Card
            cookieURL="./src/assets/images/cookies/lucklily.png"
            cookieName="Luck Lily"
            ingredients={["milk", "wheat", "egg"]}
            type="cookie"
            info="Massa especial da casa e gotas de chocolate!"
            price="R$ 7,00"
          ></Card>

          <Card
            cookieURL="./src/assets/images/cookies/lucklily.png"
            cookieName="Luck Lily"
            ingredients={["milk", "wheat", "egg"]}
            type="cookie"
            info="Massa especial da casa e gotas de chocolate!"
            price="R$ 7,00"
          ></Card>

          <Card
            cookieURL="./src/assets/images/cookies/lucklily.png"
            cookieName="Luck Lily"
            ingredients={["milk", "wheat", "egg"]}
            type="cookie"
            info="Massa especial da casa e gotas de chocolate!"
            price="R$ 7,00"
          ></Card>

          <Card
            cookieURL="./src/assets/images/cookies/lucklily.png"
            cookieName="Luck Lily"
            ingredients={["milk", "wheat", "egg"]}
            type="cookie"
            info="Massa especial da casa e gotas de chocolate!"
            price="R$ 7,00"
          ></Card>

          <Card
            cookieURL="./src/assets/images/cookies/lucklily.png"
            cookieName="Luck Lily"
            ingredients={["milk", "wheat", "egg"]}
            type="cookie"
            info="Massa especial da casa e gotas de chocolate!"
            price="R$ 7,00"
          ></Card>

          <Card
            cookieURL="./src/assets/images/cookies/lucklily.png"
            cookieName="Luck Lily"
            ingredients={["milk", "wheat", "egg"]}
            type="cookie"
            info="Massa especial da casa e gotas de chocolate!"
            price="R$ 7,00"
          ></Card>
        </div>
        <div className="products_button_menu">
          <a
            className="button_menu"
            href="https://drive.google.com/file/d/1-3HicpDbg5NaUKUFZ7z6b6dt_Y4Qhyjm/view"
            target="_blank"
          >
            Acessar o cardápio completo!
          </a>
        </div>
      </section>
    </>
  );
}
