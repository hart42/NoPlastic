import React from "react";
import styles from "./style.module.css";
import imgPerfil from "../../assets/perfil.png";

const Header = () => {
  return (
    <header className={styles.header__container}>
      <h1>Olá, Maria</h1>
      <img src={imgPerfil} alt="" />
    </header>
  );
};

export default Header;
