import React from 'react';

export const AdminNavBar = (props) => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <nav className='col-sm-1 hidden-xs-down bg-faded sidebar'>
          <ul className='nav nav-pills flex-column'>
            <li className='nav-item'>
              <a className='nav-link active' href='/adminmode'> Home </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/adminview'> View </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/adminproduct'> Products </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/admincategory'> Categories </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/adminorder'> Orders </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
