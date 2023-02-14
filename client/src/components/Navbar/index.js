import React from 'react';

import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  if (Auth.loggedIn()) {
    return (
      <>
        <div className="bg-gray-900">
          <nav class="container flex justify-around py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <div class="flex flex-wrap items-center">
              <Link to="/"><h3 class=" text-2xl font-medium text-blue-500">PETBOOK</h3></Link>
            </div>

            <div class="items-center hidden space-x-8 lg:flex text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">
              <a href="">New Posts</a>
              <a href="">Top Posts</a>
              <a href="">Users</a>
              <a href="">Adopt A Pet</a>
              <a href="">Find A Pet</a>
              <a href="">Donate</a>
              <a href="">Search</a>

              {/* Notifications */}
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </a>
              {/* Settings */}
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </a>
              {/* Profile/user */}
              <a href="/me" class="p-2 rounded-full bg-blue-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </a>
              <button onClick={logout} class="px-4 py-2 text-blue-100 bg-blue-800 rounded-md">
                Log out
              </button>
            </div>

            <button class="mobile-menu-button">
              <svg
                xmlns="<http://www.w3.org/2000/svg>"
                id="menu-button"
                class="h-6 w-6 cursor-pointer text-gray-300 lg:hidden block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </nav>
        </div >
        {/* <button onClick={logout}>
          Logout
        </button> */}
      </>
    );
  }


  // If logged out show login controls
  return (
    <>
      <div className="bg-gray-900">
        <nav class="container flex justify-around py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <div class="flex items-center">
            <Link to="/"><h3 class=" text-2xl font-medium text-blue-500">PETBOOK</h3></Link>
          </div>

          <div class="items-center hidden space-x-8 lg:flex text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">
            <a href="">New Posts</a>
            <a href="">Top Posts</a>
            <a href="">Users</a>
            <a href="">Adopt A Pet</a>
            <a href="">Find A Pet</a>
            <a href="">Donate</a>
            <a href="">Search</a>

            <Link to="/login">
              <button class="px-4 py-2 text-blue-100 bg-blue-800 rounded-md">
                Log in
              </button>
            </Link>
            <Link to="/signup">
              <button class="px-4 py-2 text-gray-200 bg-gray-400 rounded-md">
                Sign up
              </button>
            </Link>
          </div>

          <button class="mobile-menu-button">
            <svg
              xmlns="<http://www.w3.org/2000/svg>"
              id="menu-button"
              class="h-6 w-6 cursor-pointer text-gray-300 lg:hidden block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </div>
      {/* <Link to="/login">
        Login
      </Link>
      <Link to="/signup">
        Signup
      </Link> */}
    </>

    // HAMBURGER DROPDOWN NOT PROPERLY WORKING FOR BOTH NAVBARS
  )
}

export default Navbar