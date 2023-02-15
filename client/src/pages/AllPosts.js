// Node Modules
import React from 'react';
import { useQuery } from '@apollo/client';
// Utilities
import { QUERY_USERS, QUERY_USER, QUERY_ME } from '../utils/queries';
// Components

const AllPosts = () => {

    return (
        <body class="bg-teal-20">
            <div
                class="px-4 py-5 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
            >
                <div class="grid grid-cols-12 gap-6">
                    <div class="hidden lg:block col-span-3 space-y-5">
                        {/* Your account */}
                        <div class="bg-cyan-50 rounded-lg shadow p-6">
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
                        </div>
                    </div>

                    <div class="col-span-12 lg:col-span-6 space-y-5">
                        {/* Create post */}
                        <div class="bg-white rounded-lg shadow">
                            <div
                                class="px-6 py-6 border-b border-gray-300 flex items-center"
                            >
                                <div
                                    class="flex items-center justify-end rounded-lg w-full"
                                >
                                    <svg
                                        class="h-6 w-6 text-gray-700"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M20.6578 3.34253C19.7928 2.47753 18.6427 2.00049 17.4197 2.00049C16.1967 2.00049 15.0467 2.47753 14.1817 3.34253L3.64872 13.8755C3.20372 14.3205 2.91371 14.8835 2.81071 15.5035L2.02073 20.2415C1.94073 20.7215 2.09875 21.2145 2.44175 21.5575C2.72675 21.8425 3.11372 21.9995 3.51072 21.9995C3.59372 21.9995 3.67571 21.9925 3.75871 21.9785L8.49674 21.1885C9.11674 21.0855 9.67973 20.7955 10.1247 20.3505L20.6578 9.8175C21.5228 8.95251 21.9997 7.80147 21.9997 6.57947C21.9997 5.35647 21.5228 4.20753 20.6578 3.34253ZM8.71073 18.9385C8.56273 19.0865 8.37474 19.1835 8.16874 19.2175L4.10673 19.8945L4.78373 15.8325C4.81773 15.6265 4.91472 15.4385 5.06272 15.2905L12.9687 7.38452L16.6167 11.0325L8.71073 18.9385ZM19.2438 8.40454L18.0307 9.61743L14.3827 5.96948L15.5957 4.75647C16.0827 4.26947 16.7317 4.00049 17.4197 4.00049C18.1087 4.00049 18.7568 4.26947 19.2438 4.75647C19.7308 5.24347 19.9997 5.89144 19.9997 6.58044C19.9997 7.26944 19.7308 7.91754 19.2438 8.40454Z"
                                            fill="#41416E"
                                        />
                                    </svg>

                                    <input
                                        placeholder="Write something..."
                                        type="text"
                                        class="w-full ml-2 focus:outline-none bg-transparent border-0 focus:border-0 focus:ring-0"
                                    />
                                </div>
                            </div>
                            <div class="grid grid-cols-3 justify-center">
                                <div
                                    class="rounded-l-lg py-6 hover:bg-gray-50 cursor-pointer flex items-center justify-center"
                                >
                                    <div
                                        class="flex items-center space-x-1 text-gray-900"
                                    >
                                        <svg
                                            class="h-6 w-6"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M17 3.25H7C4.381 3.25 2.25 5.381 2.25 8V16C2.25 16.373 2.30299 16.731 2.38499 17.079C2.39699 17.126 2.40699 17.1709 2.42799 17.2159C2.96899 19.2439 4.804 20.75 7 20.75H17C19.619 20.75 21.75 18.619 21.75 16V8C21.75 5.381 19.619 3.25 17 3.25ZM7 4.75H17C18.792 4.75 20.25 6.208 20.25 8V13.189L16.24 9.17896C15.556 8.49496 14.443 8.49496 13.76 9.17896L9 13.939L8.24001 13.179C7.55601 12.495 6.44299 12.495 5.75999 13.179L3.75 15.189V8C3.75 6.208 5.208 4.75 7 4.75ZM17 19.25H7C5.597 19.25 4.41099 18.352 3.95599 17.104L6.82001 14.24C6.94701 14.113 7.052 14.113 7.179 14.24L8.119 15.1801C8.604 15.6651 9.394 15.6651 9.88 15.1801L14.82 10.24C14.918 10.142 15.082 10.142 15.179 10.24L20.249 15.3101V16C20.25 17.792 18.792 19.25 17 19.25ZM7 9C7 8.448 7.448 8 8 8C8.552 8 9 8.448 9 9C9 9.552 8.552 10 8 10C7.448 10 7 9.552 7 9Z"
                                                fill="#41416E"
                                            />
                                        </svg>

                                        <span class="hidden md:block">Photo</span>
                                    </div>
                                </div>

                                <div
                                    class="hover:bg-gray-50 cursor-pointer flex items-center justify-center"
                                >
                                    <div
                                        class="flex items-center space-x-1 text-gray-900"
                                    >
                                        <svg
                                            class="h-6 w-6"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M20.722 7.521C20.089 7.181 19.321 7.21699 18.721 7.61499L15.711 9.61499C15.511 7.17799 13.487 5.25 11 5.25H7C4.381 5.25 2.25 7.381 2.25 10V14C2.25 16.619 4.381 18.75 7 18.75H11C13.487 18.75 15.511 16.822 15.711 14.385L18.721 16.386C19.048 16.602 19.423 16.712 19.8 16.712C20.116 16.712 20.433 16.635 20.722 16.48C21.356 16.14 21.75 15.481 21.75 14.762V9.23901C21.75 8.51901 21.356 7.861 20.722 7.521ZM14.25 14.001C14.25 15.793 12.792 17.251 11 17.251H7C5.208 17.251 3.75 15.793 3.75 14.001V10.001C3.75 8.20898 5.208 6.75098 7 6.75098H11C12.792 6.75098 14.25 8.20898 14.25 10.001V14.001ZM20.25 14.762C20.25 15.005 20.084 15.12 20.013 15.158C19.941 15.197 19.755 15.27 19.551 15.137L15.75 12.611V11.39L19.551 8.86401C19.755 8.72901 19.942 8.80392 20.013 8.84192C20.084 8.87992 20.25 8.99504 20.25 9.23804V14.762Z"
                                                fill="#41416E"
                                            />
                                        </svg>
                                        <span class="hidden md:block">Video</span>
                                    </div>
                                </div>

                                <div
                                    class="hover:bg-teal-500 cursor-pointer flex items-center justify-center"
                                >
                                    <div
                                        class="flex items-center space-x-1 text-gray-900"
                                    >
                                        <span class="hidden md:block">Submit</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Posted */}
                        <div
                            class="bg-white rounded-lg shadow border-b border-gray-300"
                        >
                            <div
                                class="px-6 py-6  flex justify-between items-center"
                            >
                                <div class="flex items-center cursor-pointer">
                                    <img
                                        class="rounded-full h-10 w-10"
                                        src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                                    />
                                    <div class="ml-2">USERNAME</div>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6 cursor-pointer"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                    />
                                </svg>
                            </div>

                            <div>
                                <img
                                    class="w-full cursor-pointer"
                                    src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                                />
                                <p class="p-6 text-gray-700">Danish pie soufflé sugar plum topping. Sesame snaps pie toffee dragée chocolate bar lollipop halvah. Chocolate bar pastry toffee muffin donut.</p>
                            </div>

                            <div
                                class="px-6 py-6  flex justify-between items-center"
                            >
                                <div class="flex items-center space-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 text-gray-600 cursor-pointer"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        />
                                    </svg>
                                    <svg
                                        class="h-6 w-6 text-gray-600 cursor-pointer"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path
                                            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                                        ></path>
                                    </svg>
                                </div>
                                <div>
                                    <svg
                                        class="h-6 w-6 text-gray-600 cursor-pointer"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M19 20H17.1717L12.7072 15.5354C12.3166 15.1449 11.6835 15.1449 11.2929 15.5354L6.82843 20L5 20V7C5 5.34315 6.34315 4 8 4H16C17.6569 4 19 5.34314 19 7V20ZM17 7C17 6.44772 16.5523 6 16 6H8C7.44772 6 7 6.44772 7 7V17L9.87873 14.1212C11.0503 12.9497 12.9498 12.9497 14.1214 14.1212L17 16.9999V7Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Friends */}
                    <div class="hidden lg:block col-span-3 space-y-5">
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
                    </div>
                </div>
            </div>
        </body>


    );
};

export default AllPosts;