import React from "react";
import logo from "../../assets/logo.svg";
import styles from "./style.module.css";
import CustomButton from "../../components/CustomButton/CustomButton";
import Container from "../../components/Container/Container";

const Login = () => {
  return (
    <Container>
      <section className={styles.login}>
        <img src={logo} alt="No Plastic Logo" />
        <div className={styles.login__buttons}>
          <CustomButton
            text="Entrar na minha conta"
            className="button__yellow"
          />
          <CustomButton
            className="button__green"
            text="Criar conta NO PLASTIC"
          />
        </div>
      </section>
    </Container>
  );
};

export default Login;
