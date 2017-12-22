const editProducts = (state = {}, action) => {
    switch(action.type){
        case 'RESET_PRODUCT':
            return {id: '', name: '', price: '', description: '',
                    brand: '', producer: '', imageUrl: '', productType: ''};
        case 'EDIT_PRODUCT':
            return action.payload;
        default: 
            return state;
    }
};

export default editProducts;
