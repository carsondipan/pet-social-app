import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ _id, username }) => {
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

            <p class="mt-1 text-xs font-medium text-gray-600">LOCATION</p>
            <p class="mt-1 text-xs font-medium text-gray-600">I have # pets.</p>
          </div>

          <div class="ml-3 hidden flex-shrink-0 sm:block">
            <img
              alt="Profile Image"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              class="h-16 w-16 rounded-lg object-cover shadow-sm"
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
