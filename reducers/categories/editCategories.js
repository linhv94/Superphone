const editCategories = (state = {}, action) => {
    switch(action.type){
        case 'RESET_CATEGORY':
            return {id: '', name: '', edit: false};
        case 'EDIT_CATEGORY':
            return Object.assign({}, action.payload, {edit: true});
        default: 
            return state;
    }
};

export default editCategories;