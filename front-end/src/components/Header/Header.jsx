import React from "react";
import styles from "./style.module.css";
import imgPerfil from "../../assets/perfil.png";

const Header = ({ balance }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__itens}>
        <div>
          <h1>Olá, Maria</h1>
          <span>{balance}</span>
        </div>
        <img src={imgPerfil} alt="" />
      </div>
    </header>
  );
};

export default Header;
