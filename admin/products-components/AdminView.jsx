import React from 'react';
import { AdminNavBar } from '../navbar/AdminNavBar.jsx';

export default class AdminView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentDisplay: this.props.products }
    }

    componentWillReceiveProps(props) {
        this.setState({ currentDisplay: this.props.products });
    }

    handleViewAll() {
        this.setState({ currentDisplay: this.props.products });
    }
    handleFilterByCategory(id) {
        let productsSameType = this.props.products.filter((p) => p.productType === id);
        this.setState({ currentDisplay: productsSameType });
    }

    handleFilterByPrice() {
        if (filter === 'PRICE_LOW_TO_HIGH') {
            let lowToHigh = this.props.products.sort(function (a, b) {
                return a.price - b.price;
            });
        }
        else if (filter === 'PRICE_HIGH_TO_LOW') {
            let lowToHigh = this.props.products.sort(function (a, b) {
                return a.price - b.price;
            });
        }
    }

    render() {
        return (
            <div className='row'>
                <div className='col-sm-2'>
                    <AdminNavBar />
                </div>
                <div className='content col-sm-10'>
                    <div>
                        <div className='btn-group btn-group-md'>
                            <button type='button' className='btn btn-primary'
                                onClick={() => this.handleViewAll()}>View All Products</button>
                            <div className='btn-group btn-group-md'>
                                <button type='button' className='btn btn-primary dropdown-toggle' data-toggle='dropdown'>
                                    View By Types
                            </button>
                                <div className='dropdown-menu'>
                                    {this.props.categories.map((c, i) =>
                                        <a key={i} className='dropdown-item' role='button'
                                            onClick={() => this.handleFilterByCategory(c.id)}>{c.name}
                                        </a>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-15 ml-2 mr-2'>
                        {this.state.currentDisplay.map((p, index) =>
                            <li className='list-group-item col-sm-4' key={index}>
                                <p>Product ID: {p.id}</p>
                                <h5>{p.name}</h5>
                                <p>Product Price: ${p.price}</p>
                                <p>Product Description: {p.description}</p>
                                <p>Product Brand: {p.brand}</p>
                                <p>Product Producer: {p.producer}</p>
                                <img className='img1 img-responsive' alt={p.name} src={p.imageUrl} />
                            </li>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}