
import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  const [calVal,setcalVal] = useState("");
  const onButtonClick = (buttonText) => {
if(buttonText === 'C'){
setcalVal("");
}
else if(buttonText ==='='){
const result = eval(calVal);
setcalVal(result);
}else{
  const newDisplayValue = calVal + buttonText;
  setcalVal(newDisplayValue);
}
  }
 return (
 <center>
 <div className={styles.calculator}>
<Display  displayValue = {calVal}/>
<ButtonsContainer  onButtonClick={onButtonClick}/>
 </div>
</center>
 )
}

export default App
