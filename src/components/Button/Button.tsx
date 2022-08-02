import React from "react";
import "./styles/Button.scss";

export interface ButtonProps {
  label?: string;
  size?: string;
  variants?: string;
  disabled?: boolean;
  onClick?: () => void
}

const Button = ({ label, size, variants, disabled, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${size} ${variants} ${disabled ? "isDisable" : ""}`}>
      {label}
    </button>
  );
};

export default Button;
