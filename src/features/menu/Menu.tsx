import { getPizzas } from "../../services/pizza";
import Pizza from "./Pizza";

function Menu() {
  const pizzas = getPizzas();
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza
                name={pizza.name}
                isSoldOut={pizza.soldOut}
                photoName={pizza.photoName}
                ingredients={pizza.ingredients}
                price={pizza.price}
                key={pizza.name}
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

export default Menu;
