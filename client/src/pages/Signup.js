import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    location: '',
    numberOfPets: ''
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  const renderForm = () => {
    if (data) {
      return (
        <p class="py-5">
          Success! You may now head{' '}
          <Link to="/">back to the homepage.</Link>
        </p>
      )
    }
    return (
      <section class="bg-teal-20 dark:bg-teal-20 min-h-screen h-fit">
        <div class="flex flex-col items-center justify-center mt-3 px-6 py-8 mx-auto md:h-min lg:py-0">
          <Link to="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-900">
            <img class="w-12 h-12 mr-2 mt-4" src="./PetbookLogoIcon.png" alt="Petbook Icon" />
          </Link>
          <div class="w-full bg-white rounded-lg shadow dark:border mb-5 md:mt-0 sm:max-w-md xl:p-0 dark:bg-teal-600 dark:border-teal-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create a new account
              </h1>
              <form onSubmit={handleFormSubmit} class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What username will you use?</label>
                  <input type="username" name="username" id="username"
                    value={formState.username}
                    onChange={handleChange}
                    class="bg-teal-50 border border-teal-600 text-teal-900 placeholder-teal-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-teal-50 dark:border-teal-600 dark:placeholder-teal-500 dark:text-teal-900 dark:focus:ring-blue-600 dark:focus:border-blue-600" placeholder="username" required="true" />
                </div>
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What email will you use?</label>
                  <input type="email" name="email" id="email"
                    value={formState.email}
                    onChange={handleChange}
                    class="bg-teal-50 border border-teal-600 text-teal-900 placeholder-teal-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-teal-50 dark:border-teal-600 dark:placeholder-teal-500 dark:text-teal-900 dark:focus:ring-blue-600 dark:focus:border-blue-600" placeholder="name@company.com" required="true" />
                </div>
                <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What password will you use?</label>
                  <input type="password" name="password" id="password"
                    value={formState.password}
                    onChange={handleChange}
                    placeholder="••••••••" class="bg-teal-50 border border-teal-600 text-teal-900 placeholder-teal-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-teal-50 dark:border-teal-600 dark:placeholder-teal-500 dark:text-teal-900 dark:focus:ring-blue-600 dark:focus:border-blue-600" required="true" />
                </div>
                <div>
                  <label for="location" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What city do you live in?</label>
                  <input type="location" name="location" id="location"
                    value={formState.location}
                    onChange={handleChange}
                    class="bg-teal-50 border border-teal-600 text-teal-900 placeholder-teal-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-teal-50 dark:border-teal-600 dark:placeholder-teal-500 dark:text-teal-900 dark:focus:ring-blue-600 dark:focus:border-blue-600" placeholder="city name" required="true" />
                </div>
                <div>
                  <label for="numberOfPets" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">How many pets do you have?</label>
                  <input type="numberOfPets" name="numberOfPets" id="numberOfPets"
                    value={formState.numberOfPets}
                    onChange={handleChange}
                    class="bg-teal-50 border border-teal-600 text-teal-900 placeholder-teal-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-teal-50 dark:border-teal-600 dark:placeholder-teal-500 dark:text-teal-900 dark:focus:ring-blue-600 dark:focus:border-blue-600" placeholder="number of pets" required="true" />
                </div>
                <button type="submit" class="w-full text-white bg-sky-700 hover:bg-teal-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign up</button>
                <p class="text-sm font-light text-teal-300 dark:text-teal-300">
                  Already have an account? <a href="/login" class="font-medium text-primary-500 hover:underline dark:text-primary-500 hover:text-teal-100">Sign in instead.</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      // Please bear with the ugly colors for the moment
    );
  };

  return (
    <main>
      <div>
        {renderForm()}
        {error && <div>{error.message}</div>}
      </div>
    </main>
  );
};

export default Signup;
