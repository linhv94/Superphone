const editProducts = (state = {}, action) => {
    switch(action.type){
        case 'RESET_PRODUCT':
            return {id: '', name: '', price: '', description: '',
                    brand: '', producer: '', imageUrl: '', productType: '', edit: false};
        case 'EDIT_PRODUCT':
            return Object.assign({}, action.payload, {edit: true});
        default: 
            return state;
    }
};

export default editProducts;
