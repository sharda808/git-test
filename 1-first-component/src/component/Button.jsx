
const Button = ({type,btnText,handler}) => {
  if(type ==="success"){
    return <button
   className="btn btn-success" onClick>{btnText}</button>;
  }
  else if(type ==="danger"){
  return <button 
   className="btn btn-danger">{btnText}</button>;
}
else{
  return <button className="btn btn-primary">{btnText}</button>;
}
};
export default Button;
