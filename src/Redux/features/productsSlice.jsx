import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteProduct, getProduct, postProduct } from "./api/productsApi";
const initialState = {
    products: [],
    isLoading: true,
    isError: false,
    isSuccess: false,
    error: "",
} 
export const getProducts = createAsyncThunk("products/ getProduct", async () => {
    const products = getProduct()
    return products
})
export const postProducts = createAsyncThunk("products/ postProducts", async (data) => {
    console.log('data', data);
    const products = postProduct(data)
    return products
})
export const deleteProducts = createAsyncThunk("products/ deleteProducts", async (id) => {
    console.log('data', id);
    const products = deleteProduct(id)
    return products
})
const productSlice = createSlice({
    name: "products",
    initialState,
  
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.error = '';
        }).addCase(getProducts.fulfilled,(state,{payload})=>{
            console.log(payload);
            state.isLoading = false;
            state.isError = false;
            state.products= payload;
        }).addCase(getProducts.rejected,(state, actions)=>{
            state.isLoading = false;
            state.isError = true;
            state.error = actions.error.message;
        }).addCase(postProducts.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.error = '';
        }).addCase(postProducts.fulfilled,(state)=>{
           state.isSuccess=true;
            state.isLoading = false;
            state.isError = false;          
        }).addCase(postProducts.rejected,(state, actions)=>{
            state.isSuccess=false;
            state.isLoading = false;
            state.isError = true;
            state.error = actions.error.message;
        }).addCase(deleteProducts.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.error = '';
        }).addCase(deleteProducts.fulfilled,(state)=>{
           state.isSuccess=true;
            state.isLoading = false;
            state.isError = false;          
        }).addCase(deleteProducts.rejected,(state, actions)=>{
            state.isSuccess=false;
            state.isLoading = false;
            state.isError = true;
            state.error = actions.error.message;
        })

    }
})

export default productSlice.reducer