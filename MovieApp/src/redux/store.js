import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import movieReducers from './reducers/movieReducers';
import imageReducers from './reducers/imageReducers';
import trendingReducers from './reducers/trendingReducers';
import peopleReducers from './reducers/peopleReducers'

const rootReducer = combineReducers({
  movieReducers,
  imageReducers,
  trendingReducers,
  peopleReducers
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
