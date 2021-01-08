import { Switch, Route } from 'react-router-dom';
import GlobalFeed from '../pages/GlobalFeed/GlobalFeed';
import book from '../../constants/book';

const Private = () => {
  return (
    <Switch>
      <Route exact path={book.globalFeed} component={GlobalFeed} />
    </Switch>
  );
};

export default Private;
