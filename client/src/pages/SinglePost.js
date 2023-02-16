import React from "react";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import CommentList from '../components/CommentList';
import CommentForm from "../components/CommentForm";

import { QUERY_SINGLE_POST } from "../utils/queries";

const SinglePost = () => {
    const { id } = useParams();
    const { loading, data } = useQuery(QUERY_SINGLE_POST, {
        variables: { postID: id }
    });

    const post = data?.post || {};
    console.log(post)
    if (loading) {
        return <div>Loading ...</div>;
    }
    return (
        // <div className="my-3 h-screen">
        //     <h3 className="card-header bg-dark text-light p-2 m-0">
        //         {post.postAuthor} <br />
        //         <span style={{ fontSize: '1rem' }}>
        //             made this post on {post.createdAt}
        //         </span>
        //     </h3>
        //     <div className="bg-light py-4">
        //         <blockquote
        //             className="p-4"
        //             style={{
        //                 fontSize: '1.5rem',
        //                 fontStyle: 'italic',
        //                 border: '2px dotted #1a1a1a',
        //                 lineHeight: '1.5',
        //             }} post
        //         >
        //             {post.postText}
        //         </blockquote>
        //     </div>

        //     <div className="my-5">
        //         <CommentList comments={post.comments} />
        //     </div>
        //     <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        //         <CommentForm postId={post._id} />
        //     </div>
        // </div>




        <div key={_id}>
            <div
                class="bg-white rounded-lg shadow border-b border-gray-300"
            >
                <div
                    class="px-6 py-6  flex justify-between items-center"
                >
                    <div class="flex items-center cursor-pointer">
                        <img
                            class="rounded-full h-10 w-10"
                            src="../avatar.jpeg"
                        />
                        {/* USERNAME */}
                        <div class="ml-2">{username}</div>
                    </div>
                    {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg> */}
                </div>

                <div>
                    <img
                        class="w-full cursor-pointer"
                        // src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                        src="https://placedog.net/600/480?r"
                    // Random dogs
                    />
                </div>
                <p class="tex-gray-600 p-6">{postText}</p>

                <div
                    class="px-6 py-6  flex justify-between items-center"
                >
                    <div class="flex items-center space-x-2">
                        {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-600 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg> */}
                        <svg
                            class="h-6 w-6 text-gray-600 cursor-pointer"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                            ></path>
                        </svg>
                    </div>
                    <div>
                        {/* <svg
              class="h-6 w-6 text-gray-600 cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19 20H17.1717L12.7072 15.5354C12.3166 15.1449 11.6835 15.1449 11.2929 15.5354L6.82843 20L5 20V7C5 5.34315 6.34315 4 8 4H16C17.6569 4 19 5.34314 19 7V20ZM17 7C17 6.44772 16.5523 6 16 6H8C7.44772 6 7 6.44772 7 7V17L9.87873 14.1212C11.0503 12.9497 12.9498 12.9497 14.1214 14.1212L17 16.9999V7Z"
                fill="currentColor"
              />
            </svg> */}
                    </div>
                </div>

                <div class="w-full bg-white rounded">
                    <p class="text-gray-400">{comment}</p>
                </div>
            </div>
        </div>
    );
};

export default SinglePost;