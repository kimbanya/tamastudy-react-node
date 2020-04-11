import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default (ChildComponent) => {
  const ComposedComponent = (props) => {
    const history = useHistory();

    if (props.authState.loading) {
      return <div>Loading ...</div>;
    }

    if (props.authState.isLoggedIn) {
      history.push('/');
    }

    return <ChildComponent {...props} />;
  };

  const mapStateToProps = ({ authState }) => ({
    authState,
  });
  return connect(mapStateToProps, {})(ComposedComponent);
};
