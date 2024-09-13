import Card from "../../components/Card";
import "./index.scss";

export default function Products() {
  return (
    <>
      <section className="products_container">
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
      </section>
    </>
  );
}
