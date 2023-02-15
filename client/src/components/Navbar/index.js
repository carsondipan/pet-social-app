import React from 'react';

import { Link } from 'react-router-dom';
import { useState } from "react";

import Auth from '../../utils/auth';

function Navbar() {
  const [navbar, setNavbar] = useState(false);
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

      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <Link to="/" class="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Petbook Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Petbook</span>
          </Link>

          <div class="flex md:order-2">
            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
              <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
              <span class="sr-only">Search</span>
            </button>
            <div class="relative hidden md:block">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Search icon</span>
              </div>
              <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
            </div>

            <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span class="sr-only">Open menu</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div class="pl-6 pt-2 relative hidden md:block">
              <Link to="/me" class="mr-6 text-sm font-medium text-gray-500 dark:text-white">PROFILE</Link>
              <Link to="/login" class="text-sm font-medium text-blue-600 dark:text-blue-500">Login</Link>
            </div>

          </div>
        </div>
      </nav>
      <nav class="bg-gray-50 dark:bg-gray-700">
        <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
          <div class="flex items-center">
            <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium text-gray-300">
              <li><a href="" class="hover:text-gray-100">New Posts</a></li>
              <li><a href="" class="hover:text-gray-100">Top Posts</a></li>
              <li><a href="" class="hover:text-gray-100">Users</a></li>
            </ul>
          </div>
        </div>
      </nav>

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