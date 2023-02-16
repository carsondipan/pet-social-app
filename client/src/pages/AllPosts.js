// Node Modules
import { useQuery } from '@apollo/client';

import { QUERY_POSTS } from '../utils/queries';

import PostForm from '../components/PostForm';
import PostList from '../components/PostList';

const AllPosts = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  // const renderPostForm = () => {
  //   return <PostForm />;
  // };


  return (
    // <main>
    //   <div className="flex-row justify-center h-screen">
    //     <div
    //       className="col-12 col-md-10 mb-3 p-3"
    //       style={{ border: '1px dotted #1a1a1a' }}
    //     >
    //       <PostForm />
    //     </div>
    //     <div className="col-12 col-md-8 mb-3 h-screen">
    //       {loading ? (
    //         <div>Loading...</div>
    //       ) : (
    //         <PostList
    //           posts={posts}
    //           title="Some Feed for Thought(s)..."
    //         />
    //       )}
    //     </div>
    //   </div>
    // </main>




    <body class="bg-teal-50 min-h-screen h-fit">
      {/* Left tabs */}
      <div
        class="px-4 py-5 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
      >
        <div class="grid grid-cols-12 gap-6">
          <div class="hidden lg:block col-span-3 space-y-5">
            {/* <div class="bg-white rounded-lg shadow p-6">
              <div class="flex items-center justify-left">
                <img
                  class="h-12 w-12 rounded-full"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                />
                <div class="ml-4">
                  <h3 class="text-base font-bold">USERNAME</h3>
                  <h4 class="text-sm"># of pets.</h4>
                </div>
              </div>
            </div> */}
          </div>

          {/* Centered tabs */}
          <div class="col-span-12 lg:col-span-6 space-y-5">
            {/* New posts */}
            <PostForm />
            {/* Existing posts */}
            <PostList
              posts={posts}
            />
          </div>

          {/* Right tabs */}
          <div class="hidden lg:block col-span-3 space-y-5">
            {/* <div class="bg-white rounded-lg shadow p-6 space-y-5">
              <h3 class="font-bold text-base text-gray-900">
                People you may know
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
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </body>

  );
};

export default AllPosts;