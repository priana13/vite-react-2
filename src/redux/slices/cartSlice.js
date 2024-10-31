import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: [
             {id: 1, qty: 4}
        ]
    },
    reducers: {
        addToCart : (state, action) => {
            const itemOnCart = state.data.find((item) => item.id === action.payload.id);

            if(itemOnCart){
                
                itemOnCart.qty++;

            }else{

                state.data.push(action.payload);
            }

           
        },
    },
    
})


export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;