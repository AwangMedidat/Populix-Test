import { GET_IMAGES } from '../actions';

const initialState = {
    images: []
}

function imageReducers(state = initialState, action) {
    switch (action.type) {
        case GET_IMAGES:
            return {...state, images: action.payload}
        default:
            return state;
    }
}

export default imageReducers