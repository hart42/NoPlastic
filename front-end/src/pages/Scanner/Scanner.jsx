import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container/Container";
import styles from "./style.module.css";
import qrCode from "../../assets/scanner.svg";
import CustomButton from "../../components/CustomButton/CustomButton";
import { Link } from "react-router-dom";

const Scanner = () => {
  return (
    <Container color="default">
      <Header />
      <div className={styles.scanner}>
        <img src={qrCode} alt="" />
        <CustomButton text="Confirmar" />
        <Link to="/home">Voltar</Link>
      </div>
      <Footer />
    </Container>
  );
};

export default Scanner;
