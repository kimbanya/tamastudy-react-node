import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { IRootState } from '../store/reducers/index';

interface IProps extends RouteComponentProps<any> {
  authState: IRootState['authState'];
}

export default (ChildComponent: any) => {
  const ComposedComponent: React.SFC<IProps> = ({ authState, history, ...props }) => {
    const shouldNavigateAway = useCallback(() => {
      if (!authState.isLoggedIn) {
        history.push('/');
      }
    }, [authState, history]);

    useEffect(() => {
      shouldNavigateAway();
      return () => {};
    }, [shouldNavigateAway]);

    console.log(authState);

    return <ChildComponent {...props} />;
  };
  const mapStateToProps = ({ authState }: IRootState) => ({
    authState,
  });

  return withRouter(connect(mapStateToProps)(ComposedComponent));
};
