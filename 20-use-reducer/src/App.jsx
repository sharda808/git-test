


import { useRef } from 'react';
import { useReducer } from 'react';
const counterReducer = (currentState,action) => {
  console.log('In Reducer',currentState,action);
  let newState = currentState;
switch(action.type){
  case 'INCREMENT':
    newState += 1;
    break;
    case 'DECREMENT':
      newState -=1;
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
  const initialState = 0;
  const ChangeByInput = useRef()
  // const[counterVal,setCounterVal] = useState(0);
const [counterVal, counterDispatch] = useReducer(counterReducer,initialState);
const handleIncrement = () => {
counterDispatch({
    //Action
  type:"INCREMENT"
 
});
// setCounterVal (current=> current+1);
}
const handleDecrement = () => {
counterDispatch ({
  type:"DECREMENT" // Action
});
// setCounterVal (current => current-1);
}
const handleChange = () => {
  const num = ChangeByInput.current.value;
  ChangeByInput.current.value = 0;
  counterDispatch({
    type:"CHANGEBY",
    payload :{ num }
  });
}
  return (
    <>
    <h1>Count:{counterVal}</h1>
<button onClick = {handleIncrement}>Increment</button>
<button onClick = {handleDecrement}>Decrement</button>
<button onClick = {()=> counterDispatch({type:"RESET"})}>Reset</button>
<button onClick  = {()=> counterDispatch({type:"DOUBLE"})}>Double</button>
<button onClick  = {handleChange} >Change By</button>
<input type="text"  ref = {ChangeByInput}placeholder="Number" />
    </>
  )
}

export default App

// useState
// useRef
// use Reducer
// only apply for one particuler Component
// but context api nd use context apply use multiple components