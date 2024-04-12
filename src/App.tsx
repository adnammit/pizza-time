import router from "./services/router";
import { RouterProvider } from "react-router-dom";

function App() {
  return <RouterProvider router={router} />;
  // return (
  //   <>
  //     <div className="container">
  //       <Header />
  //       <Menu />
  //       <Footer />
  //     </div>
  //   </>
  // );
}

export default App;
