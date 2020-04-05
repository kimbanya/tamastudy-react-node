import React, { useEffect } from 'react';
import GetPostsPresenter from './GetPostsPresenter';
import { connect } from 'react-redux';
import { IRootState } from '../../../../store/reducers/index';
import { getPostsFn } from '../../../../store/actions/v1/post.action';

interface Props {
  postState: IRootState['postState'];
  getPostsFn: any;
}

const GetPostsContainer = ({ postState, getPostsFn }: Props) => {
  useEffect(() => {
    getPostsFn();
  }, [getPostsFn]);

  if (postState.loading) return <div>Loading ...</div>;

  return <GetPostsPresenter posts={postState.posts} />;
};

const mapStateToProps = ({ postState }: IRootState) => ({
  postState,
});

export default connect(mapStateToProps, { getPostsFn })(GetPostsContainer);
