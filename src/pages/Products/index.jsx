import Card from "../../components/Card";
import LuckLily from "../../assets/images/cookies/lucklily.webp";
import Cafezin from "../../assets/images/cookies/cafezin2.webp";
import Avela from "../../assets/images/cookies/avela.webp";
import BananaCake from "../../assets/images/cakes/banana_cake.webp";
import CarrotCake from "../../assets/images/cakes/carrot_cake_3.webp";
import OvomaltineCake from "../../assets/images/cakes/ovomaltine_cake.webp";
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
            cookieURL={LuckLily}
            cookieName="Luck Lily"
            ingredients={["milk", "wheat", "egg"]}
            type="cookie"
            info="Massa especial da casa e gotas de chocolate!"
            price="R$ 7,00"
            alt="Cookie Lucklily."
            typeAlt="Cookie."
          ></Card>

          <Card
            cookieURL={Avela}
            cookieName="Avelã Nuclear"
            ingredients={["milk", "wheat", "egg"]}
            type="cookie"
            info="Massa especial da casa e creme de avelã!"
            price="R$ 7,00"
            alt="Cookie Avelã Nuclear."
            typeAlt="Cookie."
          ></Card>

          <Card
            cookieURL={Cafezin}
            cookieName="Cafézin"
            ingredients={["milk", "wheat", "egg"]}
            type="cookie"
            info="Diferencial da casa. Cookie com massa feita de café para
            você provar e amar, escolha o recheio!"
            price="R$ 7,00"
            alt="Cookie Cafézin."
            typeAlt="Cookie."
          ></Card>

          <Card
            cookieURL={CarrotCake}
            cookieName="Bolo de Cenoura"
            ingredients={["milk", "wheat", "egg"]}
            type="cake"
            info="Bolo de cenoura dos deuses, feito com toda a
            malemolência da cozinha da Luck Lily. Isso daqui é divino!"
            price="(M) R$ 27,50"
            alt="Bolo de Cenoura com chocolate."
            typeAlt="Bolo."
          ></Card>

          <Card
            cookieURL={OvomaltineCake}
            cookieName="Bolo de Ovomaltine"
            ingredients={["milk", "wheat", "egg"]}
            type="cake"
            info="Cremosidade e massa fofinha de um jeito que você nunca pensou
            que iria precisar provar. Esse bolo é um papoco pro paladar!"
            price="(M) R$ 30,00"
            alt="Bolo de Ovomaltine."
            typeAlt="Bolo."
          ></Card>

          <Card
            cookieURL={BananaCake}
            cookieName="Bolo de Banana"
            ingredients={["wheat", "egg"]}
            type="cake"
            info="Bolo de banana (SEM LACTOSE) com canela feito com a receita secreta
            da família. Uma delícia, você tem que provar! ATENÇÃO: CONTÉM
            CANELA!"
            price="(M) R$ 22,50"
            alt="Bolo de Banana."
            typeAlt="Bolo."
          ></Card>
        </div>
        <div className="products_button_menu">
          <a
            className="button_menu"
            href="https://drive.google.com/file/d/1-3HicpDbg5NaUKUFZ7z6b6dt_Y4Qhyjm/view"
            target="blank"
          >
            Acessar o cardápio completo!
          </a>
        </div>
      </section>
    </>
  );
}
