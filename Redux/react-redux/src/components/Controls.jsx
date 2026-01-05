import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
   const dispatch = useDispatch();
   const inputElement = useRef();
   const handleIncrement = () => {
dispatch({type:"INCREMENT"});
   }
   const handleDecrement = () => {
dispatch({type:"DECREMENT"});
   } 
   const handleAdd = () => {

    dispatch({type:"ADD",payload:{
      num:  inputElement.current.value,
    },
  });
  inputElement.current.value = "";
   };
  const handleSubtract  = () => {
    dispatch ({
      type:"SUBTRACT",
      payload:{
        num:inputElement.current.value,
      }
    });
    inputElement.current.value = "";
  };
  const handlePrivacyToggle = () => {
    dispatch({type:"PRIVACY_TOGGLE"})
  };
return (
  <>
<div className="">
<button type="button" className="btn btn-primary m-2" onClick = {handleIncrement}>+1</button>

<button type="button" className="btn btn-success" onClick = {handleDecrement}>-1</button>
<button type="button" className="btn btn-warning ms-2" onClick = {handlePrivacyToggle}>Privacy Toggle</button>


</div>
<div className="control-row">
<input type="text" placeholder="Enter number" className="number-input" ref= {inputElement}/>

<button type="button" className="btn btn-info ms-2" onClick = {handleAdd}>Add</button>
<button type="button" className="btn btn-danger ms-2" onClick = {handleSubtract}>Subtract</button>
</div>
</>
)
}
export default Controls;