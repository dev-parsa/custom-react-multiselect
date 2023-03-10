import React, { useState } from "react";
import styles from "./styles/select.module.css";
import { TfiAngleDown } from "react-icons/tfi";
import Element from "./Element";

type OptionProps = {
  id: number;
  name: string;
};
type SelectProps = {
  options: OptionProps[];
};
const Select = ({ options }: SelectProps) => {
  //states
  const [show, setShow] = useState(true);
  const [click, setClick] = useState<number[]>([]);
  const [label, setLabel] = useState<string[]>([]);

  function addToLabel(name: string) {
    const didFind = label.includes(name);
    if (didFind === true) return;
    else setLabel([...label, name]);
  }
  console.log(label);
  return (
    <div className={styles.container} onClick={() => setShow(!show)}>
      <div className={styles.seperate}>
        <span>{label[0] != null && <Element elValue={label} />}</span>
        <div className={styles.indicators}>
          <div>
            <TfiAngleDown color="white" />
          </div>
        </div>
      </div>
      <ul
        className={styles["options-list"]}
        style={show ? { display: "flex" } : { display: "none" }}
      >
        {options.map((option) => (
          <li
            onClick={() => {
              addToLabel(option.name);
              setClick([...click, option.id]);
            }}
            className={click.includes(option.id) ? styles.clicked : ""}
            key={option.id}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
