import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useHistory, useRouteMatch } from 'react-router-dom';
import Info from './Info';
import Member from './Member';
import Todo from './Todo';
import CommonLayout from '../../components/CommonLayout/index';
import DetailNav from '../../components/organisms/DetailNav';
import { getStudy } from '../../store/actions/v1/study.action';
import { IRootState } from '../../store/reducers/index';

interface Props {}

const Detail = (props: Props) => {
  const match = useRouteMatch<{ studyId: string }>();
  const dispatch = useDispatch();
  const { study } = useSelector(({ studyState }: IRootState) => studyState);

  useEffect(() => {
    dispatch(getStudy(match.params.studyId));
  }, [dispatch, match.params.studyId, study.participants.length, study.likes.length]);

  return (
    <CommonLayout noFooter>
      <Router>
        <header>
          <DetailNav currentStudyId={match.params.studyId} />
        </header>
        <main>
          <Switch>
            <Route exact path={`/${match.params.studyId}/detail`} component={Info} />
            <Route exact path={`/${match.params.studyId}/todo`} component={Todo} />
            <Route exact path={`/${match.params.studyId}/member`} component={Member} />
            <Route path="/:studyId/*" component={() => <div>notfound</div>} />
          </Switch>
        </main>
      </Router>
    </CommonLayout>
  );
};

export default Detail;
