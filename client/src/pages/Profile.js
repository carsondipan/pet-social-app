// Node Modules
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// Utilities
import Auth from '../utils/auth';
import { QUERY_USERS, QUERY_USER, QUERY_ME } from '../utils/queries';
// Components
import SingleProfile from '../components/SingleProfile';

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
    return <Navigate to="/users/:id" replace />;
  }

  if (!user?.username) {
    return <Navigate to="/login" replace />
  }

  const renderProfile = () => {
    if (usersLoading) return null;
    return <SingleProfile />;
  };

  const renderCurrentUserInfo = () => {
    if (id) return null;
    return (
      // <ul class="py-5 h-screen">
      //   <li>username: {user.username}</li>
      //   <li>email: {user.email}</li>
      //   <li>Pets: {user.listPets}</li>
      //   <li>Location: {user.location}</li>
      //   <li>email: {user.email}</li>
      // </ul>

      <h3 class="text-center font-bold text-teal-700">You're viewing your own profile.</h3>
    );
  }

  return (
    <div class="py-5 bg-teal-50">{renderCurrentUserInfo()}
      {renderProfile()}
    </div>


  );
};

export default Profile;
