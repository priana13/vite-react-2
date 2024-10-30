import {configureStore , createAction , createReducer} from "@reduxjs/toolkit";

// const initialState = {
//     cart: []
// }

// const cartReducer = createReducer(initialState , (builder) => {

//     builder.addCase('ADD_TO_CART' , (state, action) => {
//         state.cart.push(action.payload);
//     })

// });

const addToCart = createAction('ADD_TO_CART');  

const cartReducer = createReducer([],(builder) => {

    builder.addCase(addToCart , (state, action) => {
        state.push(action.payload);
    })

});


const login = createAction('CREATE_SESSION');  

const loginReducer = createReducer({status:false},(builder) => {

    builder.addCase(login , (state, action) => {
        state.status = true;
    })

});


const store = configureStore({
    reducer : {
        cart: cartReducer,
        login: loginReducer
    },
})


store.subscribe(() => {
    console.log("Cart berubah: " , store.getState());
})


store.dispatch( addToCart({id:2,qty:20}) );

store.dispatch( addToCart({id:3,qty:20}) );
store.dispatch( login() );

