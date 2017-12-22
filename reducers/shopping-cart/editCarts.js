export const editCarts = (state = {}, action) => {
    switch(action.type){
        case 'EDIT_CART':
            return action.payload;
        case 'CLEAR_FORM':
            return {_id: '', customer: '', address: '', email: '', phone: '', products: '', status: ''}
        default: 
            return state;
    };
};