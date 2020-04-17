import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import PostFormPresenter from './PostFormPresenter';
import { postActions } from '../../../../store/actions';
import CommonLayout from '../../../CommonLayout/index';
import { IPostCreateInitialState } from '../post-types';

const initialStateForCreate: IPostCreateInitialState = {
  title: '',
  description: '',
  imgUrl: '',
};

interface Props extends RouteComponentProps<any> {}

const PostFormContainer = ({ history }: Props) => {
  const [formData, setFormData] = useState(initialStateForCreate);
  const titleInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, []);

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeDescription = (content: string) => {
    setFormData({
      ...formData,
      description: content,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const { title, description } = formData;
    e.preventDefault();
    if (title.length === 0) {
      return toast.error('타이틀은 필수입력사항입니다. ');
    }
    if (description.length === 0) {
      return toast.error('포스트내용은 필수입력사항입니다. ');
    }
    dispatch(postActions.createPostFn(formData, history));
  };

  console.log(formData);

  return (
    <CommonLayout>
      <PostFormPresenter
        formData={formData}
        onChange={handleChange}
        handleChangeDescription={handleChangeDescription}
        onSubmit={handleSubmit}
        titleInputRef={titleInputRef}
      />
    </CommonLayout>
  );
};

export default withRouter(PostFormContainer);
