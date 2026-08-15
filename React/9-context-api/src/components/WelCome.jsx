import React, { useContext } from 'react'
import ThemeContext from '../store/ThemeContext'

const WelCome = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <h1 className="p-2  text-3xl text-slate-50"  >
      {theme === 'light' ? "light Mode" : "dark Mode"}
    </h1>
  )
}

export default WelCome
