import React, { useEffect } from 'react';
import GetPostsPresenter from './GetPostsPresenter';
import { API } from '../../../../utils/axios';

interface Props {}

const GetPostsContainer = (props: Props) => {
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await API.get('/post');
    console.log(response);
  };
  return <GetPostsPresenter />;
};

export default GetPostsContainer;
