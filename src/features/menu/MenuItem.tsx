import { formatCurrency } from "../../utils/helpers";

interface Props {
  name: string;
  isSoldOut: boolean;
  // photoName: string;
  imageUrl: string;
  ingredients: string[];
  price: number;
}

export default function MenuItem({
  name,
  isSoldOut: soldOut = false,
  imageUrl,
  ingredients,
  price,
}: Props) {
  const getClass = () => {
    return soldOut ? "sold-out" : "";
  };

  return (
    <li className={`pizza ${getClass()}`}>
      <img src={imageUrl} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients.join(", ")}</p>
        {/* <p>{ingredients}</p> */}
        <span>{soldOut ? "SOLD OUT" : price}</span>
        <div>{!soldOut ? <p>{formatCurrency(price)}</p> : <p>Sold out</p>}</div>
      </div>
    </li>
  );
}
