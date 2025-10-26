import './App.css';
import Welcome from './components/Welcome';
import ThemeToggle from './components/ThemeToggle';
import ThemeContext from "./store/ThemeContext";
import { ThemeProvider } from './store/ThemeContext';
function App() {



  return (
<center>
<ThemeProvider>
<Welcome />
<ThemeToggle />
</ThemeProvider>
</center>
  )
}

export default App
