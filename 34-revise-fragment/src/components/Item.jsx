import styles from "./Item.module.css";
const Item = ({foodItem,bougth,handleBuyButton}) => {
  return (
<li 
className={`${styles["kg_item"]} list-group-item ${bougth && "active"}`}>
<span className={styles["kg-span"]}>{foodItem}</span>
<button className={`${styles.button} btn btn-info`}
onClick = {handleBuyButton}
>Buy</button>
</li>
  )
}
export default Item;