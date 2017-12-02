import React from 'react';

export default class OrderDetail extends React.Component {
    calculateItemPrice(price, quantity) {
        return parseFloat(price) * parseFloat(quantity);
    }

    calculateTotal(){
        if(this.props.oneCart.length > 0) {
            let total = 0;
            for (let i = 0; i < this.props.oneCart.length; i++) {
                total += parseFloat(this.props.oneCart[i].product.price) * parseFloat(this.props.oneCart[i].quantity)
            }
            return total;
        }
    }

    render() {
        return (
            <div>
                <div className='table table-responsive'>
                    <table className='table'>
                        <thead className='thead-dark text-center'>
                            <tr>
                                <th></th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.oneCart.map((c, index) =>
                                <tr className='product-table' key={index}>
                                    <td>
                                        <img className='img4 img-responsive' src={c.product.imageUrl} />
                                        &nbsp;
                                            
                                    </td>
                                    <td>{c.product.name}</td>
                                    <td>${c.product.price}</td>
                                    <td>{c.quantity}</td>
                                    <td> ${this.calculateItemPrice(c.product.price, c.quantity)}</td>
                                    <td>
                                        <i className='fa fa-times fa-2x' onClick={() => this.props.deleteCartItem(c.product.id)} aria-hidden="true"></i>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td><b>Total</b></td>
                                <td><b>${this.calculateTotal()}</b></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

        );
    }
}