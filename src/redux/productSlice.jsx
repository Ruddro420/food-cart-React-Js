import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
    productData: [],
    userInfo: null,
    payment: [],
}

export const productSlice = createSlice({
    name: 'foodCart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const check = state.productData.find(item => item.id === action.payload.id)
            if (check) {
                toast.error('already this product in cart')
            } else {
                state.productData.push(action.payload)
                toast.success('add to cart successfully!')
            }
        },
        increment: (state, action) => {
            const check = state.productData.find(item => item.id === action.payload.id)
            if (check) {
                check.quantity = check.quantity + 1
            }
        },
        decrement: (state, action) => {
            const check = state.productData.find(item => item.id === action.payload.id)
            if (check.quantity === 1) {
                check.quantity = 1
            } else {
                check.quantity = check.quantity - 1
            }
        },
        removeCart: (state, action) => {
            state.productData = state.productData.filter(item => item.id !== action.payload.id)
        },
        addUser: (state, action) => {
            state.userInfo = action.payload
        },
        signOut: (state) => {
            state.userInfo = null;
        },
        payment: (state, action) => {
            state.payment.push(action.payload)
            state.productData = []
        },

        clearData: (state) => {
            state.productData = [];
            state.userInfo = null;
            state.payment = [];
        }
    },
})

export const { addToCart, increment, decrement, removeCart, addUser, signOut, payment, clearData } = productSlice.actions

export default productSlice.reducer