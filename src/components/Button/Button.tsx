import React from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
  size: string;
  variants: string;
  disabled: boolean;
}

const Button = ({ label, size, variants, disabled }: ButtonProps) => {
  return (
    <button className={`${size} ${variants} ${disabled ? "isDisable" : ""}`}>
      {label}
    </button>
  );
};

export default Button;
