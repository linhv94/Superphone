import React from 'react';
import { connect } from 'react-redux';
import './style/style-page.css';

//Admin components
import { AdminNavBar } from './admin/navbar/AdminNavBar.jsx';
import { AdminHome } from './admin/home/AdminHome.jsx';
import AdminCategoryPage from './admin/categories-components/AdminCategoryPage.jsx';
import AdminView from './admin/products-components/AdminView.jsx';
import AdminProductPage from './admin/products-components/AdminProductPage.jsx';
import AdminOrderPage from './admin/orders/AdminOrderPage.jsx';

//User Interface components
import { Header } from './user/components/Header.jsx';
import App from './user/components/App.jsx';
import { About } from './user/components/About.jsx';
import CheckoutPage from './shopping-cart/CheckoutPage.jsx';
import ProductDetail from './user/products/ProductDetail.jsx'

//actions for products
import {
    addProduct, updateProduct, deleteProduct, getProduct, resetProduct, fetchProducts
} from './action/products-actions.js';

//actions for categories
import {
    addCategory, updateCategory, deleteCategory, getCategory, resetCategory, fetchCategories
} from './action/categories-actions.js';

//actions for shopping cart
import {
    addNewCart, addToCart, deleteCartItem, resetCart, fetchCarts, deleteCart, updateCart, getCart, clearForm
} from './action/shopping-cart-actions.js';

//actions for form
import { toggleForm, closeForm, openEditForm } from './action/form-actions.js';

class Root extends React.Component {
    componentDidMount() {
        this.props.fetchProducts();
        this.props.fetchCategories();
        this.props.fetchCarts();
    }
    render() {
        let currentPath = window.location.pathname;
        let productURL = this.props.products.filter((p) => currentPath.includes(p._id))
        let idURL;
        for (let i = 0; i < productURL.length; i++) {
            if (productURL[i]._id !== '') {
                productURL = productURL[i];
                idURL = productURL._id
                break;
            }
            else idURL = null;
        }
        return (
            <div>
                <div><Header oneCart={this.props.oneCart} /></div>
                <div>
                    {/* use nested ternary condition to check the url */}
                    {currentPath.includes('/adminmode') ?
                        <AdminHome />

                        : currentPath.includes('/adminview') ?
                            <AdminView products={this.props.products}
                                categories={this.props.categories}
                                editProducts={this.props.editProducts} />

                            : currentPath.includes('/adminproduct') ?
                                <AdminProductPage products={this.props.products}
                                    editProducts={this.props.editProducts}
                                    categories={this.props.categories}
                                    formDisplay={this.props.formDisplay}
                                    addProduct={this.props.addProduct}
                                    resetProduct={this.props.resetProduct}
                                    deleteProduct={this.props.deleteProduct}
                                    getProduct={this.props.getProduct}
                                    updateProduct={this.props.updateProduct}
                                    toggleForm={this.props.toggleForm}
                                    closeForm={this.props.closeForm}
                                    openEditForm={this.props.openEditForm} />

                                : currentPath.includes('/admincategory') ?
                                    <AdminCategoryPage categories={this.props.categories}
                                        editCategories={this.props.editCategories}
                                        formDisplay={this.props.formDisplay}
                                        addCategory={this.props.addCategory}
                                        resetCategory={this.props.resetCategory}
                                        deleteCategory={this.props.deleteCategory}
                                        getCategory={this.props.getCategory}
                                        updateCategory={this.props.updateCategory}
                                        toggleForm={this.props.toggleForm}
                                        closeForm={this.props.closeForm}
                                        openEditForm={this.props.openEditForm} />

                                    : currentPath.includes('/about') ?
                                        <About />

                                        : currentPath.includes('/checkout') ?
                                            <CheckoutPage oneCart={this.props.oneCart}
                                                addToCart={this.props.addToCart}
                                                deleteCartItem={this.props.deleteCartItem}
                                                resetCart={this.props.resetCart}
                                                addNewCart={this.props.addNewCart} />

                                            : currentPath.includes(idURL) ?
                                                <ProductDetail product={productURL}
                                                    addToCart={this.props.addToCart} />

                                                : currentPath.includes('/adminorder') ?
                                                    <AdminOrderPage carts = {this.props.carts} 
                                                                    editCarts={this.props.editCarts}
                                                                    getCart={this.props.getCart}
                                                                    deleteCart={this.props.deleteCart} 
                                                                    updateCart={this.props.updateCart}
                                                                    clearForm={this.props.clearForm}/>

                                                    : <App
                                                        oneCart={this.props.oneCart} 
                                                        products={this.props.products}
                                                        categories={this.props.categories}
                                                        carts={this.props.carts}
                                                        addToCart={this.props.addToCart}
                                                        deleteCartItem={this.props.deleteCartItem}
                                                        addNewCart={this.props.addNewCart} />
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        //product states
        products: state.products,
        editProducts: state.editProducts,

        //category states
        categories: state.categories,
        editCategories: state.editCategories,

        //form state
        formDisplay: state.formDisplay,

        //cart state
        carts: state.carts,
        oneCart: state.oneCart,
        editCarts: state.editCarts
    };
};

const mapDispatchToProps = (dispatch) => {
    //dispatch actions by using imported action methods
    return {
        //dispatch actions for products
        fetchProducts: () => { dispatch(fetchProducts()) },
        addProduct: (product) => { dispatch(addProduct(product)) },
        resetProduct: () => { dispatch(resetProduct()) },
        deleteProduct: (_id) => {
            if (confirm(`Do you really want to delete ${_id}?`)) {
                dispatch(deleteProduct(_id));
            }
        },
        getProduct: (_id) => { dispatch(getProduct(_id)); },
        updateProduct: (product) => { dispatch(updateProduct(product)); },

        //dispatch actions for categories
        fetchCategories: () => { dispatch(fetchCategories()) },
        addCategory: (category) => { dispatch(addCategory(category)) },
        resetCategory: () => { dispatch(resetCategory()) },
        deleteCategory: (_id) => {
            if (confirm(`Do you really want to delete ${_id}?`)) {
                dispatch(deleteCategory(_id));
            }
        },
        getCategory: (_id) => { dispatch(getCategory(_id)); },
        updateCategory: (category) => { dispatch(updateCategory(category)); },

        //dispatch actions for admin product/category form 
        toggleForm: () => { dispatch(toggleForm()); },
        closeForm: () => { dispatch(closeForm()); },
        openEditForm: () => { dispatch(openEditForm()); },

        //dispatch actions for shopping cart
        fetchCarts: () => { dispatch(fetchCarts()); },
        addToCart: (product, quantity) => { dispatch(addToCart(product, 1)); },
        deleteCartItem: (id) => {
            if (confirm('Do you really want to delete?')) {
                dispatch(deleteCartItem(id));
            }
        },
        addNewCart: (cart) => { dispatch(addNewCart(cart)); },
        getCart: (_id) => { dispatch(getCart(_id)); },
        deleteCart: (_id) => { dispatch(deleteCart(_id)); },
        updateCart: (cart) => { dispatch(updateCart(cart)); },
        resetCart: () => { dispatch(resetCart()); },
        clearForm: () => { dispatch(clearForm()); }

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Root);
