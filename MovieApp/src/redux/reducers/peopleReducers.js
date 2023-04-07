import { GET_PEOPLES } from '../actions';

const initialState = {
    peoples: [],
    loading: true
}

function peopleReducers(state = initialState, action) {
    switch (action.type) {
        case GET_PEOPLES:
            return {...state, peoples: action.payload, loading: false}
        default:
            return state;
    }
}

export default peopleReducers