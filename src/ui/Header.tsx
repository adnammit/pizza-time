import { Link } from 'react-router-dom';

function Header() {
  const style = {};

  return (
    <header className="header">
      <Link to="/"><h1 style={style}>Fast React Pizza Co.</h1></Link>
    </header>
  );
}

export default Header;
