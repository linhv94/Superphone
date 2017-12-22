import React from 'react';


export default class CustomerDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: '',
            address: '',
            email: '',
            phone: '',
            products: '',
            total: 0
        };
    }

    componentWillReceiveProps(props){
        if(props.oneCart.length > 0) {
            var totalPrice = 0;
            for (let i = 0; i < props.oneCart.length; i++) {
                totalPrice += parseFloat(props.oneCart[i].product.price) * parseFloat(props.oneCart[i].quantity)
            }
        }
        this.setState({products: props.oneCart, total: totalPrice});
    }

    handleChange(e) {
        let changes = {};
        changes[e.target.name] = e.target.value;
        this.setState(changes);
    }

    validateInfo() {
        let emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let phoneformat = /^\d{10}$/;
        let valid = true;
        if (this.state.customer.trim() === '') {
            alert('Full Name must not be empty');
            valid = false;
        }
        if (this.state.address.trim() === '') {
            alert('Address must not be empty');
            valid = false;
        }
        if (this.state.email.trim() === '') {
            alert('Email must not be empty');
            valid = false;
        }
        else if (!this.state.email.match(emailformat)) {
            alert('Invalid email address');
            valid = false;
        }
        if (this.state.phone.trim() === '') {
            alert('Phone must not be empty');
            valid = false;
        }
        else if (!this.state.phone.match(phoneformat)) {
            alert('Invalid phone number')
            valid = false;
        }
        if(this.state.products.length <= 0) {
            alert('There are no items in cart')
            valid = false;
        }
        return valid;
    }

    handleSubmitOrder() {
        if (this.validateInfo()) {
            this.props.addNewCart(this.state);
            this.setState({
                customer: '',
                address: '',
                email: '',
                phone: '',
                products: this.props.resetCart(),
                total: 0
            });
            alert('Your order is submitted. Thank you for choosing SuperPhone.')
        }
    }
    render() {
        return (
            <div className='card'>
                <div className='card-header text-center bg-dark text-white'>
                    <b>Customer Information</b>
                </div>
                <div className='card-body'>
                    <form>

                        <div className='form-group'>
                            <label>Full Name</label>
                            <input type='text' name='customer' className='form-control' placeholder='Full Name'
                                value={this.state.customer} onChange={this.handleChange.bind(this)} />
                        </div>
                        <div className='form-group'>
                            <label>Address</label>
                            <input type='text' name='address' className='form-control' placeholder='Address'
                                value={this.state.address} onChange={this.handleChange.bind(this)} />
                        </div>
                        <div className='form-group'>
                            <label>Email</label>
                            <input type='text' name='email' className='form-control' placeholder='john@gmail.com'
                                value={this.state.email} onChange={this.handleChange.bind(this)} />
                        </div>
                        <div className='form-group'>
                            <label>Phone</label>
                            <input type='text' name='phone' className='form-control' placeholder='10 digits only'
                                value={this.state.phone} onChange={this.handleChange.bind(this)} />
                        </div>

                    </form>
                    <br />
                    <button className='btn btn-primary inline mr-1'
                        onClick={this.handleSubmitOrder.bind(this)}>
                        Submit Order
                        </button>
                </div>
            </div>
        );
    }
}