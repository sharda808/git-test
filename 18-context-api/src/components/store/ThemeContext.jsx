import {useState, createContext } from "react";
 const ThemeContext = createContext();
export const ThemeProvider = ({Children}) =>{
  const [theme,setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme ==='light' ? 'dark': 'light'));
  };
  const contextVal = {
      theme:theme,
    toggleTheme:toggleTheme
  };
return <ThemeContext.Provider value={contextVal}>
  {Children}
</ThemeContext.Provider>
}
export default ThemeContext;