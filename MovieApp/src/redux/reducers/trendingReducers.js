import { GET_TRENDINGS } from '../actions';

const initialState = {
    trendings: [],
    loading: true
}

function trendingReducers(state = initialState, action) {
    switch (action.type) {
        case GET_TRENDINGS:
            return {...state, trendings: action.payload, loading: false}
        default:
            return state;
    }
}

export default trendingReducers