import React from 'react';
import { AdminNavBar } from '../navbar/AdminNavBar.jsx';

export const AdminHome = (props) => {
    return (
        <div className='row'>
            <div className='col-sm-2'>
                <AdminNavBar />
            </div>
            <div className='col-sm-10'>
                <div className='content'>
                    <div className="container">
                        <h1>Welcome to Admin Mode</h1>
                        <p>You can create, read, update, delete products, categories, and orders here.</p>
                        <p>Click <b>View</b> for general view</p>
                        <p>Click <b>Products</b> for product system</p>
                        <p>Click <b>Categories</b> for category system</p>
                        <p>Click <b>Oders</b> for order system</p>
                    </div>
                </div>
            </div>
        </div>
    );
}