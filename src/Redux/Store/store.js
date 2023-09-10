import {configureStore} from '@reduxjs/toolkit'
import addSlice from '../features/addSlice'
const store = configureStore({
    reducer:{
        addSlice: addSlice
    }
})

export default store