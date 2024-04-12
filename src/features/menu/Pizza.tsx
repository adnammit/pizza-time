
interface Props {
  name: string;
  isSoldOut: boolean;
  photoName: string;
  ingredients: string;
  price: number;
}

function Pizza({
  name,
  isSoldOut: soldOut = false,
  photoName,
  ingredients,
  price,
}: Props) {
  const getClass = () => {
    return soldOut ? "sold-out" : "";
  };

  return (
    <li className={`pizza ${getClass()}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
}

export default Pizza;
