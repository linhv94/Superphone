import React from 'react';
import {Carousel} from './Carousel.jsx';
import ProductPage from '../products/ProductPage.jsx';


export default class App extends React.Component {
    render(){
        return(
            <div>
                <Carousel />
                <ProductPage products={this.props.products}
                            categories={this.props.categories}
                            addNewCart={this.props.addNewCart}
                            addToCart ={this.props.addToCart} />
            </div>
        );
    }
}
