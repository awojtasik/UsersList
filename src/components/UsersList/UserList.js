import React, { useState } from 'react';
// import { users } from '../../data/users';
import { UsersListSingleElement } from './UsersListSingleElement';

import './UserList.css';

export const UsersList = (props) => {
  // dane będą dostępne pod props.users - biore je z App.js users={users}
  console.log(props.users);

  const [list, setList] = useState(props.users);

  const removeItem = (username) => {
    // console.log('Usuń element', username);
    //  setList - modyfikuje poprzednia funkcje
    setList(
      (list) =>
        // bierzemy poprzednią liste i tworzymy na jej podstawie nową
        list.filter((one) => one.username !== username)
      //  biore pojedynczy element z listy i zostawiam go wylacznie jezeli jego username jest inny ni username ktory chce usunac !== username
      //  np. [1,2,3].filter(one => one !== '2') // [1,3]
      //  CO NAM TO DALO - MOGE SOBIE USUWAC DOWOLNE PO CLICK
    );
  };

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
        // [...props.users]
        [...list]
          .sort((a, b) => a.first_name.localeCompare(b.first_name))
          .map((userObj) => (
            <UsersListSingleElement
              user={userObj}
              key={userObj.username}
              onRemoveItem={removeItem}
            />
            // po lewej to czego oczekujesz, po prawej to co masz dostępne
            // w component czyli UserListSingleElement te musi być key
          ))
      }
    </ul>
  );
};
