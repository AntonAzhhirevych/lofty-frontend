import React from 'react';
import { Link } from 'react-router-dom';
import book from '../../../constants/book';

const SignIn = () => {
  return (
    <div>
      <p>SignIn</p>
      <Link to={book.signUp}>registration</Link>
    </div>
  );
};

export default SignIn;
