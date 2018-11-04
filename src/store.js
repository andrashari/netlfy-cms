import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/combinedReducers'

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const store = !(window.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV !== 'production')
    ? createStore(rootReducer,
        applyMiddleware(
            thunkMiddleware,
        )
    )
    : createStore(rootReducer,
        compose(
            applyMiddleware(
                thunkMiddleware,
                createLogger(),
            ),
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    )

export default store