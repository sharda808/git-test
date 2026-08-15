
import React, { useContext } from 'react'
import ThemeContext from '../store/ThemeContext'
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
const ThemeToggle = () => {
   const {theme,toggleTheme} = useContext(ThemeContext);
  return (
    <button className="m-3 bg-blue-900 p-2 rounded  text-white" onClick={toggleTheme}>
      {theme=== 'light' ? <CiLight /> : <CiDark />}
    </button>
  )
}

export default ThemeToggle;