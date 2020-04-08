import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { IRootState } from '../store/reducers';

interface IProps extends RouteComponentProps<any> {
  authState: IRootState['authState'];
}

export default (ChildComponent: any) => {
  const ComposedComponent = ({ history, authState, ...props }: IProps) => {
    console.log(authState.isLoggedIn);
    const shouldNavigateAway = useCallback(() => {
      if (authState.isLoggedIn) {
        history.push('/');
      }
    }, [authState, history]);

    useEffect(() => {
      shouldNavigateAway();
      return () => {};
    }, [shouldNavigateAway]);

    return <ChildComponent {...props} />;
  };
  const mapStateToProps = (state: IRootState) => ({
    authState: state.authState,
  });

  return withRouter(connect(mapStateToProps)(ComposedComponent));
};
