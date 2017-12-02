import React from 'react';
import { countItems } from '../../reducers/shopping-cart/carts.js'


export class Header extends React.Component {
    //count items in the cart, so it can display on the top of the page
    handleCountItem() {
        let countItem = 0;
        if (this.props.oneCart.length > 0) {
            for (let i = 0; i < this.props.oneCart.length; i++) {
                countItem += this.props.oneCart[i].quantity
            }
        }
        return countItem;
    }
    render() {
        return (
            <nav className='navbar navbar-inverse bg-dark fixed-top navbar-expand-md user-header'>
                <a className='navbar-brand text-white'>SuperPhone</a>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item active'>
                            <a className='nav-link' href='/home'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='/about'>About Us</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='/adminmode'>Admin Mode</a>
                        </li>
                    </ul>
                    <form className='form-inline mt-2 mt-md-0'>
                        <input className='form-control mr-sm-2' type='text' placeholder='(Not implemented yet)' />
                        <button className='btn btn-primary my-2 my-sm-0 mr-5' type='submit'>Search</button>
                    </form>
                    <div className='inline'>
                        <a className='fa fa-shopping-cart fa-2x text-white' href='/checkout'>
                            <span id='cartCount' className='badge badge-pill badge-default'>{this.handleCountItem()}</span>
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}