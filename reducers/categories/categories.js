
const initialState =  [{id: 'c4', name: 'Phones'}, 
{id:'c2', name: 'Laptops'}, 
{id: 'c3', name: 'Watches'}]


const categories = (state = initialState, action) => {
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
    