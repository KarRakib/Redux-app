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
        }
        

    }
})
export const { toggleStock, toggleBrands } = filterSlice.actions
export default filterSlice.reducer;