import React from 'react';
import { IPost } from '../../../store/reducers/v1/post.reducer';
import moment from 'moment';
import 'moment/locale/ko';
import styled from 'styled-components';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { mediaQueries } from '../../../styles/mediaQuery';
import Icon from '../../atoms/Icon';
import OpenIcon from '../../../assets/icons/open.svg';

interface Props extends RouteComponentProps<any> {
  post: IPost;
}

const PostCard = ({ history, post }: Props) => {
  return (
    <Card onClick={() => history.push(`/post/${post._id}`)}>
      <Card__image img={post.imgUrl} />
      <Card__text>
        <Card__date>{moment(post.createdAt).startOf('second').fromNow()}</Card__date>
        <Card__title>{post.title}</Card__title>
      </Card__text>
      <Card__stats>
        <Card__stat>
          <Card__value>
            4<sup>m</sup>
          </Card__value>
          <Card__type>LIKE</Card__type>
        </Card__stat>
        <Card__stat>
          <Card__value>{post.view}</Card__value>
          <Card__type>VIEW</Card__type>
        </Card__stat>
        <Card__stat>
          <Card__value>{post.postComments.length}</Card__value>
          <Card__type>COMMENTS</Card__type>
        </Card__stat>
      </Card__stats>
      <Card__hover className={'postCard__hover'}>
        <Icon src={OpenIcon} size={40} />
        <Card__hover_text>바로가기</Card__hover_text>
      </Card__hover>
    </Card>
  );
};

const Card = styled.div`
  * {
    font-family: 'Share', cursive;
  }
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

const Card__hover = styled.div`
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

const Card__hover_text = styled.p`
  margin-top: 8px;
`;

const Card__image = styled.div<{ img: string }>`
  background-image: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${mediaQueries('mobileL')`
    grid-area: image;
  `}
`;

const Card__text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 0;
  right: 0;
  bottom: 50px;

  ${mediaQueries('mobileL')`
    position:initial;
    grid-area: text;
  `}
`;

const Card__date = styled.span`
  font-size: 10px;
  color: white;

  ${mediaQueries('mobileL')`
    color: rgba(255, 7, 110);
  `}
`;

const Card__title = styled.p`
  margin-top: 4px;
  font-size: 16px;
  color: white;
  font-weight: 700;

  ${mediaQueries('mobileL')`
    color: black;
  `}
`;

const Card__stats = styled.div`
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

const Card__stat = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 8px;
  color: white;
`;

const Card__value = styled.div`
  font-size: 10px;
  font-weight: 500;
  &:sup {
    font-size: 6px;
  }
`;

const Card__type = styled.div`
  font-size: 6px;
  font-weight: 300;
  text-transform: uppercase;
`;

export default withRouter(PostCard);
