import { useReducer, useState,useRef } from 'react';
import './App.css'
const counterReducer = (currentState,action) => {
  console.log('In Reducer',currentState,action);
  let newState = currentState;
  switch(action.type) {
case 'INCREMENT' :
  newState +=1;
  break;
  case 'DECREMENT':
    newState -= 1;
break;
case 'RESET':
  newState = 0;
  break;
  case 'DOUBLE':
    newState *= 2;
    break;
     case 'CHANGEBY':
     newState = newState + parseInt(action.payload.num);
      break;
default:
  break;
}
return newState;
}
function App() {
// const [counterVal,setCounterVal] = useState(0);
const intialState = 0;
const changeByInput = useRef();
const [counterVal,counterDispatch] = useReducer(counterReducer,intialState);
const handleIncrement = () => {
  // setCounterVal(current => current + 1);
  counterDispatch({
    type:"INCREMENT"
  });
}

const handleDecrement = () => {
// setCounterVal(current => current-1);
counterDispatch ({
  type:"DECREMENT"
});
}
const handleReset = () => {
  counterDispatch({
    type:'RESET'
  });
}
const handleDouble = () => {
  counterDispatch({
    type:'DOUBLE'
  });
}
const handleChangeBy = () => {
  const num =  changeByInput.current.value;
  changeByInput.current.value = 0;
  counterDispatch({
  type:'CHANGEBY',
  payload:{num}
      });
}
  return (
    <>
 <h1>Count:{counterVal}</h1>
<button onClick = {handleIncrement}>Increment</button>
<button onClick = {handleDecrement}>Decrement</button>
<button onClick={handleReset}>Reset</button>
<button onClick={handleDouble}> Double</button>
<button onClick = {handleChangeBy}>Change By</button>
<input type="text" placeholder='Number'  ref = {changeByInput}/>
    </>
  )
}
export default App
