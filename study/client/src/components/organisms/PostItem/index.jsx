import React from 'react';
import styled from '@emotion/styled';
import moment from 'moment';
<<<<<<< HEAD
=======
import VisibilityIcon from '@material-ui/icons/Visibility';
import FaceIcon from '@material-ui/icons/Face';
import CreateIcon from '@material-ui/icons/Create';
>>>>>>> dc49f2a6bd8e2498175a6231af06daf06d028ad9

const PostItem = ({ title, imgUrl, view, user, createdAt }) => {
  return (
    <Wrapper>
      <Image src={imgUrl} alt={''} />
      <InfoBox>
        <Title>{title}</Title>
        <BlockBox>
<<<<<<< HEAD
          <View>{view}</View>
          <User>{user}</User>
          <CreatedAt>{moment(createdAt).startOf('minute').fromNow()}</CreatedAt>
=======
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
>>>>>>> dc49f2a6bd8e2498175a6231af06daf06d028ad9
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
<<<<<<< HEAD
=======
  cursor: pointer;
>>>>>>> dc49f2a6bd8e2498175a6231af06daf06d028ad9
`;

const Image = styled('img')`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
<<<<<<< HEAD

  width: 100%;
  height: 100%;
  object-fit: cover;

=======
  width: 100%;
  height: 100%;
  object-fit: cover;
>>>>>>> dc49f2a6bd8e2498175a6231af06daf06d028ad9
  opacity: 0.8;
`;

const InfoBox = styled('div')`
  z-index: 1;
  display: flex;
  flex-direction: column;
<<<<<<< HEAD
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
=======
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
>>>>>>> dc49f2a6bd8e2498175a6231af06daf06d028ad9

export default PostItem;
