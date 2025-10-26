import { createContext, useState } from "react";

const themeContext = createContext();
export const ThemeProvider = ({children}) => {
  const [theme,setTheme] = useState("dark");// intial state theme= drak
  const toggelTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark':'light'));
  };
  const contextVal = {
    theme:theme,
    toggleTheme:toggleTheme
  };
  return <themeContext.Provider value = {contextVal}>
    {children}
  </themeContext.Provider>
}