import React from 'react';
// import { users } from '../../data/users';
import { UsersListSingleElement } from './UsersListSingleElement';

import './UserList.css';

export const UsersList = (props) => {
  // dane będą dostępne pod props.users - biore je z App.js users={users}
  console.log(props.users);

  return (
    // <ul>
    //   {/* bierzemy uzytkownikow ktorych mamy w props */}
    //   {props.users.map((user) => (
    //     //   i zmieniamy kazdego uzytkownika w li
    //     <li key={user.username}>
    //       <strong>
    //         {user.first_name} {user.last_name}
    //       </strong>{' '}
    //       <em>{user.phone_number}</em>
    //     </li>
    //   ))}
    // </ul>
    <ul className="UserList">
      {
        //tak było -    props.users
        // .sort((a, b) => a.first_name.localeCompare(b.first_name)) - nie mozna modyfikowac props TAK NIE MOZNA!!!
        // sort mozesz zrobic tylko na kopi tablicy
        [...props.users]
          .sort((a, b) => a.first_name.localeCompare(b.first_name))
          .map((userObj) => (
            <UsersListSingleElement user={userObj} key={userObj.username} />
            // po lewej to czego oczekujesz, po prawej to co masz dostępne
            // w component czyli UserListSingleElement te musi być key
          ))
      }
    </ul>
  );
};
