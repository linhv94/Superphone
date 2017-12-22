import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Root from './Root.jsx';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import products from './reducers/products/products.js';
import editProducts from './reducers/products/editProducts.js';
import categories from './reducers/categories/categories.js';
import editCategories from './reducers/categories/editCategories.js';
import formDisplay from './reducers/form/formDisplay';
import {carts, oneCart} from './reducers/shopping-cart/carts.js';
import {editCarts} from './reducers/shopping-cart/editCarts.js'
import {loadState, saveState} from './localStorage.js';
// import { createLogger, logger } from 'redux-logger';

//use localStorage to persist state after reset the page
const persistedState = loadState();

const store =  createStore(
    combineReducers({
        products, 
        editProducts, 
        formDisplay, 
        categories, 
        editCategories,
        carts,
        oneCart,
        editCarts
    }), 
    persistedState,
    applyMiddleware(thunk));

//only apply for the Cart (listen to changes in oneCart)
store.subscribe(() => {
    saveState({oneCart: store.getState().oneCart});
});

ReactDOM.render(
    <Provider store={store}>
    <Root />
    </Provider>
    , document.getElementById('app')

)

