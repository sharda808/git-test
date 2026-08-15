
import WelCome from "./components/WelCome";
import ThemeToggle from "./components/ThemeToggle";
import ThemeContext from "./store/ThemeContext";
import React, { useContext } from 'react'


function App() {
  const {theme} = useContext(ThemeContext);

  return (
      
    <div
      className={`min-h-screen p-10 ${
        theme === "light"
          ? "bg-gray-600 text-black"
          : "bg-gray-900 text-white"
      }`}
    >  

   <WelCome />
  <ThemeToggle />
  
   
</div>


  );
}

export default App;