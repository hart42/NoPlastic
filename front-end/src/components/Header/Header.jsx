import React from "react";
import styles from "./style.module.css";
import imgPerfil from "../../assets/perfil.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__itens}>
        <h1>Olá, Maria</h1>
        <img src={imgPerfil} alt="" />
      </div>
    </header>
  );
};

export default Header;
