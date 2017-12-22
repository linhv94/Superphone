import React from 'react';

export default class ProductForm extends React.Component {
    constructor() {
        super();
        this.state = {
            id: '',
            name: '',
            price: '',
            description: '',
            brand: '',
            producer: '',
            imageUrl: '',
            productType: ''
        }
    }

    componentWillReceiveProps(props) {
        this.setState(props.editProducts);
    }


    handleChange(e) {
        let change = {};
        change[e.target.name] = e.target.value;
        this.setState(change);
    }

    handleSave(e) {
        if(this.state._id === undefined || this.state._id === null) {
            e.preventDefault();
            this.props.addProduct(this.state);
            this.props.resetProduct();
            this.props.closeForm();
        }
        else {
            e.preventDefault();
            this.props.updateProduct(this.state);
            this.props.resetProduct();
            this.props.closeForm();
        }
    }

    handleReset(e) {
        e.preventDefault();
        this.props.resetProduct();
    }

    render() {
        return (
            <div className='card'>
                <div className='card-header text-center bg-primary text-white'>
                    {!this.state._id ? 'Add Product' : 'Edit Product'}
                    <span className='fa fa-times float-right' onClick={this.props.closeForm.bind(this)}></span>
                </div>
                <div className='card-body'>
                    <form>
                        <div className='form-group'>
                            <div className='form-row'>
                                <div className='col'>
                                    <label>ID</label>
                                    <input type='text' name='id' className='form-control' placeholder='Product ID'
                                        value={this.state.id} onChange={this.handleChange.bind(this)} />
                                </div>

                                <div className='col'>
                                    <label>Product Name</label>
                                    <input type='text' name='name' className='form-control' placeholder='Product Name'
                                        value={this.state.name} onChange={this.handleChange.bind(this)} />
                                </div>
                            </div>
                        </div>

                        <div className='form-group'>
                            <label>Price</label>
                            <input type='text' name='price' className='form-control' placeholder='Product Price'
                                value={this.state.price} onChange={this.handleChange.bind(this)} />
                        </div>

                        <div className='form-group'>
                            <label>Description:</label>
                            <textarea className='form-control' name='description' rows='2' col='2'
                                value={this.state.description} onChange={this.handleChange.bind(this)}>
                            </textarea>
                        </div>
                        <div className='form-group'>
                            <div className='form-row'>
                                <div className='col'>
                                    <label>Brand</label>
                                    <input type='text' name='brand' className='form-control' placeholder='Product Brand'
                                        value={this.state.brand} onChange={this.handleChange.bind(this)} />
                                </div>
                                <div className='col'>
                                    <label>Producer</label>
                                    <input type='text' name='producer' className='form-control' placeholder='Product Producer'
                                        value={this.state.producer} onChange={this.handleChange.bind(this)} />
                                </div>
                            </div>
                        </div>

                        <div className='form-group'>
                            <label>Image URL</label>
                            <input type='text' name='imageUrl' className='form-control' placeholder='Image URL'
                                value={this.state.imageUrl} onChange={this.handleChange.bind(this)} />
                        </div>
                        <div className="form-group">
                            <label>Select Category:</label>
                            <select className="form-control" name='productType' onChange={this.handleChange.bind(this)}>
                                <option defaultValue selected>Choose here</option>
                                
                                {this.props.categories.map((c, index) => 
                                <option key={index} selected={this.state.productType === c.id} value={c.id}>
                                    {c.name}
                                </option>)}
                            </select>
                        </div>
                        <br />
                        <button className='btn btn-primary inline mr-1'
                            onClick={this.handleSave.bind(this)}>
                            Save
                        </button>
                        <button className='btn btn-primary mr-1 inline'
                            onClick={this.handleReset.bind(this)}>
                            Reset Form
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}