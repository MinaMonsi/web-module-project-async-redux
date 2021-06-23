import { FETCH_PRODUCT_START, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAIL } from '../actions/makeupActions';

const intialState = {
    name: '',
    brand: '',
    image: '',
    isFetching: false,
    error: ''
}

function reducer(state = intialState, action){
    console.log('reducer', action);
    switch(action.type)  {
        case FETCH_PRODUCT_START:
            return{...state, isfetching: true, 
                error: ''};
        case FETCH_PRODUCT_SUCCESS:
            return {...state, name: action.payload, isFetching: false, error: ''}
        case FETCH_PRODUCT_FAIL:
            return {...state, error: action.payload}    
        default:
                return state; 
    }
}

export default reducer;