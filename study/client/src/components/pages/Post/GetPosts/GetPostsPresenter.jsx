import React from 'react';
import PostItem from '../../../organisms/PostItem';
import styled from '@emotion/styled';

const GetPostsPresenter = ({ posts }) => {
  return (
    <Wrapper>
      {posts.map((post) => (
        <PostItem key={post._id} {...post} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled('div')`
  display: grid;
  background-color: red;
`;
export default GetPostsPresenter;
