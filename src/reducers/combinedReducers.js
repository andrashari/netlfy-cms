import {combineReducers} from 'redux'
import persistStore from './persistStore'

const rootReducer = combineReducers({persistStore});

export default rootReducer;