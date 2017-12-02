import React from 'react';

export const ListView = (props) => {
    return (
        <div className='table table-responsive col-sm-9'>
            <table className='table'>
                <thead className='thead-dark text-center'>
                    <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.currentDisplay.map((p, index) =>
                        <tr className='product-table' key={index}>
                            <td>
                                <img className='img1 img-responsive' src={p.imageUrl} alt={p.name} />
                                &nbsp;
                                </td>
                            <td>{p.name}</td>
                            <td>${p.price}</td>
                            <td>{p.description} <br /> <b>Brand:</b> {p.brand} <br /> <b>Producer:</b> {p.producer} <br /></td>
                            <td>
                                <p><i className='fa fa-cart-plus fa-2x icon icon-wrapper' onClick={() => props.addToCart(p)}>
                                    <span className='fix-editor'></span></i>
                                </p>
                                <br />
                                <p><a className='btn btn-primary btn-circle text-white' role='button'
                                    href={`${p._id}`}> View
                                     </a></p>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}