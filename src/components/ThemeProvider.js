import React from 'react';

const ThemeContext = React.createContext()
const ThemeProvider = (props) =>{

    return (
        <React.Fragment>
        {props}
        </React.Fragment>
    )
}

export {ThemeProvider,ThemeContext}
