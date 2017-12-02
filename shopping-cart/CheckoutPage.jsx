import React from 'react';
import OrderDetail from './OrderDetail.jsx';
import CustomerDetail from './CustomerDetail.jsx'

export default class CheckoutPage extends React.Component {
    render() {
        return (
            <div className='content'>
                <div className='row'>
                    <div className='col-sm-1'></div>
                    <div className='col-sm-4'>
                        <CustomerDetail oneCart={this.props.oneCart}
                                        addNewCart={this.props.addNewCart}
                                        resetCart={this.props.resetCart}/>
                    </div>
                    <div className='col-sm-6'>
                        <OrderDetail oneCart={this.props.oneCart}
                            addToCart={this.props.addToCart}
                            deleteCartItem={this.props.deleteCartItem} />
                    </div>
                    <div className='col-sm-1'></div>
                </div>
            </div>
        );
    }

}