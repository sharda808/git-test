import './DangerButton.css';

const Button = ({type, btnText,handler}) => {



  if(type==='Success'){
    return <button
    className="green-button" onClick = {handler}>{btnText}</button>;

  }
  else if (type==='Danger'){
    return <button
    className="red-button" onClick = {handler}>{btnText}</button>;
  }
  else{
    return <button
    className="blue-button" onClick = {handler} >{btnText}</button>;
  }


};
export default Button;
