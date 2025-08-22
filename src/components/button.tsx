import styled from '@emotion/styled';
import { type ButtonHTMLAttributes, type ForwardedRef, forwardRef, type ReactNode } from 'react';

const StyledButton = styled.button`
  background: var(--color-attention);
  border: 1px solid transparent;
  color: white;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 2px;
  padding: 11px 28px;
  text-transform: uppercase;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    background: var(--color-accent);
  }
  &:focus {
    outline: none;
    border-color: var(--color-attention);
  }
`;

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, type = 'button', ...rest },
  ref: ForwardedRef<HTMLButtonElement>,
) {
  return (
    <StyledButton type={type} ref={ref} {...rest}>
      {children}
    </StyledButton>
  );
});
