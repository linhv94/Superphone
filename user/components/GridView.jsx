import React from 'react';

export const GridView = (props) => {
    return (
        <div>
            <div className='row'>
                {props.currentDisplay.map((p, index) =>
                    <div className='col-sm-4' key={index}>
                        <div className='card card-cascade product-card'>
                            <div className='view hm-white-slight waves-light'>
                                <img className='img1 img-responsive imd-fluid' src={p.imageUrl} alt={p.name} />
                                <a>
                                    <div className='mask'></div>
                                </a>
                            </div>
                            <div className='card-body'>
                                <h4 className='card-title'>{p.name}</h4>
                                <hr />
                                <h5 className='card-text'>${p.price}</h5>
                                <p className='card-text'><b>Brand:</b> {p.brand}</p>
                                <p className='card-text'><b>Producer:</b> {p.producer}</p>
                            </div>
                            <div>
                                <i className='fa fa-cart-plus fa-2x icon icon-wrapper mr-2' onClick={() => props.addToCart(p)}>
                                    <span className='fix-editor'></span></i>

                                <a className='btn btn-primary btn-circle text-white' role='button'
                                    href={`${p._id}`}> View
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}