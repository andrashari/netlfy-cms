import React from 'react'
import { Provider } from 'react-redux'

import store from './src/store'

export const wrapRootElement = ({ element }) => {

    const ConnectedRootElement = (
        <Provider store={store}>
            {element}
        </Provider>
    )

    return ConnectedRootElement
}
