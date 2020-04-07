import React, { useState, useEffect } from 'react';
import PostFormPresenter from './PostFormPresenter';
import CommonLayout from '../../../CommonLayout/index';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { createPostFn, getPostByIdFn } from '../../../../store/actions/v1/post.action';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { IRootState } from '../../../../store/reducers/index';

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

const PostFormContainer = ({ history, match, postState, createPostFn, getPostByIdFn }: Props) => {
  const [formData, setFormData] = useState(initialStateForCreate);

  useEffect(() => {
    if (match.url !== '/post/create') {
      getPostByIdFn(match.params.postId);
    }
  }, [getPostByIdFn, match.url, match.params.postId]);

  useEffect(() => {
    if (match.url !== '/post/create') {
      if (postState.post.title && postState.post.description && postState.post.imgUrl) {
        setFormData({
          ...formData,
          title: postState.post.title,
          description: postState.post.description,
          imgUrl: postState.post.imgUrl,
        });
      }
    }
  }, [match.url, match.params.postId, postState.post]);

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
    const { title, description, imgUrl } = formData;
    e.preventDefault();
    if (title.length === 0) {
      return toast.error('타이틀은 필수입력사항입니다. ');
    }
    if (description.length === 0) {
      return toast.error('포스트내용은 필수입력사항입니다. ');
    }
    if (!imgUrl.startsWith('https://')) {
      return toast.error('썸네일 이미지주소를 확인해주세요. ');
    }
    createPostFn(formData);
    history.push('/posts');
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
