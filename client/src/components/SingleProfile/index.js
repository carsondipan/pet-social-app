import React from 'react';

const Profile = ({ _id, username, location, numberOfPets }) => {
  return (
    <div key={_id}>
      <div class="p-16 bg-teal-50">
        <div class="p-8 bg-white shadow mt-24">
          <div class="grid grid-cols-1 md:grid-cols-3">
            {/* <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0"> */}
            <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              {/* <div>
                <p class="font-bold text-gray-700 text-xl">22</p>
                <p class="text-gray-400">Friends</p>
              </div>
              <div>
                <p class="font-bold text-gray-700 text-xl">10</p>
                <p class="text-gray-400">Photos</p>
              </div>
              <div>
                <p class="font-bold text-gray-700 text-xl">89</p>
                <p class="text-gray-400">Comments</p>
              </div> */}
              <p class="font-light text-gray-600 mt-3">I have {numberOfPets} pets.</p>
            </div>
            <div class="relative">
              <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <img src="../avatar.jpeg" class="rounded-full" />
              </div>
            </div>

            <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              {/* <button
                class="text-white py-2 px-4 uppercase rounded bg-cyan-400 hover:bg-cyan-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                Connect
              </button>
              <button
                class="text-white py-2 px-4 uppercase rounded bg-sky-700 hover:bg-sky-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                Message
              </button> */}
              <p class="font-light text-gray-600 mt-3">Location</p>
            </div>
          </div>

          <div class="mt-20 text-center border-b pb-12">
            <h1 class="text-4xl font-medium text-gray-700">{username}</h1>
          </div>

          <div class="mt-12 flex flex-col justify-center">
            {/* <p class="text-gray-600 text-center font-light lg:px-16">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
            <button
              class="text-teal-500 py-2 px-4  font-medium mt-4"
            >
              Show more
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

// const ProfilePage = ({users}) => {
//     const renderProfile = () => {
//         if (!users) return null;
//         return User.map(user => <User key={user._id} {...user} />);
//     }

//     return (
//         <>
//             {renderProfile()}
//         </>
//     );
// };

export default Profile;