import React from 'react';
import ProductForm from './ProductForm.jsx';
import ProductList from './ProductList.jsx';
import { AdminNavBar } from '../navbar/AdminNavBar.jsx';

export default class AdminProductPage extends React.Component {
    onAddProduct() {
        this.props.toggleForm();
        this.props.resetProduct();
    }
    render() {
        return (
            <div className='row'>
                <div className='col-sm-2'>
                    <AdminNavBar />
                </div>
                <div className={this.props.formDisplay ? 'col-sm-4 content' : null}>
                    {this.props.formDisplay ?
                        <ProductForm editProducts={this.props.editProducts}
                            categories={this.props.categories}
                            addProduct={(product) => this.props.addProduct(product)}
                            resetProduct={() => this.props.resetProduct()}
                            updateProduct={(product) => this.props.updateProduct(product)}
                            closeForm={() => this.props.closeForm()} />
                        : null}
                </div>

                <div className={this.props.formDisplay ? 'col-sm-6 content' : 'col-sm-9 content'}>
                    <button type='button' className='btn btn-primary mr-2' onClick={() => this.onAddProduct()}>
                        <span className='fa fa-plus'></span> Add Product
                            </button>

                    <ProductList products={this.props.products}
                        openEditForm={() => this.props.openEditForm()}
                        deleteProduct={(_id) => this.props.deleteProduct(_id)}
                        getProduct={(_id) => this.props.getProduct(_id)} />
                </div>
            </div>
        );
    }
}

