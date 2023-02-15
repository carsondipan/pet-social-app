// Node Modules
import React from 'react';
import { useQuery } from '@apollo/client';
// Utilities
import { QUERY_USERS, QUERY_USER, QUERY_ME } from '../utils/queries';
// Components

const AllPosts = () => {

    return (
        <body class="bg-gray-50">

            <div
                class="px-4 py-5 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
            >
                <div class="grid grid-cols-12 gap-6">
                    <div class="hidden lg:block col-span-3 space-y-5">
                        <div class="bg-white rounded-lg shadow p-6">
                            <div class="flex items-center justify-left">
                                <img
                                    class="h-12 w-12 rounded-full"
                                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                                />
                                <div class="ml-4">
                                    <h3 class="text-base font-bold">Jin Keguar</h3>
                                    <h4 class="text-sm">Manager</h4>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white rounded-lg shadow p-6 space-y-5">
                            <div class="space-y-4">
                                <div class="flex items-center cursor-pointer">
                                    <svg
                                        class="w-6 h-6"
                                        viewBox="0 0 48 48"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
                                            fill="#FF4500"
                                        />
                                        <path
                                            d="M40 24C40 22.0631 38.4281 20.4912 36.4912 20.4912C35.5369 20.4912 34.6947 20.8561 34.0772 21.4737C31.6912 19.7614 28.379 18.6386 24.7298 18.4982L26.3298 11.0035L31.5228 12.0982C31.579 13.4175 32.6737 14.4842 34.0211 14.4842C35.3965 14.4842 36.5193 13.3614 36.5193 11.9859C36.5193 10.6105 35.3965 9.4877 34.0211 9.4877C33.0386 9.4877 32.1965 10.0491 31.8035 10.8912L25.993 9.65612C25.8246 9.62805 25.6562 9.65612 25.5158 9.74033C25.3755 9.82454 25.2912 9.9649 25.2351 10.1333L23.4667 18.4982C19.7333 18.6105 16.393 19.7052 13.979 21.4737C13.3614 20.8842 12.4912 20.4912 11.5649 20.4912C9.62808 20.4912 8.05615 22.0631 8.05615 24C8.05615 25.4316 8.89826 26.6386 10.1333 27.2C10.0772 27.5368 10.0491 27.9017 10.0491 28.2667C10.0491 33.6561 16.3088 38.007 24.0562 38.007C31.8035 38.007 38.0632 33.6561 38.0632 28.2667C38.0632 27.9017 38.0351 27.5649 37.979 27.2281C39.1298 26.6666 40 25.4316 40 24ZM16 26.4982C16 25.1228 17.1228 24 18.4983 24C19.8737 24 20.9965 25.1228 20.9965 26.4982C20.9965 27.8737 19.8737 28.9965 18.4983 28.9965C17.1228 28.9965 16 27.8737 16 26.4982ZM29.9509 33.0947C28.2386 34.807 24.9825 34.9193 24.0281 34.9193C23.0737 34.9193 19.7895 34.7789 18.1053 33.0947C17.8526 32.8421 17.8526 32.421 18.1053 32.1684C18.3579 31.9158 18.779 31.9158 19.0316 32.1684C20.0983 33.2351 22.4 33.6281 24.0562 33.6281C25.7123 33.6281 27.986 33.2351 29.0807 32.1684C29.3333 31.9158 29.7544 31.9158 30.007 32.1684C30.2035 32.4491 30.2035 32.8421 29.9509 33.0947ZM29.5018 28.9965C28.1263 28.9965 27.0035 27.8737 27.0035 26.4982C27.0035 25.1228 28.1263 24 29.5018 24C30.8772 24 32 25.1228 32 26.4982C32 27.8737 30.8772 28.9965 29.5018 28.9965Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <div class="ml-4 text-gray-900">
                                        Reddit Inc.
                                    </div>
                                </div>

                                <div class="flex items-center cursor-pointer">
                                    <svg
                                        class="w-6 h-6"
                                        viewBox="0 0 48 48"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0)">
                                            <path
                                                d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                                                fill="#4285F4"
                                            />
                                            <path
                                                d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                                                fill="#34A853"
                                            />
                                            <path
                                                d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                                                fill="#FBBC04"
                                            />
                                            <path
                                                d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                                                fill="#EA4335"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect
                                                    width="48"
                                                    height="48"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <div class="ml-4 text-gray-900">
                                        Google search
                                    </div>
                                </div>

                                <div class="flex items-center cursor-pointer">
                                    <svg
                                        class="w-6 h-6"
                                        viewBox="0 0 48 48"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M34.353 17.327C37.4397 19.5413 41.2211 20.8442 45.3051 20.8442V12.9573C44.5322 12.9574 43.7613 12.8765 43.0051 12.7158V18.9239C38.9214 18.9239 35.1405 17.621 32.053 15.4068V31.5018C32.053 39.5533 25.5492 46.0799 17.5268 46.0799C14.5334 46.0799 11.7512 45.1717 9.44006 43.6141C12.0779 46.3209 15.7565 48 19.8263 48C27.8492 48 34.3534 41.4734 34.3534 33.4216V17.327H34.353ZM37.1904 9.37002C35.6129 7.64048 34.5772 5.40538 34.353 2.93438V1.91995H32.1735C32.7221 5.06059 34.5934 7.74377 37.1904 9.37002ZM14.5142 37.4356C13.6329 36.2759 13.1566 34.8572 13.1587 33.3985C13.1587 29.7161 16.1336 26.7303 19.8037 26.7303C20.4877 26.7301 21.1675 26.8352 21.8194 27.0428V18.9796C21.0576 18.8748 20.2888 18.8303 19.5203 18.8466V25.1226C18.868 24.9151 18.1878 24.8096 17.5037 24.8103C13.8335 24.8103 10.8589 27.7958 10.8589 31.4787C10.8589 34.0828 12.3458 36.3374 14.5142 37.4356Z"
                                            fill="#FF004F"
                                        />
                                        <path
                                            d="M32.0529 15.4067C35.1404 17.6209 38.9213 18.9237 43.005 18.9237V12.7156C40.7255 12.2283 38.7075 11.0328 37.1903 9.37002C34.5931 7.74361 32.722 5.06043 32.1733 1.91995H26.4482V33.4213C26.4352 37.0937 23.4655 40.0673 19.8032 40.0673C17.6451 40.0673 15.7279 39.0349 14.5136 37.4356C12.3454 36.3374 10.8585 34.0827 10.8585 31.4789C10.8585 27.7963 13.8331 24.8105 17.5032 24.8105C18.2064 24.8105 18.8842 24.9204 19.5199 25.1228V18.8468C11.6384 19.0102 5.2998 25.473 5.2998 33.4214C5.2998 37.3892 6.87827 40.9861 9.44013 43.6143C11.7513 45.1717 14.5335 46.08 17.5268 46.08C25.5494 46.08 32.0531 39.5531 32.0531 31.5018V15.4067H32.0529Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M43.0051 12.7156V11.037C40.9495 11.0401 38.9343 10.4624 37.1903 9.36987C38.7342 11.0661 40.7671 12.2357 43.0051 12.7156ZM32.1734 1.91997C32.1211 1.61982 32.0809 1.3177 32.053 1.01443V0H24.148V31.5016C24.1354 35.1735 21.1658 38.1471 17.5033 38.1471C16.428 38.1471 15.4128 37.891 14.5137 37.4358C15.7279 39.0349 17.6452 40.0671 19.8033 40.0671C23.4652 40.0671 26.4354 37.0938 26.4482 33.4214V1.91997H32.1734ZM19.5203 18.8468V17.0598C18.8598 16.9692 18.1938 16.9237 17.5271 16.924C9.50383 16.9239 3 23.4508 3 31.5016C3 36.5491 5.55612 40.9974 9.44034 43.614C6.87848 40.986 5.30002 37.3889 5.30002 33.4213C5.30002 25.473 11.6385 19.0102 19.5203 18.8468Z"
                                            fill="#00F2EA"
                                        />
                                    </svg>
                                    <div class="ml-4 text-gray-900">
                                        TikTok Inc.
                                    </div>
                                </div>

                                <div class="flex items-center cursor-pointer">
                                    <svg
                                        class="w-6 h-6"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 6C12.5523 6 13 6.44772 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H11V7C11 6.44772 11.4477 6 12 6Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M5 22C3.34315 22 2 20.6569 2 19V5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5ZM4 19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4H5C4.44772 4 4 4.44772 4 5V19Z"
                                            fill="currentColor"
                                        />
                                    </svg>

                                    <div class="ml-4 text-gray-900">
                                        Add new page
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white rounded-lg shadow p-6 space-y-5">
                            <div class="space-y-4">
                                <div class="flex items-center cursor-pointer">
                                    <svg
                                        class="w-6 h-6 text-gray-900"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M16 12L10 16.3301V7.66987L16 12Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <div class="ml-4 text-gray-900">Learning</div>
                                </div>

                                <div class="flex items-center cursor-pointer">
                                    <svg
                                        class="w-6 h-6 text-gray-900"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M13 10H17V16H13V10Z"
                                            fill="currentColor"
                                            fill-opacity="0.5"
                                        />
                                        <path
                                            d="M11 4H7V16H11V4Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M18 18H6V20H18V18Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <div class="ml-4 text-gray-900">Statistics</div>
                                </div>

                                <div class="flex items-center cursor-pointer">
                                    <svg
                                        class="w-6 h-6 text-gray-900"
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
                                    </svg>
                                    <div class="ml-4 text-gray-900">Bookmarks</div>
                                </div>

                                <div class="flex items-center cursor-pointer">
                                    <svg
                                        class="w-6 h-6 text-gray-900"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15.4695 11.2929C15.0789 10.9024 14.4458 10.9024 14.0553 11.2929C13.6647 11.6834 13.6647 12.3166 14.0553 12.7071C14.4458 13.0976 15.0789 13.0976 15.4695 12.7071C15.86 12.3166 15.86 11.6834 15.4695 11.2929Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M16.1766 9.17156C16.5671 8.78103 17.2003 8.78103 17.5908 9.17156C17.9813 9.56208 17.9813 10.1952 17.5908 10.5858C17.2003 10.9763 16.5671 10.9763 16.1766 10.5858C15.7861 10.1952 15.7861 9.56208 16.1766 9.17156Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M19.7121 11.2929C19.3216 10.9024 18.6885 10.9024 18.2979 11.2929C17.9074 11.6834 17.9074 12.3166 18.2979 12.7071C18.6885 13.0976 19.3216 13.0976 19.7121 12.7071C20.1027 12.3166 20.1027 11.6834 19.7121 11.2929Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M16.1766 13.4142C16.5671 13.0237 17.2003 13.0237 17.5908 13.4142C17.9813 13.8048 17.9813 14.4379 17.5908 14.8284C17.2003 15.219 16.5671 15.219 16.1766 14.8284C15.7861 14.4379 15.7861 13.8048 16.1766 13.4142Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M6 13H4V11H6V9H8V11H10V13H8V15H6V13Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M7 5C3.13401 5 0 8.13401 0 12C0 15.866 3.13401 19 7 19H17C20.866 19 24 15.866 24 12C24 8.13401 20.866 5 17 5H7ZM17 7H7C4.23858 7 2 9.23858 2 12C2 14.7614 4.23858 17 7 17H17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <div class="ml-4 text-gray-900">Gaming</div>
                                </div>

                                <div class="flex items-center cursor-pointer">
                                    <svg
                                        class="w-6 h-6 text-gray-900"
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
                                    </svg>
                                    <div class="ml-4 text-gray-900">Bookmarks</div>
                                </div>

                                <div class="flex items-center cursor-pointer">
                                    <svg
                                        class="w-6 h-6 text-gray-900"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 6.12549 15.0077 6.24919 15.0227 6.37063L8.08261 9.84066C7.54305 9.32015 6.80891 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15C6.80891 15 7.54305 14.6798 8.08261 14.1593L15.0227 17.6294C15.0077 17.7508 15 17.8745 15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C17.1911 15 16.457 15.3202 15.9174 15.8407L8.97733 12.3706C8.99229 12.2492 9 12.1255 9 12C9 11.8745 8.99229 11.7508 8.97733 11.6294L15.9174 8.15934C16.457 8.67985 17.1911 9 18 9Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <div class="ml-4 text-gray-900">Share</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-12 lg:col-span-6 space-y-5">
                        <div class="bg-white rounded-lg shadow">
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
                        </div>
                        <div
                            class="bg-white rounded-lg shadow border-b border-gray-300"
                        >
                            <div
                                class="px-6 py-6  flex justify-between items-center"
                            >
                                <div class="flex items-center cursor-pointer">
                                    <img
                                        class="rounded-full h-10 w-10"
                                        src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                                    />
                                    <div class="ml-2">Prelly Kilman</div>
                                </div>
                                <svg
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
                                </svg>
                            </div>

                            <div>
                                <img
                                    class="w-full cursor-pointer"
                                    src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                                />
                            </div>

                            <div
                                class="px-6 py-6  flex justify-between items-center"
                            >
                                <div class="flex items-center space-x-2">
                                    <svg
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
                                    </svg>
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
                                    <svg
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
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div
                            class="bg-white rounded-lg shadow border-b border-gray-300"
                        >
                            <div
                                class="px-6 py-6  flex justify-between items-center"
                            >
                                <div class="flex items-center cursor-pointer">
                                    <img
                                        class="rounded-full h-10 w-10"
                                        src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                                    />
                                    <div class="ml-2">Prelly Kilman</div>
                                </div>
                                <svg
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
                                </svg>
                            </div>

                            <div>
                                <img
                                    class="w-full cursor-pointer"
                                    src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                                />
                            </div>

                            <div
                                class="px-6 py-6  flex justify-between items-center"
                            >
                                <div class="flex items-center space-x-2">
                                    <svg
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
                                    </svg>
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
                                    <svg
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
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div
                            class="bg-white rounded-lg shadow border-b border-gray-300"
                        >
                            <div
                                class="px-6 py-6  flex justify-between items-center"
                            >
                                <div class="flex items-center cursor-pointer">
                                    <img
                                        class="rounded-full h-10 w-10"
                                        src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                                    />
                                    <div class="ml-2">Prelly Kilman</div>
                                </div>
                                <svg
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
                                </svg>
                            </div>

                            <div>
                                <img
                                    class="w-full cursor-pointer"
                                    src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                                />
                            </div>

                            <div
                                class="px-6 py-6  flex justify-between items-center"
                            >
                                <div class="flex items-center space-x-2">
                                    <svg
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
                                    </svg>
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
                                    <svg
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
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="hidden lg:block col-span-3 space-y-5">
                        <div class="bg-white rounded-lg shadow p-6 space-y-5">
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

                                <div class="flex justify-between items-center">
                                    <div class="flex items-center">
                                        <img
                                            class="rounded-full h-10 w-10"
                                            src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                                        />
                                        <div class="ml-2 text-sm">Peter Kilman</div>
                                    </div>

                                    <button
                                        class="bg-blue-100 text-blue-600 hover:text-white hover:bg-blue-600 transition duration-100	transform hover:scale-110	 text-xs  rounded p-2 text-gray-900"
                                    >
                                        Connect
                                    </button>
                                </div>

                                <div class="flex justify-between items-center">
                                    <div class="flex items-center">
                                        <img
                                            class="rounded-full h-10 w-10"
                                            src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                                        />
                                        <div class="ml-2 text-sm">
                                            Panama Lavala
                                        </div>
                                    </div>

                                    <button
                                        class="bg-blue-100 text-blue-600 hover:text-white hover:bg-blue-600 transition duration-100	transform hover:scale-110	 text-xs  rounded p-2 text-gray-900"
                                    >
                                        Connect
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white rounded-lg shadow p-6 space-y-5">
                            <h3 class="font-bold text-base text-gray-900">
                                Join discussion
                            </h3>
                            <div class="space-y-3">
                                <a
                                    href=""
                                    class="flex justify-between items-center"
                                >
                                    <div>
                                        <div class=" text-sm">#freeinternet</div>
                                        <div class="text-xs text-gray-400">
                                            100,23 post
                                        </div>
                                    </div>

                                    <div
                                        class="flex -space-x-3 relative z-0 overflow-hidden"
                                    >
                                        <img
                                            class="relative z-30 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                            src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&h=255&q=80"
                                            alt=""
                                        />
                                        <img
                                            class="relative z-20 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                            src="https://images.unsplash.com/photo-1610271340738-726e199f0258?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&h=255&q=80"
                                            alt=""
                                        />
                                        <img
                                            class="relative z-10 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </div>
                                </a>
                                <a
                                    href=""
                                    class="flex justify-between items-center"
                                >
                                    <div>
                                        <div class=" text-sm">#globalwarming</div>
                                        <div class="text-xs text-gray-400">
                                            443 post
                                        </div>
                                    </div>

                                    <div
                                        class="flex -space-x-3 relative z-0 overflow-hidden"
                                    >
                                        <img
                                            class="relative z-30 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                            src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&h=255&q=80"
                                            alt=""
                                        />
                                        <img
                                            class="relative z-20 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                            src="https://images.unsplash.com/photo-1610271340738-726e199f0258?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&h=255&q=80"
                                            alt=""
                                        />
                                        <img
                                            class="relative z-10 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </div>
                                </a>
                                <a
                                    href=""
                                    class="flex justify-between items-center"
                                >
                                    <div>
                                        <div class=" text-sm">#cars</div>
                                        <div class="text-xs text-gray-400">
                                            212 post
                                        </div>
                                    </div>

                                    <div
                                        class="flex -space-x-3 relative z-0 overflow-hidden"
                                    >
                                        <img
                                            class="relative z-30 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                            src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&h=255&q=80"
                                            alt=""
                                        />
                                        <img
                                            class="relative z-20 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                            src="https://images.unsplash.com/photo-1610271340738-726e199f0258?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&h=255&q=80"
                                            alt=""
                                        />
                                        <img
                                            class="relative z-10 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </div>
                                </a>
                                <a
                                    href=""
                                    class="flex justify-between items-center"
                                >
                                    <div>
                                        <div class=" text-sm">#iphone</div>
                                        <div class="text-xs text-gray-400">
                                            340 post
                                        </div>
                                    </div>

                                    <div
                                        class="flex -space-x-3 relative z-0 overflow-hidden"
                                    >
                                        <img
                                            class="relative z-30 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                            src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&h=255&q=80"
                                            alt=""
                                        />
                                        <img
                                            class="relative z-20 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                            src="https://images.unsplash.com/photo-1610271340738-726e199f0258?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&h=255&q=80"
                                            alt=""
                                        />
                                        <img
                                            class="relative z-10 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>


    );
};

export default AllPosts;