import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import GetPostsPresenter from './GetPostsPresenter';
import { IRootState } from '../../../../store/reducers/index';
import CommonLayout from '../../../CommonLayout/index';
import {
  getPostsFn,
  getMorePostsFn,
  getSearchPostsFn,
} from '../../../../store/actions/v1/post.action';

interface Props {
  postState: IRootState['postState'];
  getPostsFn: any;
  getMorePostsFn: any;
  getSearchPostsFn: any;
}

const GetPostsContainer = ({ postState, getPostsFn, getMorePostsFn, getSearchPostsFn }: Props) => {
  const [searchByTitle, setSearchByTitle] = useState('');

  useEffect(() => {
    getPostsFn();
  }, [getPostsFn]);

  const handleNextCursor = useCallback(
    (cursor: string) => {
      getMorePostsFn(cursor);
    },
    [getMorePostsFn],
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchByTitle(e.target.value);
  };

  const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      getSearchPostsFn(searchByTitle);
    }
  };

  if (postState.loading) return <div>Loading ...</div>;

  return (
    <CommonLayout noFooter>
      <GetPostsPresenter
        posts={postState.posts}
        pageInfo={postState.pageInfo}
        handleNextCursor={handleNextCursor}
        searchByTitle={searchByTitle}
        handleSearchChange={handleSearchChange}
        handleSearchSubmit={handleSearchSubmit}
      />
    </CommonLayout>
  );
};

const mapStateToProps = ({ postState }: IRootState) => ({
  postState,
});

export default connect(mapStateToProps, { getPostsFn, getMorePostsFn, getSearchPostsFn })(
  GetPostsContainer,
);
