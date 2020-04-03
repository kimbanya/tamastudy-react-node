import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../../store/actions/counter.action';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';

const Htag = styled.h1`
  ${(props) => {
    const { big } = props;
    const { colors, mixins } = props.theme;
    return css`
      color: ${colors.base.grey};
      ${mixins.flexCenter};
      padding: ${big ? '3rem' : '1rem'};
    `;
  }}
`;

const Test = ({}) => {
  const theme = useTheme();
  theme.return(<div>Test</div>);
};

const mapStateToProps = ({ counter }) => ({
  counter,
});

export default connect(mapStateToProps, { increment, decrement })(Test);
