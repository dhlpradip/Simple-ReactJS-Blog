import React from 'react'

export const themes = {
    light: {
        color: '#333',
        background: '#fff',
    },
    dark: {
        color: '#fff',
        background: '#000',
    },
  };
  
  export const ThemeContext = React.createContext(  themes.dark );
  
  