import {createSlice} from "@reduxjs/toolkit"
const initialState ={
    cart:[],
}
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,{payload})=>{
            const exitingCart = state.cart.find(product=> product._id === payload._id)
            if(exitingCart){
                exitingCart.quantity += 1;
            }else{
                state.cart.push({...payload, quantity:1})
            }
        },
        deleteToCart:(state,{payload})=>{
            const exitingCart = state.cart.find(product=> product._id === payload._id)

            if(exitingCart){
                exitingCart.quantity -= 1;
            }if(exitingCart.quantity ===0){
                state.cart = state.cart.filter(product=> product._id !== payload._id)
            }
        }
    }
})
export const {addToCart, deleteToCart} = cartSlice.actions
export default cartSlice.reducer