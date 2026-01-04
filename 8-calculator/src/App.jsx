
import  styles from'./App.module.css';
import Buttons from "./components/Buttons";
import Display from "./components/Display";
function App() {


  return (
    <center>
  <div class={styles.calculator}>
    <Display />
<Buttons />

</div>
    </center>
  )
}

export default App
