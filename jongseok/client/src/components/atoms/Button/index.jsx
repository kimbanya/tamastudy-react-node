import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import theme from '../../../theme';

const ButtonStyle = styled.button`
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  box-sizing: border-box;
  padding: ${theme.space * 2}px ${theme.space * 3}px;
  font-weight: 900;
  box-shadow: 10px 10px 15px -9px rgba(0, 0, 0, 0.43);
  transition: all 0.2s ease;
  &:not(:last-of-type) {
    margin-right: ${theme.space}px;
  }
  &:not(:first-of-type) {
    margin-left: ${theme.space}px;
  }

  color: ${(props) => (props.color ? props.color : '#ffffff')};
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : '#34495e')};
  &:hover {
    background-color: ${(props) =>
      props.hoverBackgroundColor ? props.hoverBackgroundColor : '#182223'};
  }
`;

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
    <ButtonStyle
      onClick={onClick}
      type={type}
      color={color}
      backgroundColor={backgroundColor}
      hoverBackgroundColor={hoverBackgroundColor}
      className={className}
      {...props}
    >
      {text}
    </ButtonStyle>
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
