import React, { HTMLAttributes } from "react";
import "./styles/Button.scss";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label?: string;
  size?: string;
  variants?: string;
  disabled?: boolean;
}

const Button = ({ label, size, variants, disabled, ...props }: ButtonProps) => {
  return (
    <button {...props} className={`${size} ${variants} ${disabled ? "isDisable" : ""}`}>
      {label}
    </button>
  );
};

export default Button;
