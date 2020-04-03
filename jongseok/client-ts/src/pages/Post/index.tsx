import React from 'react';
import { connect } from 'react-redux';
import { IRootState } from '../../store/reducers/index';

interface IProps {
  postState: IRootState['postState'];
}

const Post: React.SFC<IProps> = ({ postState }) => {
  return <div>post</div>;
};

const mapStateToProps = (state: IRootState) => {
  return {
    postState: state.postState,
  };
};

export default connect(mapStateToProps, {})(Post);
