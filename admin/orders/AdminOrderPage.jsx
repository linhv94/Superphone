import React from 'react';
import { AdminNavBar } from '../navbar/AdminNavBar.jsx';
import OrderDetail from './OrderDetail.jsx';
import OrderList from './OrderList.jsx';


export default class AdminOrderPage extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className='col-sm-1'>
                    <AdminNavBar />
                </div>
                <div className='col-sm-5 mt-30'>
                    <OrderList  carts={this.props.carts}
                                deleteCart={this.props.deleteCart}
                                getCart={this.props.getCart}/>
                </div>
                <div className='content col-sm-5 mt-30'>
                    <OrderDetail editCarts={this.props.editCarts}
                                 updateCart={this.props.updateCart}
                                 clearForm={this.props.clearForm}/>
                </div>
            </div>
        );
    }
}