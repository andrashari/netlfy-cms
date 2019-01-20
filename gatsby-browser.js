import React from 'react'
import { Provider } from 'react-redux'

import store from './src/store'

import "./src/assets/theme/global.css"

export const wrapRootElement = ({ element }) => {

    const ConnectedRootElement = (
        <Provider store={store}>
            {element}
        </Provider>
    )

    return ConnectedRootElement
}
