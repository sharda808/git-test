import  styles from "./Item.module.css"
const Item = ({foodItem}) => {

return(
  <li className={`${styles['kg_item']} list-group-item`}>
    <span className={styles['kg_span']}>{foodItem}</span>
    <button className={`${styles.button} btn btn-info`}
    onClick={() => console.log("Buy button clicked")}
    >Buy</button>
  </li>
);
};
export default Item; 