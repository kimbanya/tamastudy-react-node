import React, { useState, useEffect } from 'react';
import UpdatePostByIdPresenter from './UpdatePostByIdPresenter';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPostById, updatePostById } from '../../../store/actions/post.action';

const UpdatePostByIdContainer = ({ history, match, postState, getPostById, updatePostById }) => {
  const postId = match.params.postId;
  useEffect(() => {
    getPostById(postId);
  }, []);

  const [formData, setFormData] = useState({
    title: postState.post.title,
    description: postState.post.description,
    imgUrl: postState.post.imgUrl,
  });
  const [imgCount, setImgCount] = useState(1);
  const [imgUrl, setImgUrl] = useState([]);
  const [imgCheck, setImgCheck] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    updatePostById(formData, history);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImgCount = (event) => {
    if (imgCount >= 1) {
      setImgCount(event.target.value);
    } else if (imgCount < 1) {
      alert('오류');
    }
  };

  const handleChangeImgUrl = (event) => {
    setImgUrl({
      ...imgUrl,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheckImgUrl = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      imgUrl: Object.values(imgUrl),
    });
    setImgCheck(true);
  };

  if (postState.loading) {
    return <div>Loading...</div>;
  }

  return (
    <UpdatePostByIdPresenter
      formData={formData}
      imgCount={imgCount}
      imgUrl={imgUrl}
      imgCheck={imgCheck}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      handleChangeImgCount={handleChangeImgCount}
      handleChangeImgUrl={handleChangeImgUrl}
      handleCheckImgUrl={handleCheckImgUrl}
    />
  );
};

const mapStateToProps = ({ postState }) => ({
  postState,
});

export default withRouter(
  connect(mapStateToProps, { getPostById, updatePostById })(UpdatePostByIdContainer),
);
