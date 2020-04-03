import React from 'react';
import { connect } from 'react-redux';
import { IRootState } from '../../store/reducers';
import styled from 'styled-components';

interface IProps {
  postState: IRootState['postState'];
}

const Post: React.SFC<IProps> = ({ postState }) => {
  return <Title>post</Title>;
};

const mapStateToProps = (state: IRootState) => ({
  postState: state.postState,
});

export default connect(mapStateToProps, {})(Post);

const Title = styled.h1`
  color: ${(props) => props.theme.colors.base.grey};
  margin-left: ${(props) => props.theme.space}px;
  font-weight: ${(props) => props.theme.fonts.body1.fontWeight};
`;
