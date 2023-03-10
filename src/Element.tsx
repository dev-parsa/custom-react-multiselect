import React from "react";
import styles from "./styles/element.module.css";
import { TfiClose } from "react-icons/tfi";
type elementProps = {
  elValue: string[];
};
function Element({ elValue }: elementProps) {
  return (
    <div className={styles.container}>
      {elValue.map((el) => (
        <div className={styles.element}>
          <span>{el}</span>
          <TfiClose color="white" size={10} />
        </div>
      ))}
    </div>
  );
}

export default Element;
