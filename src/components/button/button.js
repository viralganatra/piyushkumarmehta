import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

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

const Button = forwardRef(function Button(props, ref) {
  const { children, type = 'button', ...rest } = props;

  return (
    <StyledButton type={type} ref={ref} {...rest}>
      {children}
    </StyledButton>
  );
});

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;
