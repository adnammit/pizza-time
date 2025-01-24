import { createBrowserRouter } from "react-router-dom";
import { menuLoader } from "./loaders";
import AppLayout from "../ui/AppLayout";
import Error from "../ui/Error";
import Menu from "../features/menu/Menu";
import Home from "../ui/Home";
import Cart from "../features/cart/Cart";
import Order from "../features/order/Order";
import User from "../features/user/User";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/user", element: <User /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      { path: "/order/new", element: <Order closeHour={0} openHour={0} /> },
      {
        path: "/order/:orderId",
        element: <Order closeHour={0} openHour={0} />,
      },
      // {
      //   path: '/order/new',
      //   element: <CreateOrder />,
      //   action: createOrderAction,
      // },
      // {
      //   path: '/order/:orderId',
      //   element: <Order />,
      //   loader: orderLoader,
      //   errorElement: <Error />,
      //   action: updateOrderAction,
      // },
    ],
  },
]);

export default router;
