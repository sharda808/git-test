import Display from "./components/Display"
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
const [calVal,setCalval] = useState("");
const onButtonClick = (buttonText) => {
  if(buttonText === 'C'){
   setCalval("") ;

  } 
  else if(buttonText === '='){
    const result = eval(calVal);
    setCalval(result);
  }
  else{
    const newDisplayValue = calVal + buttonText;
    setCalval(newDisplayValue);
  }
};
  return (
    <center>
<div className={styles.calculator}>
<Display displayValue={calVal}></Display>
<ButtonsContainer onButtonClick={onButtonClick} />
</div>
</center>
  )
}
export default App;

