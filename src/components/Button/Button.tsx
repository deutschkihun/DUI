import React from "react";
import styled, { FlattenSimpleInterpolation, css } from "styled-components";

interface SizeProps {
  sm: FlattenSimpleInterpolation;
  md: FlattenSimpleInterpolation;
  lg: FlattenSimpleInterpolation;
}

interface VariantProps {
  success: FlattenSimpleInterpolation;
  error: FlattenSimpleInterpolation;
  warning: FlattenSimpleInterpolation;
}

interface StyledButtonProps {
  sizeStyle: FlattenSimpleInterpolation;
  variantStyle: FlattenSimpleInterpolation | undefined;
}

export const SIZES: SizeProps = {
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
  `,
};

export const VARIANTS: VariantProps = {
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
  `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  ${(p: { sizeStyle: FlattenSimpleInterpolation }) => p.sizeStyle}
  ${(p: { variantStyle: FlattenSimpleInterpolation | undefined }) =>
    p.variantStyle}
    margin: 0;
  border: none;
  cursor: pointer;
  font-size: var(--button-font-size, 1rem);
  padding: var(--button-padding, 12px 16px);
  border-radius: var(--button-radius, 8px);
  background: var(--button-bg-color, #0d6efd);
  color: var(--button-color, #ffffff);
  margin: 1rem;

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

export interface ButtonProps {
  disabled: boolean;
  children: string;
  size: string;
  variant: string;
  redirect?: string;
}

const Button = ({ disabled, children, size, variant }: ButtonProps) => {
  const sizeStyle =
    size == "sm" ? SIZES.sm : size == "md" ? SIZES.md : SIZES.lg;
  const variantStyle =
    variant == "success"
      ? VARIANTS.success
      : variant == "error"
      ? VARIANTS.error
      : variant == "warning"
      ? VARIANTS.warning
      : undefined;
  return (
    <StyledButton
      disabled={disabled}
      sizeStyle={sizeStyle}
      variantStyle={variantStyle}
    >
      {children}
    </StyledButton>
  );
};
export default Button;
