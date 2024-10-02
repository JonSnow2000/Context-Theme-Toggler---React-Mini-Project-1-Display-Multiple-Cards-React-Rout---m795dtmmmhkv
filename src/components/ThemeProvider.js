import React from 'react';

const ThemeContext = React.createContext()
const ThemeProvider = (props) =>{
    // Initialize the theme to light mode
  const [theme, setTheme] = useState('light');

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
        {props}
        </ThemeContext.Provider>
    )
}

export {ThemeProvider,ThemeContext}
