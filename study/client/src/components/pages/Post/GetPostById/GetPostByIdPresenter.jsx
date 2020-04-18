import React from 'react';
import PostItem from '../../../organisms/PostItem';
import styled from '@emotion/styled';

const GetPostByIdPresenter = ({ post }) => {
  return (
    <Wrapper>
      <PostItem {...post} isPost={true} />
    </Wrapper>
  );
};

const Wrapper = styled('div')`
  display: grid;
  grid-auto-rows: 100vh;
`;

export default GetPostByIdPresenter;
