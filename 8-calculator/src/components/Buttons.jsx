import styles from "./Buttons.module.css";
const ButtonsContainer = () =>{
  const buttonsNames = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
 return (
 <div class={styles.btn_container}>
  {buttonsNames.map((button_cal) => <button className={styles.button}>{button_cal}</button>)}

  
  </div>
 );
};
export default ButtonsContainer;