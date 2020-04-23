import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CommonLayout from '../components/CommonLayout/index';
import GoogleMap from '../components/organisms/GoogleMap';
import { getStudies } from '../store/actions/v1/study.action';
import { IRootState } from '../store/reducers/index';

interface Props {}

const Main = (props: Props) => {
  const dispatch = useDispatch();
  const authState = useSelector(({ authState }: IRootState) => authState);
  const studyState = useSelector(({ studyState }: IRootState) => studyState);
  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) {
      dispatch(getStudies());
    }
    return () => {
      isCancelled = true;
    };
  }, [dispatch, studyState.study.participants.length]);

  if (!authState.user) return null;

  return (
    <CommonLayout>
      <GoogleMap
        studies={studyState.studies}
        loading={studyState.loading}
        currentUserId={authState.user && authState.user._id}
      />
    </CommonLayout>
  );
};

export default Main;
