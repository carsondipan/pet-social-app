import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (

    <footer class="p-4 bg-teal-900 shadow md:px-6 md:py-8 dark:bg-teal-900">
      <div class="sm:flex sm:items-center sm:justify-between">
        <Link to="/" class="flex items-center mb-4 sm:mb-0">
          <img src="./PetbookLogo.png" class="h-8 mr-3" alt="Petbook Logo" />
        </Link>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-teal-600 sm:mb-0 dark:text-teal-600">
          <li>
            <a href="https://www.aspca.org/" target="_" class="mr-4 hover:underline md:mr-6 hover:text-teal-500">ASPCA</a>
          </li>
          <li>
            <a href="https://www.petfinder.com/" target="_" class="mr-4 hover:underline md:mr-6 hover:text-teal-500">Adoptable Pets</a>
          </li>
          <li>
            <a href="https://www.petfinder.com/dogs/lost-and-found-dogs/" target="_" class="mr-4 hover:underline md:mr-6 hover:text-teal-500">Lost &#38; Found Pets</a>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-teal-700 sm:mx-auto dark:border-teal-700 lg:my-8" />
      <span class="block text-sm text-teal-700 sm:text-center dark:text-teal-700">© 2023 Petbook team. All Rights Reserved.
      </span>
    </footer >

  );
};

export default Footer;
