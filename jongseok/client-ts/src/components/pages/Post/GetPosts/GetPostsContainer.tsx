import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetPostsPresenter from './GetPostsPresenter';
import { postActions } from '../../../../store/actions';
import { IRootState } from '../../../../store/reducers/index';
import CommonLayout from '../../../CommonLayout/index';

interface Props {}

const GetPostsContainer = (props: Props) => {
  const [searchByTitle, setSearchByTitle] = useState('');

  const postState = useSelector((state: IRootState) => state.postState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postActions.getPostsFn());
  }, [dispatch]);

  const handleNextCursor = useCallback(
    (cursor: string) => {
      dispatch(postActions.getMorePostsFn(cursor));
    },
    [dispatch],
  );

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchByTitle(e.target.value);
    },
    [setSearchByTitle],
  );

  const handleSearchSubmit = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        dispatch(postActions.getSearchPostsFn(searchByTitle));
      }
    },
    [dispatch, searchByTitle],
  );

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

export default GetPostsContainer;
