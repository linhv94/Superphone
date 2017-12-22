import React from 'react';
import { AdminNavBar } from '../navbar/AdminNavBar.jsx';


export default class OrderList extends React.Component {
    
    handleDelete(_id){
        if(confirm(`Do you really want to delete ${_id}?`)){
            this.props.deleteCart(_id);
        }
    }
    render() {
        return (
            <div className='table table-responsive'>
                <table className='table table-sm'>
                    <thead className='thead-dark text-center'>
                        <tr>
                            <th>ID</th>
                            <th>Customer</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.carts.map((c, index) =>
                            <tr className='text-center' key={index}>
                                <td>{c._id}</td>
                                <td>{c.customer}</td>
                                <td>{c.status}</td>
                                <td>
                                    <button type='button' className='btn btn-danger'
                                            onClick={() => this.handleDelete(c._id)}>
                                                    <span className='fa fa-trash-o'></span> Delete
                                            </button>
                                            &nbsp;
                                    <button type='button' className='btn btn-info'
                                            onClick={() => this.props.getCart(c._id)}>
                                            <span className='fa fa-pencil-square-o'></span> Edit
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}