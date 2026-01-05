
import { useReducer } from 'react'
import './App.css'
import { useState } from 'react';
import { useRef } from 'react';
const counterReducer = (currentState, action) => {
  console.log('In Reducer', currentState,  action);
  let newState = currentState;
switch(action.type){
  case 'INCREMENT':
    newState +=1;
    break;
    case 'DECREMENT':
      newState -=1;
      break;
      case 'RESET':
        newState =0;
        break;
        case 'DOUBLE':
          newState *=2;
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
// const[counterVal, setCounterVal] = useState(0);
const initialState = 0;
const changeByInput = useRef();
const[counterVal,counterDispatch] = useReducer(counterReducer, initialState);
const HandleIncrement = () => {
counterDispatch({
  type:"INCREMENT",
})
// setCounterVal(current => current + 1);
}
const HandleDecrement = () => {
counterDispatch({
  type:"DECREMENT",
})
// setCounterVal(current => current-1);
}
const HandleReset = () => {
  counterDispatch({
    type:"RESET",
  })
}
const HandleDouble = () => {
  counterDispatch({
    type:"DOUBLE"
  })
}
const  handleChangeByInput = () => {
  const num = changeByInput.current.value;
  changeByInput.current.value = 0;
  counterDispatch({
    type:"CHANGEBY",
    payload:{
      num
    }
  })
}
  return (
    <>
   <h1>Count:{counterVal}</h1>
  <button onClick={HandleIncrement}>Increment</button>
  <button onClick = {HandleDecrement}>Decrement</button>
  <button onClick={HandleReset}>Reset</button>
  <button onClick= {HandleDouble}>Double</button>
  <button onClick = {handleChangeByInput}>Change By</button>
  <input type="text" ref = {changeByInput} placeholder='Number' />
    </>
  )
}

export default App;
