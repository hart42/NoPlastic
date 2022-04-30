import React from "react";
import logo from "../../assets/logo.svg";
import styles from "./style.module.css";
import CustomButton from "../../components/CustomButton/CustomButton";
import Container from "../../components/Container/Container";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <section className={styles.login}>
        <img src={logo} alt="No Plastic Logo" />
        <div className={styles.login__buttons}>
          <Link to="/signup">
            <CustomButton
              text="Entrar na minha conta"
              className="button__yellow"
            />
          </Link>
          <Link to="/register">
            <CustomButton
              className="button__green"
              text="Criar conta NO PLASTIC"
            />
          </Link>
        </div>
      </section>
    </Container>
  );
};

export default Login;
