import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../component/cart/CartSlice";
import checkoutReducer from "../component/checkout/checkoutSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    checkout: checkoutReducer,
  },
});

export default store;
