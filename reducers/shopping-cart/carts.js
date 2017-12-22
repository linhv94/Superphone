import React from 'react';

//oneCart is used for add and delete items in shopping cart
//reset the state if the order is complete
export const oneCart = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            let index = findProductInCart(state, action.payload.product);
            //if the product already exists in the cart, add 1 for quantity
            if (index !== -1) {
                state[index].quantity += action.payload.quantity;
                return [...state];
            }
            //if not add the product to the cart
            else {
                let newState = [...state, action.payload];
                console.log(newState);
                return newState;
            }
        case 'RESET_CART': {
            state = [];
            console.log(state);
            return state;
        }
        case 'DELETE_CART_ITEM':
            return state.filter((c) => c.product.id !== action.payload);
        default:
            return state;
    }
};

//check if a product exist in the cart or not
const findProductInCart = (cart, product) => {
    if (cart.length > 0) {
        console.log(cart)
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                return i
            }
        }
    }
    return -1;
}

//carts reducer is not in the requirement, save it for later assignment
export const carts = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CART_SUCCESS':
            state = action.payload;
            return state;
        case 'ADD_NEW_CART':
            return [...state, action.payload]
        case 'DELETE_CART':
            return state.filter((c) => c._id !== action.payload)
        case 'UPDATE_CART':
            return state.map((c) => c._id !== action.payload._id ? c : action.payload)
        default:
            return state;
    }
}
