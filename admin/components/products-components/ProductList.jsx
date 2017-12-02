import React from 'react';

export default class ProductList extends React.Component {
    handleClick(_id) {
        this.props.getProduct(_id);
        this.props.openEditForm();
    }

    render() {
        return (
            <div>
                <div className='row mt-15'>
                    <div className='col-sm-12'>
                        <div className='table table-responsive'>
                            <table className='table table-striped table-hover table-sm'>
                                <thead className='thead-dark text-center'>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Description</th>
                                        <th>Brand</th>
                                        <th>Producer</th>
                                        <th>Image URL</th>
                                        <th>Category</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.products.map((p, index) =>
                                        <tr className='text-center' key={index}>
                                            <td>{p.id}</td>
                                            <td>{p.name}</td>
                                            <td>{p.price}</td>
                                            <td>{p.description}</td>
                                            <td>{p.brand}</td>
                                            <td>{p.producer}</td>
                                            <td><img className='img2 img-responsive' src={p.imageUrl} /></td>
                                            <td>{p.productType}</td>
                                            <td className='text-center'>
                                                <button type='button' className='btn btn-info'
                                                    onClick={() => this.handleClick(p._id)}>
                                                    <span className='fa fa-pencil-square-o'></span> Edit
                                            </button>
                                                &nbsp;
                                            <button type='button' className='btn btn-danger'
                                                    onClick={() => this.props.deleteProduct(p._id)}>
                                                    <span className='fa fa-trash-o'></span> Delete
                                            </button>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}