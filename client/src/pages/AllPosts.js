// Node Modules
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { Navigate, useParams } from 'react-router-dom';

// Utilities
import { QUERY_USERS, QUERY_USER, QUERY_ME, QUERY_POSTS, ADD_POST } from '../utils/queries';


// Components
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';



const AllPosts = () => {

    const renderPostForm = () => {
        return <PostForm />;
    };

    const renderPostList = () => {
        return <PostList />;
    };


    return (
        <body class="bg-teal-20">
            <div
                class="px-4 py-5 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
            >
                <div class="grid grid-cols-12 gap-6">
                    <div class="hidden lg:block col-span-3 space-y-5">
                        {/* Your account */}
                        {/* <div class="bg-cyan-50 rounded-lg shadow p-6">
                            <div class="flex items-center justify-left">
                                <img
                                    class="h-12 w-12 rounded-full"
                                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                                />
                                <div class="ml-4">
                                    <h3 class="text-base font-bold">USERNAME</h3>
                                    <h4 class="text-sm"># of pets</h4>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    <div class="col-span-12 lg:col-span-6 space-y-5">
                        {/* Create post */}
                        {renderPostForm()}

                        {/* Posted */}
                        {renderPostList()}
                    </div>

                    {/* Friends */}
                    {/* <div class="hidden lg:block col-span-3 space-y-5">
                        <div class="bg-cyan-50 rounded-lg shadow p-6 space-y-5">
                            <h3 class="font-bold text-base text-gray-900">
                                Your friends
                            </h3>
                            <div class="space-y-3">
                                <div class="flex justify-between items-center">
                                    <div class="flex items-center">
                                        <img
                                            class="rounded-full h-10 w-10"
                                            src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                                        />
                                        <div class="ml-2 text-sm">
                                            Melissa Lavala
                                        </div>
                                    </div>
                                    <button
                                        class="bg-blue-100 text-blue-600 hover:text-white hover:bg-blue-600 transition duration-100	transform hover:scale-110	 text-xs  rounded p-2 text-gray-900"
                                    >
                                        Connect
                                    </button>
                                </div>

                                <div class="flex justify-between items-center">
                                    <div class="flex items-center">
                                        <img
                                            class="rounded-full h-10 w-10"
                                            src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                                        />
                                        <div class="ml-2 text-sm">Peter Kilman</div>
                                    </div>

                                    <button
                                        class="bg-blue-100 text-blue-600 hover:text-white hover:bg-blue-600 transition duration-100	transform hover:scale-110	 text-xs  rounded p-2 text-gray-900"
                                    >
                                        Connect
                                    </button>
                                </div>

                                <div class="flex justify-between items-center">
                                    <div class="flex items-center">
                                        <img
                                            class="rounded-full h-10 w-10"
                                            src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                                        />
                                        <div class="ml-2 text-sm">
                                            Panama Lavala
                                        </div>
                                    </div>

                                    <button
                                        class="bg-blue-100 text-blue-600 hover:text-white hover:bg-blue-600 transition duration-100	transform hover:scale-110	 text-xs  rounded p-2 text-gray-900"
                                    >
                                        Connect
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </body>


    );
};

export default AllPosts;