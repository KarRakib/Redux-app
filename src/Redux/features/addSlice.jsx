import {createSlice} from "@reduxjs/toolkit"
const initialState ={
    cart:[]
}
const addSlice = createSlice({
    name:'add',
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
            const exitingCart = state.cart.find(product=> product._id !== payload._id)
            if(exitingCart){
                exitingCart.quantity -= 1;
            }else{
                state.cart.push({...payload, quantity:1})
            }
        }
    }
})
export const {addToCart} =addSlice.actions
export default addSlice.reducer