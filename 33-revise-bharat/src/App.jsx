import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Heading from './components/Heading'
import ClockSlogan from './components/ClockSlogan';
import CurrentTime from './components/CurrentTime';

function App() {


  return (
    <center>
<Heading />
   <ClockSlogan />
   <CurrentTime />
    </center>
 
  )
}

export default App
