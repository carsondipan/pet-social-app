import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (

    <footer class="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div class="sm:flex sm:items-center sm:justify-between">
        <Link to="/" class="flex items-center mb-4 sm:mb-0">
          <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Petbook</span>
        </Link>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="https://www.aspca.org/" target="_" class="mr-4 hover:underline md:mr-6">ASPCA</a>
          </li>
          <li>
            <a href="https://www.petfinder.com/" target="_" class="mr-4 hover:underline md:mr-6 ">Adoptable Pets</a>
          </li>
          <li>
            <a href="https://www.petfinder.com/dogs/lost-and-found-dogs/" target="_" class="mr-4 hover:underline md:mr-6 ">Lost &#38; Found Pets</a>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Petbook team. All Rights Reserved.
      </span>
    </footer >

  );
};

export default Footer;
