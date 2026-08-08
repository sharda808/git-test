import './Button.css';

const Button = ({type, btnText,handler}) => {




  if(type == 'success') {
 return  <button className='green_button' onClick= {handler}>{btnText}

  </button>
    
   
  } 
  else if(type =='danger'){
    return <button className='red_button' onClick= {handler}>
{btnText}
    </button>
  } else{
    return <button
    className='blue_button' onClick= {handler}
    >{btnText}

    </button>
  }
 
 
}

export default Button;
