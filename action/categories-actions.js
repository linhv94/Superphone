export function fetchCategories() {
    return (dispatch) => {
        fetch('http://bestlab.us:8080/productTypes')
            .then((res) => { return res.json() })
            .then((data) => {
                dispatch({
                    type: 'FETCH_CATEGORIES_SUCCESS',
                    payload: data
                })
        })
    }
};


export function addCategory(category) {
    return (dispatch) => {
        fetch('http://bestlab.us:8080/productTypes', {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(category)
        })
            .then((res) => { return res.json() })
            .then((data) => {
                dispatch({
                    type: 'ADD_CATEGORY',
                    payload: data
                })
            })
    }
};

export function deleteCategory(_id) {
    return (dispatch) => {
        fetch(` http://bestlab.us:8080/productTypes/${_id}`, {
            method: 'DELETE',
        })
            .then((res) => { return res.json() })
            .then((data) => {
                dispatch({ type: 'DELETE_CATEGORY', payload: _id })
            })
    }
};

export function updateCategory(category) {
    return (dispatch) => {
        console.log(category)
        fetch('http://bestlab.us:8080/productTypes', {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(category)
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                dispatch(fetchCategories())
            })
    }
};



export function getCategory(_id) {
    return (dispatch) => {
        fetch(`http://bestlab.us:8080/productTypes/${_id}`, {
            method: 'GET',
        })
            .then((res) => { return res.json() })
            .then((data) => {
                dispatch({
                    type: 'EDIT_CATEGORY',
                    payload: data
                })
            })
    };
};

export function resetCategory() {
    return {
        type: 'RESET_CATEGORY'
    };
}







