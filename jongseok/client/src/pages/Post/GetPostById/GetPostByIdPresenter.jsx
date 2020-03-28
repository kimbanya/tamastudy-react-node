import React from 'react';
import Button from '../../../components/atoms/Button';
import styled from '@emotion/styled';
import theme from '../../../theme';
import setTitle from '../../../utils/setTitle';

const Container = styled.div`
  width: 100%;
`;

const ImgBox = styled.div``;
const ImgItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextBox = styled.div`
  font-size: 20px;
  > p {
    margin: ${theme.space}px 0;
  }
`;
const View = styled.p``;
const Title = styled.p``;
const Desc = styled.p``;
const CreatedAt = styled.p``;

const ButtonBox = styled.div`
  margin: 16px auto;
  display: flex;
  justify-content: center;
`;

const GetPostByIdPresenter = ({
  currentUserId,
  post,
  deletePostById,
  onClickMoveToBack,
  onClickMoveToUpdate,
}) => {
  const { view, title, description, imgUrl, createdAt, user } = post;

  return (
    <Container>
      {setTitle('Post')}
      <ImgBox>
        <ImgItem src={imgUrl} alt={'img'} />
      </ImgBox>
      <TextBox>
        <View>View: {view}</View>
        <Title>Title: {title}</Title>
        <Desc>description: {description}</Desc>
        <CreatedAt>CreatedAt: {createdAt}</CreatedAt>
      </TextBox>
      <ButtonBox>
        {currentUserId === user && (
          <>
            <Button onClick={deletePostById} backgroundColor={'red'} text={'삭제'} />
            <Button onClick={onClickMoveToUpdate} backgroundColor={'green'} text={'수정'} />
          </>
        )}
        <Button onClick={onClickMoveToBack} backgroundColor={'blue'} text={'이전'} />
      </ButtonBox>
    </Container>
  );
};

export default GetPostByIdPresenter;
