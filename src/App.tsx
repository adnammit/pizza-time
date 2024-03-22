// import { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

export default App;
