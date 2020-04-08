import React, { useState } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import PostFormPresenter from './PostFormPresenter';
import { createPostFn, getPostByIdFn } from '../../../../store/actions/v1/post.action';
import { IRootState } from '../../../../store/reducers/index';
import CommonLayout from '../../../CommonLayout/index';

export interface IPostCreateInitialState {
  title: string;
  description: string;
  imgUrl: string;
  files: string[];
}

const initialStateForCreate: IPostCreateInitialState = {
  title: '',
  description: '',
  imgUrl: '',
  files: [],
};

interface Props extends RouteComponentProps<any> {
  postState: IRootState['postState'];
  createPostFn: any;
  getPostByIdFn: any;
}

const PostFormContainer = ({ history, createPostFn }: Props) => {
  const [formData, setFormData] = useState(initialStateForCreate);

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

  const handleFileChange = (files: string[]) => {
    setFormData({
      ...formData,
      files: files,
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
    createPostFn(formData, history);
  };

  // if (postState.loading) return <div>Loading ...</div>;

  return (
    <CommonLayout>
      <PostFormPresenter
        formData={formData}
        onChange={handleChange}
        handleChangeDescription={handleChangeDescription}
        handleFileChange={handleFileChange}
        onSubmit={handleSubmit}
      />
    </CommonLayout>
  );
};

const mapStateToProps = ({ postState }: IRootState) => ({
  postState,
});

export default withRouter(
  connect(mapStateToProps, { createPostFn, getPostByIdFn })(PostFormContainer),
);
