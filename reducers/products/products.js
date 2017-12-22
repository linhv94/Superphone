const products = (state = [], action) => {
        switch(action.type){
            case 'FETCH_PRODUCTS_SUCCESS':
                console.log('loading success');
                state = action.payload;
                return state;
            case 'ADD_PRODUCT':
                return [...state, action.payload];
            case 'DELETE_PRODUCT':
                return state.filter((p) => p._id !== action.payload);
            default:
                return state;
        }
    };

export default products;
    