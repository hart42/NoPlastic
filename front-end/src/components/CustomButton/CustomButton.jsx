import React from "react";
import "./style.css";

const CustomButton = ({ text, className, onClick }) => {
  const chooseButtonColor = (className) => {
    if (className === "button__yellow") {
      return "button__yellow button";
    }

    if (className === "button__green") {
      return "button__green button";
    }

    return "default button";
  };

  return (
    <button onClick={onClick} className={chooseButtonColor(className)}>
      {text}
    </button>
  );
};

export default CustomButton;
