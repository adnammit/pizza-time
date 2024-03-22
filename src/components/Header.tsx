// import { NavLink } from "react-router-dom";

function Header() {
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
    // <nav>
    //   <ul>
    //     <li>
    //       <NavLink to="/">Home</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/product">Product</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/pricing">Pricing</NavLink>
    //     </li>
    //   </ul>
    // </nav>
  );
}

export default Header;
