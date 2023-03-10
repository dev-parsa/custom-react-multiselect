import React from "react";
import styles from "./styles/element.module.css";
import { TfiClose } from "react-icons/tfi";
type elementProps = {
  elList: string[];
  click: string[];
  setClick: React.Dispatch<React.SetStateAction<string[]>>;
};
function Element({ elList, setClick, click }: elementProps) {
  function deleteItem(el: string) {
    const foundItem = elList.findIndex((n) => n === el);
    elList.splice(foundItem, 1);
    //for changing the styles
    const newList = click.filter((element) => element != el);
    setClick(newList);
    console.log(elList);
  }
  return (
    <div className={styles.container}>
      {elList.map((el, i) => (
        <div key={i} className={styles.element}>
          <span>{el}</span>
          <TfiClose
            color="white"
            size={10}
            onClick={() => deleteItem(el)}
            style={{ cursor: "pointer" }}
          />
        </div>
      ))}
    </div>
  );
}

export default Element;
