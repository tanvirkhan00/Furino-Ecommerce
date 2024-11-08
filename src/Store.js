import { configureStore } from '@reduxjs/toolkit'
import  CartReducer  from './Componenets/Slice/CartSlice'

export default configureStore({
  reducer: {
    cartItemsStore: CartReducer
  }
})