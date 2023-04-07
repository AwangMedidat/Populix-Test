import { GET_MOVIES, GET_DETAILS } from '../actions';

const initialState = {
    movies: [],
    detail: {},
    loading: true
}

function movieReducers(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            return {...state, movies: action.payload}
        case GET_DETAILS:
            return {...state, detail: action.payload, loading: false}
        default:
            return state;
    }
}

export default movieReducers