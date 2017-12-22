export function fetchCarts() {
    return (dispatch) => {
        fetch('http://ec2-18-217-254-83.us-east-2.compute.amazonaws.com:8080/shoppingCarts')
            .then((res) => { return res.json() })
            .then((data) => {
                dispatch({
                    type: 'FETCH_CART_SUCCESS',
                    payload: data
                });
            });
    }
};

export function addNewCart(cart) {
    return (dispatch) => {
        fetch('http://ec2-18-217-254-83.us-east-2.compute.amazonaws.com:8080/shoppingCarts', {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(cart)
        })
            .then((res) => { return res.json() })
            .then((data) => {
                dispatch({
                    type: 'ADD_NEW_CART',
                    payload: data
                });
            });
    }
};

export function addToCart(product, quantity) {
    return {
        type: 'ADD_TO_CART',
        payload: { product, quantity }
    };
};

export function deleteCartItem(id) {
    return {
        type: 'DELETE_CART_ITEM',
        payload: id
    };
};

export function resetCart() {
    return {
        type: 'RESET_CART'
    };
};


export function deleteCart(_id) {
    return (dispatch) => {
        fetch(`http://ec2-18-217-254-83.us-east-2.compute.amazonaws.com:8080/shoppingCarts/${_id}`, {
            method: 'DELETE',
        })
            .then((res) => { return res.json() })
            .then((data) => {
                dispatch({ type: 'DELETE_CART', payload: _id })
            })
    }
};

export function updateCart(cart) {
    return (dispatch) => {
        fetch(`http://ec2-18-217-254-83.us-east-2.compute.amazonaws.com:8080/shoppingCarts/${cart._id}`, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(cart)
        })
            .then((res) => { return res.json() })
            .then((data) => {
                dispatch(fetchCarts())
            })
    }
};

export function getCart(_id) {
    return (dispatch) => {
        fetch(`http://ec2-18-217-254-83.us-east-2.compute.amazonaws.com:8080/shoppingCarts/${_id}`, {
            method: 'GET'
        })
            .then((res) => { return res.json() })
            .then((data) => {
                dispatch({
                    type: 'EDIT_CART',
                    payload: data
                })
            })
    }
};

export function clearForm(){
    return {
        type: 'CLEAR_FORM'
    }
}

