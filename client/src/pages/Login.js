import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
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
      <section class="bg-teal-20 dark:bg-teal-20">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-min lg:py-0">
          <Link to="/" class="flex items-center mb-6 text-2xl font-semibold text-teal-900 dark:text-teal-900">
            <img class="w-12 h-12 mr-2 mt-4" src="./PetbookLogoIcon.png" alt="Petbook Icon" />
          </Link>
          <div class="w-full bg-white rounded-lg shadow dark:border mb-4 md:mt-0 sm:max-w-md xl:p-0 dark:bg-teal-600 dark:border-teal-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-teal-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form onSubmit={handleFormSubmit} class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-teal-900 dark:text-white">Your email</label>
                  <input type="email" name="email" id="email"
                    value={formState.email}
                    onChange={handleChange}
                    class="bg-teal-50 border border-teal-300 text-teal-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-teal-200 dark:border-teal-600 dark:placeholder-teal-500 dark:text-teal-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="true" />
                </div>
                <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-teal-900 dark:text-white">Password</label>
                  <input type="password" name="password" id="password"
                    value={formState.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    class="bg-teal-50 border border-teal-300 text-teal-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-teal-200 dark:border-teal-600 dark:placeholder-teal-500 dark:text-teal-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" required="true" />
                </div>
                <button type="submit" class="w-full text-white bg-sky-700 hover:bg-teal-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                <p class="text-sm font-light text-teal-200 dark:text-teal-300">
                  Don’t have an account yet? <a href="/signup" class="font-medium text-primary-100 hover:underline dark:text-primary-500 hover:text-teal-100">Sign up!</a>
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

export default Login;
