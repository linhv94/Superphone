const categories = (state = [], action) => {
        switch(action.type){
            case 'FETCH_CATEGORIES_SUCCESS':
                state = action.payload;
                return state;
            case 'ADD_CATEGORY':
                return [...state, action.payload];
            case 'DELETE_CATEGORY':
                return state.filter((c) => c._id !== action.payload);
            default:
                return state;
        }
    };

export default categories;
    