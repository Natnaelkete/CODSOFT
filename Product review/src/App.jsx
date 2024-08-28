import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout, Error, Products, Checkout, Orders } from "./Pages/index";

import { ThemeProvider } from "./ui/useThemetoggler";

import Details from "./component/products/Details";
import { ProductProvider } from "./component/products/productProvider";
import Carts from "./Pages/Cart";
import { SelectorProvider } from "./component/products/SelectorProvidor";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SelectorProvider>
        <ProductProvider>
          <ThemeProvider>
            <HomeLayout />
          </ThemeProvider>
        </ProductProvider>
      </SelectorProvider>
    ),
    errorElement: <Error />,
    children: [
      { index: true, element: <Products /> },
      { path: "/cart", element: <Carts /> },
      { path: "/product/:productId", element: <Details /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/orders", element: <Orders /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
