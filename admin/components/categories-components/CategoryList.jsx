import React from 'react';

export default class CategoryList extends React.Component {
    
    handleEdit(_id) {
        this.props.getCategory(_id);
        this.props.openEditForm();
    }

    render() {
        return (
            <div>
                <div className='row mt-15'>
                    <div className='col-sm-12'>
                        <div className='table table-responsive'>
                            <table className='table table-striped table-hover'>
                                <thead className='thead-dark'>
                                    <tr>
                                        <th className='text-center'>ID</th>
                                        <th className='text-center'>Name</th>
                                        <th className='text-center'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.categories.map((c, index) =>
                                        <tr className='text-center' key={index}>
                                            <td>{c.id}</td>
                                            <td>{c.name}</td>
                                
                                            <td className='text-center'>
                                                <button type='button' className='btn btn-info'
                                                    onClick={() => this.handleEdit(c._id)}>
                                                    <span className='fa fa-pencil-square-o'></span> Edit
                                            </button>
                                                &nbsp;
        
                                            <button type='button' className='btn btn-danger'
                                                    onClick={() => this.props.deleteCategory(c._id)}>
                                                    <span className='fa fa-trash-o'></span> Delete
                                            </button>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}