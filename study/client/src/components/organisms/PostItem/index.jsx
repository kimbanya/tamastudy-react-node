import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import moment from 'moment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FaceIcon from '@material-ui/icons/Face';
import CreateIcon from '@material-ui/icons/Create';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletePostById, clearPost } from '../../../store/actions/v1/post.action';

const PostItem = ({ _id, title, description, imgUrl, view, user, createdAt, isPost = false }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onClickDetailPage = useCallback(() => {
    history.push(`/post/${_id}`);
  }, [history, _id]);

  const onClickBackPage = useCallback(
    (event) => {
      event.stopPropagation();
      dispatch(clearPost());
      history.push('/posts');
    },
    [history],
  );

  const onClickUpdatePage = useCallback(
    (event) => {
      event.stopPropagation();
      history.push(`/post/${_id}/update`);
    },
    [history],
  );

  const onClickPostDelete = useCallback(() => {
    dispatch(deletePostById(_id, history));
  }, [dispatch, _id, history]);

  return (
    <Wrapper onClick={isPost ? null : onClickDetailPage} isPost={isPost}>
      <Image src={imgUrl} alt={''} isPost={isPost} />
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
      {isPost && (
        <>
          <Description>{description}</Description>
          <ButtonBox>
            <BackButton onClick={onClickBackPage}>이전</BackButton>
            <UpdateButton onClick={onClickUpdatePage}>수정</UpdateButton>
            <DeleteButton onClick={onClickPostDelete}>삭제</DeleteButton>
          </ButtonBox>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled('div')`
  border: 1px solid #eeeeee;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.isPost ? 'flex-start' : 'flex-end')};
  ${(props) => !props.isPost && 'cursor: pointer'};
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
  opacity: ${(props) => (props.isPost ? '0.5' : '0.7')};
  transition: all 0.2s ease-in;
  &:hover {
    ${(props) => !props.isPost && 'opacity: 1'}
  }
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

const Description = styled('div')`
  z-index: 1;
  box-sizing: border-box;
  padding: 32px;
  width: 100%;
  word-break: break-all;
`;

const ButtonBox = styled('div')`
  z-index: 1;
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  bottom: 32px;
  width: 100%;
`;
const Button = styled('button')`
  box-sizing: border-box;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 8px;
  font-size: 14px;
  color: white;
  margin: 0 16px;
  outline: none;
`;

const BackButton = styled(Button)`
  background-color: #3498db;
`;
const UpdateButton = styled(Button)`
  background-color: #27ae60;
`;
const DeleteButton = styled(Button)`
  background-color: #d63031;
`;

export default PostItem;
