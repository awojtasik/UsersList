import React from 'react';

import './UsersListSingleElement.css';

export const UsersListSingleElement = (props) => {
  //   console.log(props.user);
  const personRemovedClicked = () => {
    props.onRemoveItem(props.user.username);
    // wywołaj tą metodę w momencie gdy ktoś click
  };

  return (
    <li
      key={props.user.username}
      className="UsersListSingleElement"
      onClick={personRemovedClicked}
    >
      <img
        className="UsersListSingleElement__photo"
        src={`https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/${props.user.picture}`}
        alt={`Photos of ${props.user.first_name}`}
        // alt - warto uzupełniać, wskazuje nam czym jest dane zdjęcie
      ></img>
      <div className="UsersListSingleElement__text">
        <p className="UsersListSingleElement__name">
          {props.user.first_name} {props.user.last_name}{' '}
        </p>
        <p className="UsersListSingleElement__email">
          e-mail: {props.user.email}
        </p>
      </div>
    </li>
  );
};
