// reducer

import { legacy_createStore } from "redux";

const cardReducer = (state = {    
    cart : [{id:1,qty:2}],
}, action)=>{

    switch(action.type){
        case "ADD_TO_CART" :
            return {
                ...state,
                cart: [...state.cart , action.payload]
            }
        default:
            return state;
    }

}

// store 
// menghilangkan coret createStore yang sudah depreceted => legacy_createStore
const store = legacy_createStore(cardReducer);

console.log('on create store:' , store.getState());

// subscribe
store.subscribe(() => {
    console.log("Cart berubah: " , store.getState());
})

// dispatch
const action1 = {type:"ADD_TO_CART",payload:{id:2,qty:20}};
store.dispatch(action1);

const action2 = {type:"ADD_TO_CART",payload:{id:3,qty:10}};
store.dispatch(action2);


