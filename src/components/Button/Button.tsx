import React, { HTMLAttributes } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

export interface StyledButtonProps {
  sizeStyle?:FlattenSimpleInterpolation | undefined
  variantStyle?:FlattenSimpleInterpolation | undefined
}

const SIZES = {
  sm: css`
    --button-font-size: 0.875rem;
    --button-padding: 8px 12px;
    --button-radius: 4px;
  `,
  md: css`
    --button-font-size: 1rem;
    --button-padding: 12px 16px;
    --button-radius: 8px;
  `,
  lg: css`
    --button-font-size: 1.25rem;
    --button-padding: 16px 20px;
    --button-radius: 12px;
  `
};

const VARIANTS = {
  success: css`
    --button-color: #ffffff;
    --button-bg-color: #28a745;
    --button-hover-bg-color: #218838;
  `,
  error: css`
    --button-color: #ffffff;
    --button-bg-color: #dc3545;
    --button-hover-bg-color: #c82333;
  `,
  warning: css`
    --button-color: #212529;
    --button-bg-color: #ffc107;
    --button-hover-bg-color: #e0a800;
  `
};

const StyledButton = styled.button<StyledButtonProps>`
  ${(p) => p.sizeStyle}
  ${(p) => p.variantStyle}

  margin: 0;
  border: none;
  cursor: pointer;
  font-size: var(--button-font-size, 1rem);
  padding: var(--button-padding, 12px 16px);
  border-radius: var(--button-radius, 8px);
  color: var(--button-color, #ffffff);
  background: var(--button-bg-color, #0d6efd);

  &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, #025ce2);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #025ce2);
  }
`;

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label?: string;
  size?: string;
  variant?: string;
  disabled?: boolean;
}

const Button = ({ disabled, size, variant, children,...props }:ButtonProps) => {
  const sizeStyle = size === 'sm' ? SIZES.sm : size === 'md' ? SIZES.md : size === 'lg' ? SIZES.lg : undefined
  const variantStyle = variant === 'success' ? VARIANTS.success : variant === 'error' ? VARIANTS.error : variant === 'warning' ? VARIANTS.warning : undefined

  return (
    <StyledButton
    {...props}
      disabled={disabled}
      sizeStyle={sizeStyle}
      variantStyle={variantStyle}
    >
      {children}
    </StyledButton>
  );
}

export default Button;

