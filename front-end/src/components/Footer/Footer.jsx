import React from "react";
import styles from "./style.module.css";
import homeIcon from "../../assets/home.svg";
import searchIcon from "../../assets/search.svg";
import storeIcon from "../../assets/store.svg";
import supportIcon from "../../assets/support.svg";
import cashbackIcon from "../../assets/cashback.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={homeIcon} alt="" />
      <img src={searchIcon} alt="" />
      <img src={cashbackIcon} alt="" />
      <img src={storeIcon} alt="" />
      <img src={supportIcon} alt="" />
    </footer>
  );
};

export default Footer;
