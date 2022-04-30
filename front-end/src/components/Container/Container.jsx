import React from "react";
import styles from "./style.module.css";

const Container = ({ children }) => {
  return <div className={styles.container__component}>{children}</div>;
};

export default Container;
