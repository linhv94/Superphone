import React from 'react';
import { AdminNavBar } from '../header/AdminNavBar.jsx';

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
                        <p>You can create, read, update, and delete here.</p>
                        <p>Click <b>View</b> for general view</p>
                        <p>Click <b>Product Management</b> for product system</p>
                        <p>Click <b>Category Management</b> for category system</p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    );
}