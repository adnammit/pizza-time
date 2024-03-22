// import { NavLink } from "react-router-dom";

interface Props {
  name: string;
  soldOut: boolean;
  photoName: string;
  ingredients: string;
  price: number;
}

function Pizza({ name, soldOut, photoName, ingredients, price }: Props) {
  const pizzaObj = {};

  console.log(pizzaObj);

  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>

        {/* {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObj.price}</span>
        )} */}

        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
}

export default Pizza;
