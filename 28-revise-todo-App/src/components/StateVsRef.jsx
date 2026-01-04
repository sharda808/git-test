import { useState, useRef} from "react";

const StateVsRef = () => {
  console.log("Repaint")
  const [stateClicks,setStateClicks] = useState(0);
  const refClicks = useRef(0);
  const onStateClickHandler = () => {
console.log("State Clicked");
setStateClicks(stateClicks + 1);
  }
  const onRefClicksHandler = () => {
console.log("Ref Clicked");
refClicks.current += 1;
  }
return (
  <>
  <h1>State Clicked : {stateClicks}</h1>
  <h1>Ref Clicked :{refClicks.current}</h1>
  <button onClick = {onStateClickHandler}>State</button>
  <button onClick = {onRefClicksHandler}>Ref</button>
  </>
)
}
export default StateVsRef;