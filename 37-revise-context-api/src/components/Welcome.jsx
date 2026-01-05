import { useContext } from "react";
import ThemeContext from "./store/ThemeContext";

const Welcome = () => {
  const {theme} = useContext(ThemeContext);

  return (
<h1 className={`text-3xl text-bold p-5  ${theme === 'light' ? "text-gray-800 bg-slate-200" : "text-slate-200 bg-gray-800"}`}>Welcome to Theme Changing App</h1>
  )
}
export default Welcome;