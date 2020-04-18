import React from 'react';
import styled from '@emotion/styled';
import moment from 'moment';

const PostItem = ({ title, imgUrl, view, user, createdAt }) => {
  return (
    <Wrapper>
      <Image src={imgUrl} alt={''} />
      <InfoBox>
        <Title>{title}</Title>
        <BlockBox>
          <View>{view}</View>
          <User>{user}</User>
          <CreatedAt>{moment(createdAt).startOf('minute').fromNow()}</CreatedAt>
        </BlockBox>
      </InfoBox>
    </Wrapper>
  );
};

const Wrapper = styled('div')`
  border: 1px solid #eeeeee;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
`;

const Image = styled('img')`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  width: 100%;
  height: 100%;
  object-fit: cover;

  opacity: 0.8;
`;

const InfoBox = styled('div')`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  box-sizing: border-box;
  padding: 16px 0;
  cursor: pointer;
`;
const Title = styled('h2')``;
const BlockBox = styled('div')`
  display: flex;
  justify-content: space-around;
`;
const Description = styled('p')``;
const View = styled('p')``;
const User = styled('p')``;
const CreatedAt = styled('p')``;

export default PostItem;
