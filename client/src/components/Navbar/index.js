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
        <nav class="bg-white border-teal-200 dark:bg-teal-900">
          <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
            <Link to="/" class="flex items-center">
              <img src="./PetbookLogo.png" class="h-6 mr-3 sm:h-9 mb-1" alt="Petbook Logo" />
            </Link>

            <div class="flex md:order-2">
              <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-teal-500 dark:text-teal-100 hover:bg-white dark:hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-200 dark:focus:ring-teal-700 rounded-lg text-sm p-2.5 mr-1" >
                {/* <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg> */}
                <span class="sr-only">Search</span>
              </button>
              <div class="relative md:block">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg class="w-5 h-5 text-teal-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                  <span class="sr-only">Search icon</span>
                </div>
                <input type="text" id="search-navbar" class="block w-full p-2 mt-1 pl-10 text-sm text-teal-900 border border-teal-300 rounded-lg bg-teal-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-teal-700 dark:border-teal-600 dark:placeholder-teal-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
              </div>

              {/* <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 text-sm text-cyan-500 rounded-lg md:hidden hover:bg-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-200 dark:text-cyan-400 dark:hover:bg-cyan-700 dark:focus:ring-cyan-600" aria-controls="navbar-search" aria-expanded="false">
                <span class="sr-only">Open menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
              </button> */}
              <div class="pl-6 pt-2 md:block">
                <Link to="/me" class="text-sm mx-2 p-2 font-medium text-white dark:text-white rounded bg-cyan-600 hover:bg-cyan-700">Profile</Link>
                <Link to="/signup"><button onClick={logout} class="text-sm mx-2 p-1.5 font-medium text-white dark:text-white rounded bg-cyan-700 hover:bg-cyan-900">
                  Log out
                </button></Link>
              </div>

            </div>
          </div>
        </nav>
        <nav class="bg-teal-700 dark:bg-teal-700">
          <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
            <div class="flex items-center">
              <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium text-teal-300">
                <li><Link to="/posts" class="hover:text-teal-100">Posts</Link></li>
                <li><Link to="/users" class="hover:text-teal-100">Users</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }


  // If logged out show login controls
  return (
    <>
      <nav class="bg-teal-900 border-teal-200 dark:bg-teal-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <Link to="/" class="flex items-center">
            <img src="./PetbookLogo.png" class="h-6 mr-3 sm:h-9 mb-1" alt="Petbook Logo" />
          </Link>

          <div class="flex md:order-2">
            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-teal-100 dark:text-teal-100 hover:bg-teal-700 dark:hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-700 dark:focus:ring-teal-700 rounded-lg text-sm p-2.5 mr-1" >
              {/* <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg> */}
              <span class="sr-only">Search</span>
            </button>
            <div class="relative md:block">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-teal-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Search icon</span>
              </div>
              <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-teal-700 border border-teal-600 rounded-lg bg-teal-700 focus:ring-blue-500 focus:border-blue-500 dark:bg-teal-700 dark:border-teal-600 dark:placeholder-teal-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
            </div>

            {/* <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 text-sm text-cyan-400 rounded-lg md:hidden hover:bg-cyan-700 focus:ring-cyan-600 focus:ring-2 focus:ring-cyan-200 dark:text-cyan-400 dark:hover:bg-cyan-700 dark:focus:ring-cyan-600" aria-controls="navbar-search" aria-expanded="false">
              <span class="sr-only">Open menu</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button> */}
            <div class="pl-6 pt-2 md:block">
              <Link to="/login" class="text-sm mx-2 p-2 font-medium text-white dark:text-white rounded bg-cyan-600 hover:bg-cyan-700">Login</Link>
              <Link to="/signup" class="text-sm mx-2 p-2 font-medium text-white dark:text-white rounded bg-cyan-700 hover:bg-cyan-900">Signup</Link>
            </div>

          </div>
        </div>
      </nav>
      <nav class="bg-teal-700 dark:bg-teal-700">
        <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
          <div class="flex items-center">
            <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium text-teal-300">
              <li><Link to="/posts" class="hover:text-teal-100">Posts</Link></li>
              <li><Link to="/users" class="hover:text-teal-100">Users</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </>

    // HAMBURGER DROPDOWN NOT PROPERLY WORKING FOR BOTH NAVBARS
  )
}

export default Navbar