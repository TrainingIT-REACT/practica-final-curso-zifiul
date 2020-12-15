import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';

// Reducers
import albums from './reducers/albums.reducer';

export default createStore(albums, applyMiddleware(promise));