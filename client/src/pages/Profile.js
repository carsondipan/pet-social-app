// Node Modules
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// Utilities
import Auth from '../utils/auth';
import { QUERY_USERS, QUERY_USER, QUERY_ME } from '../utils/queries';
// Components
import UserList from '../components/UserList';

const Profile = () => {
  const { id } = useParams();

  // Get current user
  const { loading, data, error } = useQuery(id ? QUERY_USER : QUERY_ME, {
    variables: { id },
  });

  // Get a list of all users
  const { usersLoading, data: usersData } = useQuery(QUERY_USERS);

  const user = data?.me || data?.user || {};
  const users = usersData?.users || [];

  if (error) console.log(error);

  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === id) {
    return <Navigate to="/me" replace />;
  }

  if (loading) {
    return <h4 class="py-5">Loading...</h4>;
  }

  if (user?.username) {
    return <Navigate to="/user:id" replace />;
  }

  const renderUserList = () => {
    if (usersLoading) return null;
    // Only renders users who's profile we're not currently viewing
    const notMeUsers = users.filter(o => o._id !== user._id);
    return <UserList users={notMeUsers} title="Friends List" />;
  };

  const renderCurrentUserInfo = () => {
    if (id) return null;
    return (
      <ul class="py-5 h-screen">
        <li>username: {user.username}</li>
        <li>email: {user.email}</li>
        <li>Pets: {user.listPets}</li>
        <li>Location: {user.location}</li>
        <li>email: {user.email}</li>
      </ul>
    );
  }

  return (
    <div class="py-5">
      <div>
        {/* <h2>
          Viewing {id ? `${user.username}'s` : 'your'} profile.
        </h2> */}
        {renderCurrentUserInfo()}
        {/* {renderUserList()} */}
        {/* <input
          placeholder="All Pets"
          name="listPets"
          type="listPets"
          value={formState.listPets}
          onChange={handleChange}
        /> */}
      </div>

      <div class="p-16 bg-teal-50">
        <div class="p-8 bg-white shadow mt-24">
          <div class="grid grid-cols-1 md:grid-cols-3">
            {/* <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0"> */}
            <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              {/* <div>
                <p class="font-bold text-gray-700 text-xl">22</p>
                <p class="text-gray-400">Friends</p>
              </div>
              <div>
                <p class="font-bold text-gray-700 text-xl">10</p>
                <p class="text-gray-400">Photos</p>
              </div>
              <div>
                <p class="font-bold text-gray-700 text-xl">89</p>
                <p class="text-gray-400">Comments</p>
              </div> */}
              <p class="font-light text-gray-600 mt-3">NUMBER OF PETS</p>
            </div>
            <div class="relative">
              <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>

            <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              {/* <button
                class="text-white py-2 px-4 uppercase rounded bg-cyan-400 hover:bg-cyan-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                Connect
              </button>
              <button
                class="text-white py-2 px-4 uppercase rounded bg-sky-700 hover:bg-sky-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                Message
              </button> */}
              <p class="font-light text-gray-600 mt-3">LOCATION</p>
            </div>
          </div>

          <div class="mt-20 text-center border-b pb-12">
            <h1 class="text-4xl font-medium text-gray-700">USERNAME</h1>
          </div>

          <div class="mt-12 flex flex-col justify-center">
            {/* <p class="text-gray-600 text-center font-light lg:px-16">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
            <button
              class="text-teal-500 py-2 px-4  font-medium mt-4"
            >
              Show more
            </button> */}
          </div>
        </div>
      </div>

    </div>


  );
};

export default Profile;
