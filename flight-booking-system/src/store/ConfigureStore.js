import {createStore} from 'redux';
import rootReducers from './reducers/RootReducers';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

export default function ConfigureStore(){
    return createStore(
        rootReducers,
        applyMiddleware(thunk)
    )
}