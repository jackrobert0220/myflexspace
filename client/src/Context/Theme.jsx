import { createContext, useState } from "react";
const themes = {
    dark: {
        backgroundColor: 'black',
        color: 'white',
    },
    light: {
        backgroundColor: 'white',
        color: 'black',
    },
}
export const ThemeContext = createContext();
export const ThemeProvider = ({children}) => {
    //state of isdark mode active
    const [isDark, setIsDark] = useState(false)
    // defining the theme if dark make it theme.dark, if not make it themes.light
    const theme = isDark ? themes.dark : themes.light;
// toggle theme function
const toggleTheme = () => {
    // must be set to the opposite to toggle
    setIsDark(!isDark)
}
    return (
        <ThemeContext.Provider
            value={[{theme, isDark}, toggleTheme]}>
            {children} </ThemeContext.Provider>
    )
}