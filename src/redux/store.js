import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";


const store = configureStore({

    reducer : { cart: cartReducer },

});

// console.log("On create store" , store.getState());

store.subscribe( () => {

    localStorage.setItem('cart' , JSON.stringify(store.getState().cart.data)  );

//    console.log( store.getState().cart.data )

} );

export default store;



