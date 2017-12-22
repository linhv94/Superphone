import React from 'react';
import CategoryForm from './CategoryForm.jsx';
import CategoryList from './CategoryList.jsx';
import { AdminNavBar } from '../navbar/AdminNavBar.jsx';


export default class AdminCategoryPage extends React.Component {
    onAddCategory() {
        this.props.toggleForm();
        this.props.resetCategory();
    }
    render() {
        return (
            <div className='row'>
                <div className='col-sm-2'>
                    <AdminNavBar />
                </div>
                <div className={this.props.formDisplay ? 'col-sm-3 content' : null}>
                    {this.props.formDisplay ?
                        <CategoryForm editCategories={this.props.editCategories}
                            addCategory={(category) => this.props.addCategory(category)}
                            resetCategory={() => this.props.resetCategory()}
                            updateCategory={(category) => this.props.updateCategory(category)}
                            closeForm={() => this.props.closeForm()} />

                        : null}
                </div>

                <div className={this.props.formDisplay ? 'col-sm-6 content' : 'col-sm-8 content'}>
                    <button type='button' className='btn btn-primary mr-2' onClick={() => this.onAddCategory()}>
                        <span className='fa fa-plus'></span> Add Category
                    </button>

                    <CategoryList categories={this.props.categories}
                            openEditForm={() => this.props.openEditForm()}
                            deleteCategory={(_id) => this.props.deleteCategory(_id)}
                            getCategory={(_id) => this.props.getCategory(_id)} />
                </div>
                <div className='col-sm-1'></div>
            </div>
        );
    }

}



