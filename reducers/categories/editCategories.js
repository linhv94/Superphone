const editCategories = (state = {id: '', name: ''}, action) => {
    switch(action.type){
        case 'RESET_CATEGORY':
            return {id: '', name: ''};
        case 'EDIT_CATEGORY':
            return action.payload;
        default: 
            return state;
    }
};

export default editCategories;