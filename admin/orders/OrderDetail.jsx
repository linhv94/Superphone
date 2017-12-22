import React from 'react';

export default class OrderDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            customer: '',
            address: '',
            email: '',
            phone: '',
            products: '',
            status: '',
            total: 0
        }
    }

    componentWillReceiveProps(props) {
        this.setState(props.editCarts);
    }

    handleChange(e) {
        let change = {};
        change[e.target.name] = e.target.value;
        this.setState(change);
    }

    handleSave(e) {
        e.preventDefault();
        this.props.updateCart(this.state);
        this.props.clearForm();
    }

    handleReset(e) {
        e.preventDefault();
        this.props.clearForm();
    }

    render() {
        return (
            <div>
                <div className='card'>
                    <div className='card-header text-center bg-primary text-white'>
                        Order Detail
                    </div>

                    <div className='card-body'>
                        <form>
                            <div className='form-group'>
                                <label>ID</label>
                                <input type='text' name='_id' className='form-control' placeholder='ID'
                                    value={this.state._id} />
                            </div>
                            <div className='form-group'>
                                <div className='form-row'>
                                    <div className='col'>
                                        <label>Customer Name</label>
                                        <input type='text' name='customer' className='form-control' placeholder='Customer Name'
                                            value={this.state.customer} onChange={this.handleChange.bind(this)} />
                                    </div>

                                    <div className='col'>
                                        <label>Address</label>
                                        <input type='text' name='address' className='form-control' placeholder='Address'
                                            value={this.state.address} onChange={this.handleChange.bind(this)} />
                                    </div>
                                </div>
                            </div>

                            <div className='form-group'>
                                <div className='form-row'>
                                    <div className='col'>
                                        <label>Phone</label>
                                        <input type='text' name='phone' className='form-control' placeholder='Phone'
                                            value={this.state.phone} onChange={this.handleChange.bind(this)} />
                                    </div>

                                    <div className='col'>
                                        <label>Email</label>
                                        <input type='text' name='email' className='form-control' placeholder='Email'
                                            value={this.state.email} onChange={this.handleChange.bind(this)} />
                                    </div>
                                </div>
                            </div>
                            <div className='form-check form-check-inline'>
                                <label className='form-check-label'>
                                    <input className='form-check-input' type='radio' name='status' value='New'
                                        checked={this.state.status == 'New'} onChange={this.handleChange.bind(this)} />
                                    New
                                </label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <label className='form-check-label'>
                                    <input className='form-check-input' type='radio' name='status' value='Processing'
                                        checked={this.state.status == 'Processing'} onChange={this.handleChange.bind(this)} />
                                    Processing
                                </label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <label className='form-check-label'>
                                    <input className='form-check-input' type='radio' name='status' value='Delivered'
                                        checked={this.state.status == 'Delivered'} onChange={this.handleChange.bind(this)} />
                                    Delivered
                                </label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <label className='form-check-label'>
                                    <input className='form-check-input' type='radio' name='status' value='Completed'
                                        checked={this.state.status == 'Completed'} onChange={this.handleChange.bind(this)} />
                                    Completed
                                </label>
                            </div>
                            <br />
                            <button className='btn btn-primary inline mr-1' onClick={this.handleSave.bind(this)}>
                                Save
                            </button>

                            <button className='btn btn-primary mr-1' onClick={this.handleReset.bind(this)}>
                                Reset Form
                            </button>
                        </form>
                    </div>
                </div>
                {this.state.products !== '' ?
                    <div className='table table-responsive mt-30'>
                        <table className='table table-striped table-hover table-sm'>
                            <thead className='thead-dark text-center'>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Brand</th>
                                    <th>Producer</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.products.map((p, index) =>
                                    <tr className='text-center' key={index}>
                                        <td>{p.product._id}</td>
                                        <td>{p.product.name}</td>
                                        <td>${p.product.price}</td>
                                        <td>{p.product.brand}</td>
                                        <td>{p.product.producer}</td>
                                        <td>{p.quantity}</td>
                                    </tr>
                                )}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td><b>Total</b></td>
                                    <td><b>${this.state.total}</b></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    : null}
            </div>
        );
    }
}