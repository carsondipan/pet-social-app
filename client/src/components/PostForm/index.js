import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const PostForm = () => {
  const [postText, setPostText] = useState('');

  const [formState, setFormState] = useState({
    postText: ''
  });
  // const [addPost, { error, data }] = useMutation(ADD_POST);


  const [addPost, { error, data }] = useMutation(ADD_POST, {
    // update(cache, { data: { addPost } }) {
    //   try {
    //     const { posts } = cache.readQuery({ query: QUERY_POSTS });

    //     cache.writeQuery({
    //       query: QUERY_POSTS,
    //       data: { posts: [addPost, ...posts] },
    //     });
    //   } catch (e) {
    //     console.error(e);
    //   }

    //   // update me object's cache
    //   const { me } = cache.readQuery({ query: QUERY_ME });
    //   cache.writeQuery({
    //     query: QUERY_ME,
    //     data: { me: { ...me, posts: [...me.posts, addPost] } },
    //   });
    // },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPost({
        variables: {
          postText: formState.postText,
          postAuthor: Auth.getProfile().data.username,
        },
      });

      setPostText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>

      {Auth.loggedIn() ? (
        <>
          <div class="bg-white rounded-lg shadow">
            <div
              class="px-6 py-6 border-b border-gray-300 flex items-center"
            >
              <div
                class="flex items-center rounded-lg w-full"
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
                <form onSubmit={handleFormSubmit} class="w-full">
                  <textarea
                    name="postText"
                    placeholder="Write something..."
                    type="text"
                    rows="3"
                    onChange={handleChange}
                    value={formState.postText}
                    class="form-input min-w-full ml-2 focus:outline-none bg-transparent border-0 focus:border-0 focus:ring-0"
                  />
                  <div class="flex flex-col items-center">
                    <button type="submit" class="bg-teal-500 hover:bg-teal-700 text-white font-bold mt-2 py-2 px-4 rounded">Add Post</button>
                  </div>
                </form>
              </div>
            </div>
            {/* <div class="grid grid-cols-2 justify-center">
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
            </div> */}
          </div>
          {error && (
            <div className="col-12 my-3 bg-danger text-teal-600 p-3">
              {error.message}
            </div>
          )}





          <br /><br />




          {/* <div class="bg-gray-200">
            <form
              className="flex-row justify-center justify-space-between-md align-center"
              onSubmit={handleFormSubmit}
            >
              <div className="col-12 col-lg-9">
                <textarea
                  name="postText"
                  placeholder="Here's a new post..."
                  value={postText}
                  className="form-input w-100"
                  style={{ lineHeight: '1.5', resize: 'vertical' }}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="col-12 col-lg-3">
                <button className="btn btn-primary btn-block py-3" type="submit">
                  Add Post
                </button>
              </div>
              {error && (
                <div className="col-12 my-3 bg-danger text-white p-3">
                  {error.message}
                </div>
              )}
            </form>
          </div> */}
        </>
      ) : (
        <p class="text-center font-bold text-teal-700">
          You need to be logged in to share your posts.<br />
          Please{' '}
          <Link to="/login" class="text-cyan-600 hover:text-cyan-300">login</Link> or <Link to="/signup" class="text-cyan-600 hover:text-cyan-300">signup.</Link>
        </p>

      )
      }
    </div >


  );
};

export default PostForm;




{/* <div class="bg-white rounded-lg shadow">
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
              <div class="grid grid-cols-4 justify-center">
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
                        d="M17 3.25H16.75V3C16.75 2.586 16.414 2.25 16 2.25C15.586 2.25 15.25 2.586 15.25 3V3.25H8.75V3C8.75 2.586 8.414 2.25 8 2.25C7.586 2.25 7.25 2.586 7.25 3V3.25H7C4.381 3.25 2.25 5.381 2.25 8V17C2.25 19.619 4.381 21.75 7 21.75H17C19.619 21.75 21.75 19.619 21.75 17V8C21.75 5.381 19.619 3.25 17 3.25ZM7 4.75H7.25V6C7.25 6.414 7.586 6.75 8 6.75C8.414 6.75 8.75 6.414 8.75 6V4.75H15.25V6C15.25 6.414 15.586 6.75 16 6.75C16.414 6.75 16.75 6.414 16.75 6V4.75H17C18.792 4.75 20.25 6.208 20.25 8V8.25H3.75V8C3.75 6.208 5.208 4.75 7 4.75ZM17 20.25H7C5.208 20.25 3.75 18.792 3.75 17V9.75H20.25V17C20.25 18.792 18.792 20.25 17 20.25ZM17 13C17 13.552 16.552 14 16 14C15.448 14 15 13.552 15 13C15 12.448 15.448 12 16 12C16.552 12 17 12.448 17 13ZM13 13C13 13.552 12.552 14 12 14C11.448 14 11 13.552 11 13C11 12.448 11.448 12 12 12C12.552 12 13 12.448 13 13ZM9 13C9 13.552 8.552 14 8 14C7.448 14 7 13.552 7 13C7 12.448 7.448 12 8 12C8.552 12 9 12.448 9 13ZM17 17C17 17.552 16.552 18 16 18C15.448 18 15 17.552 15 17C15 16.448 15.448 16 16 16C16.552 16 17 16.448 17 17ZM13 17C13 17.552 12.552 18 12 18C11.448 18 11 17.552 11 17C11 16.448 11.448 16 12 16C12.552 16 13 16.448 13 17ZM9 17C9 17.552 8.552 18 8 18C7.448 18 7 17.552 7 17C7 16.448 7.448 16 8 16C8.552 16 9 16.448 9 17Z"
                        fill="#41416E"
                      />
                    </svg>
                    <span class="hidden md:block">Event</span>
                  </div>
                </div>

                <div
                  class="rounded-r-lg py-6 hover:bg-gray-50 cursor-pointer flex items-center justify-center"
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
                        d="M12 6.25C9.932 6.25 8.25 7.932 8.25 10C8.25 12.068 9.932 13.75 12 13.75C14.068 13.75 15.75 12.068 15.75 10C15.75 7.932 14.068 6.25 12 6.25ZM12 12.25C10.759 12.25 9.75 11.241 9.75 10C9.75 8.759 10.759 7.75 12 7.75C13.241 7.75 14.25 8.759 14.25 10C14.25 11.241 13.241 12.25 12 12.25ZM11.996 2.25C7.58 2.25 4.25 5.582 4.25 10C4.25 16.208 8.986 20.076 11.021 21.45C11.317 21.65 11.656 21.75 11.996 21.75C12.334 21.75 12.673 21.65 12.969 21.451C15.008 20.074 19.75 16.201 19.75 9.99902C19.75 5.58102 16.417 2.25 11.996 2.25ZM12.13 20.208C12.047 20.264 11.944 20.264 11.861 20.208C10.427 19.24 5.75 15.643 5.75 10C5.75 6.437 8.435 3.75 11.996 3.75C15.561 3.75 18.25 6.437 18.25 10C18.25 15.483 13.97 18.966 12.13 20.208Z"
                        fill="#41416E"
                      />
                    </svg>
                    <span class="hidden md:block"
                    >Location</span
                    >
                  </div>
                </div>
              </div>
            </div> */}