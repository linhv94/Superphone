var initialState = false;

const formDisplay = (state = initialState, action) => {
    switch(action.type){
        case 'TOGGLE_FORM':
            return !(state);
        case 'CLOSE_FORM':
            state = false;
            return state;
        case 'EDIT_FORM':
            state = true;
            return state;
        default: 
            return state;
    }
}

export default formDisplay;

