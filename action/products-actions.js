export function fetchProducts() {
    return function (dispatch) {
        fetch('http://bestlab.us:8080/products')
            .then((res) => { return res.json() })
            .then((data) => {
                dispatch({
                    type: 'FETCH_PRODUCTS_SUCCESS',
                    payload: data
                })
            })
    }
}


export function addProduct(product) {
    return (dispatch) => {
        fetch('http://bestlab.us:8080/products', {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(product)
        })
            .then((res) => { return res.json() })
            .then((data) => {
                dispatch({
                    type: 'ADD_PRODUCT',
                    payload: data
                })
        })
    }
};

export function deleteProduct(_id) {
    return (dispatch) => {
        fetch(`http://bestlab.us:8080/products/${_id}`, {
            method: 'DELETE',
        })
            .then((res) => { return res.json() })
            .then((data) => {
                dispatch({ type: 'DELETE_PRODUCT', payload: _id })
            })
    }
};


export function updateProduct(product) {
    return (dispatch) => {
        fetch('http://bestlab.us:8080/products', {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(product)
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                dispatch(fetchProducts())
            })
    }
};

export function getProduct(_id) {
    return (dispatch) => {
        fetch(`http://bestlab.us:8080/products/${_id}`, {
            method: 'GET',
        })
            .then((res) => { return res.json() })
            .then((data) => {
                dispatch({
                    type: 'EDIT_PRODUCT',
                    payload: data
                })
            })
    }
};


export function resetProduct() {
    return {
        type: 'RESET_PRODUCT'
    };
}



