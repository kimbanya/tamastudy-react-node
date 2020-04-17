import React from 'react';
import styled from 'styled-components';
import { IPostComment } from '../../../store/store-types';
import PostCommentCard from '../../molecules/PostCommentCard';

interface Props {
  comments: IPostComment[];
  currentUserId: string | null;
  author: string;
  handleDeleteComment: (postCommentId: string) => void;
}

const PostCommentsPresenter = ({ comments, currentUserId, author, handleDeleteComment }: Props) => {
  return (
    <Wrapper>
      <h1>Comments</h1>
      {comments.map((comment) => (
        <PostCommentCard
          key={comment._id}
          comment={comment}
          author={author}
          currentUserId={currentUserId}
          handleDeleteComment={handleDeleteComment}
        />
      ))}
    </Wrapper>
  );
};
export default PostCommentsPresenter;

const Wrapper = styled.div`
  margin-top: ${(props) => props.theme.space * 10}px;
`;
