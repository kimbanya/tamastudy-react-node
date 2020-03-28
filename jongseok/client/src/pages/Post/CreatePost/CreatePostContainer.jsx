import React, { useState } from 'react';
import CreatePostPresenter from './CreatePostPresenter';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../../../store/actions/post.action';

const initialState = {
  title: '',
  description: '',
  imgUrl: '',
};

const CreatePostContainer = ({ history, createPost }) => {
  const [formData, setFormData] = useState(initialState);
  const [imgCount, setImgCount] = useState(1);
  const [imgUrl, setImgUrl] = useState({});
  const [imgCheck, setImgCheck] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    createPost(formData, history);
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

  return (
    <CreatePostPresenter
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

export default withRouter(connect(mapStateToProps, { createPost })(CreatePostContainer));
