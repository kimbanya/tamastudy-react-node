import React, { useState } from 'react';
import CreatePostPresenter from './CreatePostPresenter';
import { Redirect, withRouter } from 'react-router-dom';
import useAuthContext from '../../../hooks/useAuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
  title: '',
  description: '',
  imgUrl: '',
};

const CreatePostContainer = ({ history }) => {
  const [formData, setFormData] = useState(initialState);
  const [imgCount, setImgCount] = useState(1);
  const [imgUrl, setImgUrl] = useState({});
  const [imgCheck, setImgCheck] = useState(false);

  const ctxData = useAuthContext();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // console.log(formData);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        return alert('invalid token');
      }
      await axios.post('/api/v1/post/create', formData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast.success('작성이 완료 되었습니다.');
      history.push('/posts');
    } catch (error) {
      const errorArr = error.response.data.error.split(',');
      errorArr.map((err) => toast.error(err));
    }
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

  if (ctxData.authLoading) {
    return <div>Loading ...</div>;
  }

  if (!ctxData.isLoggedIn) {
    return <Redirect to={'/login'} />;
  }

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

export default withRouter(CreatePostContainer);
