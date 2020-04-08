import moment from 'moment';
import 'moment/locale/ko';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import OpenIcon from '../../../assets/icons/open.svg';
import useSetDefaultImage from '../../../hooks/useSetDefaultImage';
import { IPost } from '../../../store/store-types';
import { mediaQueries } from '../../../styles/mediaQuery';
import { ellipsis } from '../../../styles/utils/text';
import Icon from '../../atoms/Icon';

interface Props extends RouteComponentProps<any> {
  post: IPost;
}

const PostCard = ({ history, post }: Props) => {
  const { imgLoadError, setDefaultImageFn } = useSetDefaultImage();

  return (
    <Card onClick={() => history.push(`/post/${post._id}`)}>
      <CardImage
        src={post.imgUrl}
        err={imgLoadError}
        onError={(e: any) => {
          setDefaultImageFn(e, 'image');
        }}
      />
      <CardText>
        <CardDate>{moment(post.createdAt).startOf('second').fromNow()}</CardDate>
        <CardTitle>{post.title}</CardTitle>
      </CardText>
      <CardStats>
        <CardStat>
          <CardValue>
            4<sup>m</sup>
          </CardValue>
          <CardType>LIKE</CardType>
        </CardStat>
        <CardStat>
          <CardValue>{post.view}</CardValue>
          <CardType>VIEW</CardType>
        </CardStat>
        <CardStat>
          <CardValue>{post.postComments && post.postComments.length}</CardValue>
          <CardType>COMMENTS</CardType>
        </CardStat>
      </CardStats>
      <CardHover className={'postCard__hover'}>
        <Icon src={OpenIcon} size={40} />
        <CardHoverText>바로가기</CardHoverText>
      </CardHover>
    </Card>
  );
};

const Card = styled.div`
  align-self: center;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 240px;
  border-radius: 4px;
  overflow: hidden;
  background: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
  transition: 0.5s ease;
  cursor: pointer;
  position: relative;

  &:hover .postCard__hover {
    opacity: 1;
    visibility: visible;
  }

  ${mediaQueries('mobileL')`
    grid-template-rows: 240px 100px 60px;
    grid-template-areas: 'image' 'text' 'stats';
  `}
`;

const CardHover = styled.div`
  opacity: 0;
  visibility: hidden;
  background-color: white;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  transition: all 0.2s ease-in-out;
`;

const CardHoverText = styled.p`
  margin-top: 8px;
`;

const CardImage = styled.img<{ err: boolean }>`
  align-self: center;
  justify-self: center;
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mediaQueries('mobileL')`
    grid-area: image;
  `}
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(47, 47, 47, 0.7) 60%,
    rgba(190, 190, 190, 0.05) 100%
  );

  padding: 16px 0 8px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 36px;

  ${mediaQueries('mobileL')`
    position:initial;
    grid-area: text;
    background: none;
  `}
`;

const CardDate = styled.span`
  font-size: 1rem;
  color: white;

  ${mediaQueries('mobileL')`
    color: rgba(255, 7, 110);
  `}
`;

const CardTitle = styled.p`
  margin-top: 4px;
  font-size: 1.6rem;
  color: white;
  font-weight: 700;
  ${ellipsis()};
  ${mediaQueries('mobileL')`
    color: black;
  `}
`;

const CardStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  background-color: black;

  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  ${mediaQueries('mobileL')`
    position:initial;
    grid-area: stats;
  `}
`;

const CardStat = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 8px;
  color: white;
`;

const CardValue = styled.div`
  font-size: 1rem;
  font-weight: 500;
  &:sup {
    font-size: 0.6rem;
  }
`;

const CardType = styled.div`
  font-size: 0.6rem;
  font-weight: 300;
  text-transform: uppercase;
`;

export default withRouter(PostCard);
