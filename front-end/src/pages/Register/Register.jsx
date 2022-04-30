import React from "react";
import styles from "./style.module.css";
import Container from "../../components/Container/Container";
import CustomButton from "../../components/CustomButton/CustomButton";

const Register = () => {
  return (
    <Container>
      <div className={styles.container__register}>
        <div className={styles.back}>
          <a href="https://google.com.br">voltar</a>
        </div>
        <div className={styles.container__register__section}>
          <div className={styles.container__register__title}>
            <h1>Crie sua conta</h1>
            <p>É super rápido!</p>
          </div>
          <div className={styles.container__input}>
            <label htmlFor="name">Nome</label>
            <input id="name" type="text" />
          </div>
          <div className={styles.container__input}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
          </div>
          <div className={styles.container__input}>
            <label htmlFor="phone">Telefone</label>
            <input id="phone" type="" />
          </div>
          <div className={styles.container__input}>
            <label htmlFor="cep">CEP</label>
            <input id="cep" type="text" />
          </div>
          <div className={styles.container__input}>
            <div className={styles.container__input__last}>
              <label htmlFor="pass">Crie sua senha</label>
              <span>(8 dígitos)</span>
            </div>
            <input id="pass" type="password" />
          </div>
        </div>

        <CustomButton className={"default"} text="Confirmar" />
      </div>
    </Container>
  );
};

export default Register;
