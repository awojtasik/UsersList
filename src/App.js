import React from 'react';
import './App.css';
import { UsersList } from './components/UsersList/UserList';
import { users } from './data/users';

export const App = (props) => {
  // console.log(users);
  return (
    <>
      <UsersList users={users} />
    </>
  );
};
