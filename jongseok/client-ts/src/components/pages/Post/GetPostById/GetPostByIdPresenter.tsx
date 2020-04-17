import moment from 'moment';
import React from 'react';
import styled from 'styled-components';
import { IPost } from '../../../../store/store-types';
import SlateEditor from '../../../editor/SlateEditor';
import PostComments from '../../../organisms/PostComments/PostCommentsContainer';

interface Props {
  post: IPost;
  handleDeletePost: (postId: string) => () => void;
}

const GetPostByIdPresenter = ({ post, handleDeletePost }: Props) => {
  return (
    <PresenterWrapper>
      <Category>Web</Category>
      <UserWrapper>
        <AvatarWrapper>
          <Avatar
            src={'https://t1.daumcdn.net/cfile/tistory/2122B33357320AEB30'}
            alt={'user-icon'}
          />
        </AvatarWrapper>
        <UserInfo>
          <h4>{post.user}</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quasi. Aut adipisci
            doloremque deleniti consequuntur nulla nesciunt eum veniam itaque magni impedit!
            Tempore, officia! Consequatur odio quidem suscipit pariatur nesciunt? Lorem ipsum dolor
            sit amet consecte
          </p>
        </UserInfo>
      </UserWrapper>
      <Title>{post.title}</Title>
      <ElseWrapper>
        <span>CreatedAt {moment(post.createdAt).format('LLLL')}</span>
        <span>View {post.view}</span>
      </ElseWrapper>
      <SlateEditor readOnly content={post.description} />
      <ButtonWrapper>
        <button>수정</button>
        <button onClick={handleDeletePost(post._id)}>삭제</button>
      </ButtonWrapper>
      <PostComments />
    </PresenterWrapper>
  );
};

const PresenterWrapper = styled.div`
  width: 100%;
`;

const Category = styled.h3`
  border-bottom: 1px solid #e2e2e2;
  padding: 8px 0;
  color: #636e72;
  font-size: 1.8rem;
  font-style: italic;
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarWrapper = styled.div`
  flex: 0 0 80px;
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 50%;
  margin: 16px auto 16px 0;
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UserInfo = styled.div`
  box-sizing: border-box;
  padding: 16px;
  font-weight: 200;
  h4 {
    font-size: 1.2rem;
    margin-bottom: 4px;
    font-weight: 400;
  }
  p {
    font-size: 1.1rem;
    font-weight: 100;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 8px;
  word-break: break-all;
`;

const ElseWrapper = styled.div`
  margin-bottom: 42px;
  span {
    font-style: italic;
    margin-right: 8px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.theme.space * 4}px 0;
  > button {
    cursor: pointer;
    outline: none;
    background-color: ${(props) => props.theme.colors.base.black};
    color: ${(props) => props.theme.colors.base.white};
    box-sizing: border-box;
    padding: ${(props) => `${props.theme.space}px ${props.theme.space * 2}px`};
    margin: 0 ${(props) => `${props.theme.space}px`};
  }
`;

export default GetPostByIdPresenter;
