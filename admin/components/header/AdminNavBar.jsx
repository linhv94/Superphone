import React from 'react';

export const AdminNavBar = (props) => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <nav className='col-sm-2 col-md-2 hidden-xs-down bg-faded sidebar'>
          <ul className='nav nav-pills flex-column'>
            <li className='nav-item'>
              <a className='nav-link active' href='/adminmode'> Home </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/adminview'> View </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/adminproduct'>Product Manangement</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='admincategory'>Category Manangement</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
