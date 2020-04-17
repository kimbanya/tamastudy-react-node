import moment from 'moment';
import React from 'react';
import styled from 'styled-components';
import { IPostComment } from '../../store/store-types';

interface IProps {
  author: string;
  comment: IPostComment;
  currentUserId: string | null;
  handleDeleteComment: (postCommentId: string) => void;
}

const PostCommentCard = ({
  author,
  comment: { _id, text, user, createdAt },
  currentUserId,
  handleDeleteComment,
}: IProps) => {
  return (
    <CommentContainer>
      <ProfileBox>
        <ProfileImage
          src={
            'https://stickershop.line-scdn.net/stickershop/v1/product/16687/LINEStorePC/main.png;compress=true'
          }
          alt={'noImage'}
        />
      </ProfileBox>
      <CommentBox>
        <CommentInfo>
          <UserName>{author === user._id ? `${user.username} (작성자)` : user.username}</UserName>
          <CreatedAt>{moment(createdAt).format('llll')}</CreatedAt>
        </CommentInfo>
        <Content>
          <Text>{text}</Text>
          {currentUserId === user._id && (
            <ButtonBox>
              <CustomButton onClick={() => handleDeleteComment(_id)}>삭제</CustomButton>
            </ButtonBox>
          )}
        </Content>
      </CommentBox>
    </CommentContainer>
  );
};

export default PostCommentCard;

const CommentContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: ${(props) => props.theme.space * 2}px 0;
  display: flex;
  align-items: center;
`;

const ProfileBox = styled.div`
  flex: 0 0 48px;
  width: 48px;
  height: 48px;
  overflow: hidden;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.base.grey};
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CommentBox = styled.div`
  box-sizing: border-box;
  padding-left: ${(props) => props.theme.space}px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CommentInfo = styled.p``;

const UserName = styled.span`
  font-size: 14px;
  font-weight: 400;
  margin-right: ${(props) => props.theme.space}px;
`;

const CreatedAt = styled.span``;

const Content = styled.div`
  margin: ${(props) => props.theme.space}px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled(CommentInfo)`
  font-size: 16px;
  margin: 0;
  width: 100%;
  word-break: break-all;
`;

const ButtonBox = styled.div`
  padding-left: 32px;
`;

const Button = styled.button`
  font-size: 8px;
  font-weight: 700;
  background-color: red;
  box-sizing: border-box;
  width: 60px;
  padding: 8px 0;
  cursor: pointer;
  color: white;
`;

const CustomButton = styled(Button)``;
