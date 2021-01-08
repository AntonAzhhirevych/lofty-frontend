import React from 'react';
import { NavLink } from 'react-router-dom';
import book from '../../../constants/book';

const TopBar = () => {
  return (
    <nav>
      <div>
        <NavLink to={book.globalFeed}>Medium</NavLink>
        <ul>
          <li>
            <NavLink to={book.globalFeed}>home</NavLink>
          </li>
          <li>
            <NavLink to={book.signIn}>sign in</NavLink>
          </li>
          <li>
            <NavLink to={book.signUp}>sign up</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopBar;
