import { useLoaderData } from "react-router-dom";
// import { getPizzas } from "../../services/pizza";
import MenuItem from "./MenuItem";
import { MenuItemDto } from "./menu";

export default function Menu() {
  // const pizzas = getPizzas();

  const items = useLoaderData() as MenuItemDto[];
  console.log(items);
  // const pizzas = menu?.pizzas ?? [];
  // console.log(menu);

  return (
    <main className="menu">
      <h2>Our menu</h2>
      {items.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {items.map((item) => (
              <MenuItem
                name={item.name}
                isSoldOut={item.soldOut}
                imageUrl={item.imageUrl}
                // photoName={item.photoName}
                ingredients={item.ingredients}
                price={item.unitPrice}
                key={item.name}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}
