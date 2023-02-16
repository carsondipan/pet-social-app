import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ _id, username, location, numberOfPets }) => {
  return (
    <div key={_id}>
      <Link to={`/users/${_id}`}
        class="relative block overflow-hidden rounded-lg border border-gray-100 p-8 m-5"
      >
        <span
          class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-teal-600 via-cyan-500 to-sky-600"
        ></span>

        <div class="justify-between sm:flex">
          <div>
            <h3 class="text-xl font-bold text-gray-900">
              {username}
            </h3>

            <p class="mt-1 text-xs font-medium text-gray-600">{location}</p>
            <p class="mt-1 text-xs font-medium text-gray-600">I have {numberOfPets} pets.</p>
          </div>

          <div class="ml-3 hidden flex-shrink-0 sm:block">
            <img
              alt="Profile Image"
              src="../avatar.jpeg"
              class="h-16 w-16 rounded-full object-cover shadow-sm"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

const UserList = ({ users, title }) => {
  if (!users.length) return <h3>No Users</h3>;

  const renderUsers = () => {
    if (!users) return null;
    return users.map(user => <User key={user._id} {...user} />);
  }

  return (
    <>
      <h3>{title}</h3>
      {renderUsers()}
    </>
  );
};

export default UserList;
