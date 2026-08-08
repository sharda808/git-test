import Button from "./Button";
import { FaGithub } from "react-icons/fa";
const NumberPad = ({displayVal, setDisplayVal}) => {
  const buttons = [, "1", "2","3","4",,"5","6",,"7","8",,,"9","0"]
  const operations = ["-","*","/","."];
  const addToDisplay = (number) => {
    setDisplayVal(displayVal+number)

  }
  const evaluateExpression = () => {
    const result = eval(displayVal);
setDisplayVal(result);
  }
  return (
    <>
      <Button text = "c"  onClickHandler={() => setDisplayVal('')}/>
      <br/>
    {buttons.map(number => <Button key = {number} text = {number} onClickHandler={() => addToDisplay(number)}/>)}
    <br />
  {operations.map(number => <Button key={number} text = {number}
  onClickHandler={() => addToDisplay(number)}
  />)}
 <br />
   <Button text = { <FaGithub />} onClickHandler={evaluateExpression} />
    </>
  )
}
export default NumberPad;