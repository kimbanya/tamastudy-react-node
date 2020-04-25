import React from 'react';
import styled from '@emotion/styled';
import moment from 'moment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FaceIcon from '@material-ui/icons/Face';
import CreateIcon from '@material-ui/icons/Create';

const PostItem = ({ title, imgUrl, view, user, createdAt }) => {
  return (
    <Wrapper>
      <Image src={imgUrl} alt={''} />
      <InfoBox>
        <Title>{title}</Title>
        <BlockBox>
          <View>
            <VisibilityIcon />
            <InnerText>{view}</InnerText>
          </View>
          <User>
            <FaceIcon />
            <InnerText>{user && user.username}</InnerText>
          </User>
          <CreatedAt>
            <CreateIcon />
            <InnerText> {moment(createdAt).startOf('minute').fromNow()}</InnerText>
          </CreatedAt>
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
  cursor: pointer;
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
  background-color: rgba(255, 255, 255, 0.8);
  box-sizing: border-box;
  padding-top: 16px;
`;
const Title = styled('h2')`
  text-align: center;
`;

const BlockBox = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, 33.3%);
  grid-auto-rows: 60px;
  justify-items: center;
  align-items: center;
`;

const BlockItem = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 8px;
`;

const View = styled(BlockItem)``;
const User = styled(BlockItem)``;
const CreatedAt = styled(BlockItem)``;
const InnerText = styled('p')`
  margin-top: 4px;
`;

export default PostItem;
