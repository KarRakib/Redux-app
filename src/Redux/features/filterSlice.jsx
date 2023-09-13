import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inStock: true,
    brands: [],
    keyword: '',
}
const filterSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleStock: (state) => {
            state.inStock = !state.inStock
        },
        toggleBrands: (state, { payload }) => {
            console.log(payload);
            if (!state.brands.includes(payload)) {
                state.brands.push(payload); // Add the brand
            } else {
                state.brands = state.brands.filter(brand => brand !== payload); // Remove the brand
            }
        },
        changeKeyword:(state,{payload})=>{
            state.keyword = payload
        }
        

    }
})
export const { toggleStock, toggleBrands,changeKeyword } = filterSlice.actions
export default filterSlice.reducer;