import React from 'react'

const reducerContext = React.createContext({
    state: {},
    dispatch: () => {},
})

reducerContext.displayName = 'reducerContext'

export default reducerContext