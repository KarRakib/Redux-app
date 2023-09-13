import {configureStore} from '@reduxjs/toolkit'
import cartSlice from '../features/cartSlice'
import filterSlice from '../features/filterSlice'
import productsSlice from '../features/productsSlice'
const store = configureStore({
    reducer:{
        cart: cartSlice,
        filters: filterSlice,
        products : productsSlice,
    }
})

export default store