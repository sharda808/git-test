
const Button = ({type,btnText,handler}) => {
  if(type ==="success"){
    return <button
   className="btn btn-success button" onClick ={handler}>{btnText}</button>;
  }
  else if(type ==="danger"){
  return <button 
   className="btn btn-danger button" onClick= {handler}>{btnText}</button>;
}
else{
  return <button className="btn btn-primary button" onClick={handler}>{btnText}</button>;
}
};
export default Button;
