import { useState } from "react";

import { useContext } from "react";
import ThemeContext from "./store/ThemeContext";


const Themetoggle = () => {
const {theme, toggleTheme} = useContext(ThemeContext);

  return (
<button className={`m-3 border-gray-950 p-2 text-xl rounded ${theme === 'light' ? "bg-slate-200 text-gary-800" :"bg-slate-800 text-gray-200"}`} onClick = {toggleTheme}>Change Theme to {theme === 'light' ? 'Drak' :'light'}</button>
  )
}
export default Themetoggle;