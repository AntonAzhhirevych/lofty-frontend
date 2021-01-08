import { Switch, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import book from '../../constants/book';

const Public = () => {
  return (
    <Switch>
      <Route exact path={book.signIn} component={SignIn} />
      <Route exact path={book.signUp} component={SignUp} />
    </Switch>
  );
};

export default Public;
