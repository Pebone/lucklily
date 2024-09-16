import "./index.scss";

export default function Card(props) {
  let ingredients = props.ingredients;

  return (
    <section className="card_container">
      <div className="card_div_img">
        <img src={props.cookieURL}></img>
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
                  stroke="red"
                  className="card_ingredients_svg"
                  src={`./src/assets/icons/${ingredient}.svg`}
                ></img>
              );
            })}
          </div>
        </div>
        <div className="card_div_infos">
          <p className="card_div_info">{props.info}</p>
          <div className="card_div_footer">
            <img src={`./src/assets/icons/${props.type}.svg`}></img>
            <div>
              <p>{props.price}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
