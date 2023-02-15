// Node Modules
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// Utilities
import Auth from '../utils/auth';
import { QUERY_USERS, QUERY_USER, QUERY_ME } from '../utils/queries';
// Components
import UserList from '../components/UserList';

const AllUsers = () => {
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
        return <Navigate to="/users" replace />;
    }

    if (loading) {
        return <h4 class="py-5">Loading...</h4>;
    }

    if (user?.username) {
        return <Navigate to="/login" replace />;
    }

    const renderUserList = () => {
        if (usersLoading) return null;
        // Only renders users who's profile we're not currently viewing
        const notMeUsers = users.filter(o => o._id !== user._id);
        return <UserList users={notMeUsers} title="Friends List" />;
    };

    return (
        <div class="py-5">
            <div>
                {renderUserList()}
                {/* <input
          placeholder="All Pets"
          name="listPets"
          type="listPets"
          value={formState.listPets}
          onChange={handleChange}
        /> */}
            </div>

            <a
                href="#"
                class="relative block overflow-hidden rounded-lg border border-gray-100 p-8 m-5"
            >
                <span
                    class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-teal-600 via-cyan-500 to-sky-600"
                ></span>

                <div class="justify-between sm:flex">
                    <div>
                        <h3 class="text-xl font-bold text-gray-900">
                            USERNAME
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
            </a>
            <a
                href="#"
                class="relative block overflow-hidden rounded-lg border border-gray-100 p-8 m-5"
            >
                <span
                    class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-teal-600 via-cyan-500 to-sky-600"
                ></span>

                <div class="justify-between sm:flex">
                    <div>
                        <h3 class="text-xl font-bold text-gray-900">
                            USERNAME
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
            </a>
        </div>


    );
};

export default AllUsers;