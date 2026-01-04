import Button from "./Button"
const NumberPad = () => {
const buttons = ["1","2",,"3","4","5","6","7","8","9","0","."];
const operations = ["+","-","*","/"];
const addTodisplay = (text) => {
console.log(text);
}
return <>
<Button text = "c" onClickHandler={}/>
{buttons.map(text =><Button text = {text}
 onClickHandler = {() => addTodisplay(text)} />)}
<br />
{operations.map(text=><Button text = {text}
onClickHandler = {() => addTodisplay(text)} />)}

<Button text ="=" />
</>
};
export default NumberPad;