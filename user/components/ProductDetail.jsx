import React from 'react';

export default class ProductDetail extends React.Component {
    render() {
        return (
            <div className='content'>
                <div className='row mr-2'>
                    <div className='col-sm-4'>
                        <img className='img1 img-responsive'
                            src={this.props.product.imageUrl}
                            alt={this.props.product.name} />
                    </div>
                    <div className='col-sm-2'></div>
                    <div className='col-sm-5'>
                        <div>
                            <h4>{this.props.product.name}</h4>
                            <h5>${this.props.product.price}</h5>
                            <p><b>Brand:</b> {this.props.product.brand}</p>
                            <p><b>Producer:</b> {this.props.product.producer}</p>
                            <i className='fa fa-cart-plus fa-2x icon icon-wrapper mr-2' onClick={() => this.props.addToCart(this.props.product)}>
                                    <span className='fix-editor'></span></i>
                        </div>
                    </div>

                </div>
                <div className='container-fluid product-description'>
                <ul className='nav nav-tabs'>
                    <li className='nav-item'>
                        <a className='nav-link active' href='#description'>Description</a>
                    </li>
                </ul>
                <div className='tab-content'>
                    <div className='tab-pane active container' id='#description'>
                        <p>{this.props.product.description}</p>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}