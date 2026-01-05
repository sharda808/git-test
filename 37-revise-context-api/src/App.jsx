
import { createContext,useState } from 'react'
import './App.css'
import Welcome from './components/Welcome';
import Themetoggle from './components/Themetoggle';
import  { ThemeProvider } from './components/store/ThemeContext';

function App() {



  return (
    <>
<ThemeProvider>
<Welcome />
<Themetoggle />

</ThemeProvider>

    </>
  )
}

export default App
