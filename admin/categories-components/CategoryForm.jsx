import React from 'react';

export default class CategoryForm extends React.Component {
    constructor() {
        super();
        this.state = {
            id: '',
            name: ''
        }
    }


    componentWillReceiveProps(props) {
        this.setState(props.editCategories);
    }


    handleChange(e) {
        let change = {};
        change[e.target.name] = e.target.value;
        this.setState(change);
    }

    handleSave(e) {
        if(this.state._id === undefined || this.state._id === null) {
            e.preventDefault();
            this.props.addCategory(this.state);
            this.props.resetCategory();
            this.props.closeForm();
        }
        else {
            e.preventDefault();
            this.props.updateCategory(this.state);
            this.props.resetCategory();
            this.props.closeForm();
        }

        this.setState({
            id: '', name: ''
        });
    }

    handleReset(e) {
        e.preventDefault();
        this.props.resetCategory();
    }

    render() {
        return (
            <div className='card'>
                <div className='card-header text-center bg-primary text-white'>
                    {!this.state._id ? 'Add Category' : 'Edit Category'}
                    <span className='fa fa-times float-right' onClick={this.props.closeForm.bind(this)}></span>
                </div>
                <div className='card-body'>
                    <form>
                        <div className='form-group'>
                            <label>ID</label>
                            <input type='text' name='id' className='form-control' placeholder='Category ID'
                                value={this.state.id} onChange={this.handleChange.bind(this)} />
                        </div>

                        <div className='form-group'>
                            <label>Category Name</label>
                            <input type='text' name='name' className='form-control' placeholder='Category Name'
                                value={this.state.name} onChange={this.handleChange.bind(this)} />
                        </div>


                        <br />

                        <button className='btn btn-primary inline mr-1'
                            onClick={this.handleSave.bind(this)}>
                            Save
                        </button>

                        <button className='btn btn-primary mr-1'
                            onClick={this.handleReset.bind(this)}>
                            Reset Form
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}