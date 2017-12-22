import React from 'react';
import {GridView} from '../components/GridView.jsx';
import {ListView} from '../components/ListView.jsx';

export default class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentDisplay: props.products, viewType: 'grid' }
    }

    componentWillReceiveProps(props) {
        this.setState({ currentDisplay: props.products });
    }


    handleFilterByCategory(id) {
        let productsSameType = this.props.products.filter((p) => p.productType === id);
        this.setState({ currentDisplay: productsSameType });
    }

    handleFilterByPrice(filter) {
        if (filter === 'PRICE_LOW_TO_HIGH') {
            let lowToHigh = this.props.products.sort(function (a, b) {
                return parseFloat(a.price) - parseFloat(b.price);
            });
            this.setState({ currentDisplay: lowToHigh });
        }
        else if (filter === 'PRICE_HIGH_TO_LOW') {
            let highToLow = this.props.products.sort(function (a, b) {
                return parseFloat(b.price) - parseFloat(a.price);
            });
            this.setState({ currentDisplay: highToLow });
        }
    }


    handleView(type) {
        if (type === 'list') {
            this.setState({ viewType: 'list' })
        }
        else {
            this.setState({viewType: 'grid'})
        }
    }

    render() {
        return (
            <div className='container-fluid mt-30'>
                <div className='row'>
                    <div className='col-sm-2'>
                        <div className='card filter-card'>
                            <div className='card-header bg-dark text-white'>
                                <h4 className='card-title'>Filter By</h4>
                            </div>
                            <div className='card-body'>
                                <div className='card-header'>
                                    <h5 className='card-title'>
                                        <a data-toggle='collapse' href='#byCategory'>
                                            <i className='indicator fa fa-caret-down'></i> Category
							            </a>
                                    </h5>
                                </div>
                                <div id='byCategory' className='card-collapse collapse in' >
                                    <ul className='list-group'>
                                        {this.props.categories.map((c, index) =>
                                            <li key={index} className='list-group-item'>
                                                <button className='unstyled-button' onClick={() => this.handleFilterByCategory(c.id)}>
                                                    {c.name}
                                                </button>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                                <div className='card-header'>
                                    <h5 className='card-title'>
                                        <a data-toggle='collapse' href='#byPrice'>
                                            <i className='indicator fa fa-caret-down'></i> Price
							            </a>
                                    </h5>
                                </div>
                                <div id='byPrice' className='card-collapse collapse in' >
                                    <ul className='list-group'>
                                        <li className='list-group-item'>
                                            <button className='unstyled-button' onClick={() => this.handleFilterByPrice('PRICE_LOW_TO_HIGH')}>
                                                Low To High
                                            </button>
                                        </li>
                                        <li className='list-group-item'>
                                            <button className='unstyled-button' onClick={() => this.handleFilterByPrice('PRICE_HIGH_TO_LOW')}>
                                                High To Low
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-10'>
                            <div className='btn-group'>
                                <button type='button' className='btn btn-secondary' onClick={() => this.handleView('grid')}>
                                Grid <span className='fa fa-th'></span>
                                </button>
                                <button type='button' className='btn btn-secondary' onClick={() => this.handleView('list')}>
                                List <span className='fa fa-th-list'></span>
                                </button>
                            </div>
                        <div className='mt-30'>
                            {this.state.viewType === 'list' ? 
                            <ListView currentDisplay={this.state.currentDisplay}
                                        addToCart = {this.props.addToCart}/> 
                            :
                            <GridView currentDisplay={this.state.currentDisplay}
                                     addToCart = {this.props.addToCart}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}