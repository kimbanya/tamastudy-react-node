import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import theme from '../../../theme';

const Button = ({
  text,
  onClick,
  type = 'submit',
  color,
  backgroundColor,
  hoverBackgroundColor,
  className,
  children,
  ...props
}) => {
  return (
    <button
      css={css`
        cursor: pointer;
        outline: none;
        border-radius: 8px;
        box-sizing: border-box;
        padding: ${theme.space * 2}px ${theme.space * 2}px;
        font-weight: 900;
        box-shadow: 10px 10px 15px -9px rgba(0, 0, 0, 0.43);
        transition: all 0.2s ease;
        word-wrap: keep-all;
        &:not(:last-of-type) {
          margin-right: ${theme.space}px;
        }
        &:not(:first-of-type) {
          margin-left: ${theme.space}px;
        }
        -webkit-text-fill-color: ${color ? color : '#ffffff!important'};
        color: ${color ? color : '#ffffff!important'};
        background-color: ${backgroundColor ? backgroundColor : '#34495e'};
        &:hover {
          background-color: ${hoverBackgroundColor ? hoverBackgroundColor : '#182223'};
        }
      `}
      onClick={onClick}
      type={type}
      {...props}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
