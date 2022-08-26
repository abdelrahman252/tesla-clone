import { configureStore } from '@reduxjs/toolkit'
import carReducer from "./CarSlice"

export default configureStore({
    reducer: {
        car: carReducer,
    },
})