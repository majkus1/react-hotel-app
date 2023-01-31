import React from 'react'

const ThemeContext = React.createContext({
    theme: 'primary',
    onChangeTheme: () => {},
    changeBgcolor: 'warning'
})

ThemeContext.displayName = 'ThemeContext'

export default ThemeContext