import React from 'react';
import Button from '../../../components/atoms/Button';

const GetPostByIdPresenter = ({ post, deletePostById, onClickMoveToBack, onClickMoveToUpdate }) => {
  return (
    <div>
      <div>View: {post.view}</div>
      <div>Title: {post.title}</div>
      <div>description: {post.description}</div>
      <div>
        <img src={post.imgUrl && post.imgUrl[0]} alt={'img'} />
      </div>
      <div>CreatedAt: {post.createdAt}</div>
      <Button onClick={deletePostById} backgroundColor={'red'} text={'삭제'} />
      <Button onClick={onClickMoveToUpdate} backgroundColor={'green'} text={'수정'} />
      <Button onClick={onClickMoveToBack} backgroundColor={'blue'} text={'이전'} />
    </div>
  );
};

export default GetPostByIdPresenter;
