import Milk from "../../assets/icons/milk.svg";
import Wheat from "../../assets/icons/wheat.svg";
import Egg from "../../assets/icons/egg.svg";
import Cookie from "../../assets/icons/cookie.svg";
import Cake from "../../assets/icons/cake.svg";
import "./index.scss";

export default function Card(props) {
  let ingredients = props.ingredients;

  const ingredientIcons = {
    milk: Milk,
    wheat: Wheat,
    egg: Egg,
  };

  const foodType = {
    cookie: Cookie,
    cake: Cake,
  };

  return (
    <section className="card_container">
      <div className="card_div_img">
        <img className="card_img" src={props.cookieURL} alt={props.alt}></img>
      </div>
      <div className="card_infos">
        <div className="card_div_name_ingredients">
          <div className="card_div_cookieName">
            <p>{props.cookieName}</p>
          </div>
          <div className="card_div_ingredients">
            {ingredients.map((ingredient) => {
              return (
                <img
                  key={ingredient}
                  className="card_ingredients_svg"
                  src={ingredientIcons[ingredient]}
                  alt={ingredient}
                ></img>
              );
            })}
          </div>
        </div>
        <div className="card_div_infos">
          <p className="card_div_info">{props.info}</p>
          <div className="card_div_footer">
            <img src={foodType[props.type]} alt={props.typeAlt}></img>
            <div className="card_div_price">
              <p>{props.price}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
