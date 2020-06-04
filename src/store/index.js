import { createStore, applyMiddleware } from 'redux';
//import thunk for doing asynchronous operations in redux
import thunk from 'redux-thunk';
//import reducer from our reducer file
import rootReducer from '../reducer';


export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);