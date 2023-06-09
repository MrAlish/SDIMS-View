import Image from "next/image";
import React, { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa"; 

const Teams = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen bg-slate-300 flex justify-center items-center py-20">
      <div className="container mx-auto p-12 bg-gray-100 rounded-xl">
        <h1 className="text-4xl uppercase font-bold from-current mb-8 text-center italic ">
          Our Teams{" "}
        </h1>
        {showMore?<div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 sm:space-y-0">
          <div className="bg-white">
            <div>
              <div className="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
                <div>
                  <Image
                    className="w-full"
                    src="https://i.imgur.com/lmYYa2s.png"
                  />
                  <div className="px-4 py-2">
                    <h1 className="text-xl font-gray-700 font-bold">
                      Papież gigant
                    </h1>
                    <div className="flex space-x-2 mt-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7 text-yellow-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </span>
                      <h3 className="text-lg text-gray-600 font-semibold mb-2">
                        New York
                      </h3>
                    </div>
                    <p className="text-sm tracking-normal">
                      Częstochowski pomnik Jana Pawła II wyjątkowo interesująco
                      wpisuje się w poprzemysłowy krajobraz tego miasta o
                      mocnych lewicowych, robotniczych i socjalistycznych
                      tradycjach. Powstały w 2013 roku, uchodzi za najwyższego
                      Karola Wojtyłę w Polsce.
                    </p>
                    <button className="mt-12 w-full text-center bg-yellow-400 py-2 rounded-lg">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Box-2 --> */}
          <div className="bg-white">
            <div>
              <div className="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
                <div>
                  <Image
                    className="w-full"
                    src="https://i.imgur.com/csPYilq.png"
                  />
                  <div className="px-4 py-2">
                    <h1 className="text-xl font-gray-700 font-bold">
                      Papież gigant
                    </h1>
                    <div className="flex space-x-2 mt-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7 text-yellow-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </span>
                      <h3 className="text-lg text-gray-600 font-semibold mb-2">
                        New York
                      </h3>
                    </div>
                    <p className="text-sm tracking-normal">
                      Częstochowski pomnik Jana Pawła II wyjątkowo interesująco
                      wpisuje się w poprzemysłowy krajobraz tego miasta o
                      mocnych lewicowych, robotniczych i socjalistycznych
                      tradycjach. Powstały w 2013 roku, uchodzi za najwyższego
                      Karola Wojtyłę w Polsce.
                    </p>
                    <button className="mt-12 w-full text-center bg-yellow-400 py-2 rounded-lg">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Box-3 --> */}
          <div className="bg-white">
            <div>
              <div className="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
                <div>
                  <Image
                    className="w-full"
                    src="https://i.imgur.com/chvO4cX.png"
                  />
                  <div className="px-4 py-2">
                    <h1 className="text-xl font-gray-700 font-bold">
                      Papież gigant
                    </h1>
                    <div className="flex space-x-2 mt-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7 text-yellow-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </span>
                      <h3 className="text-lg text-gray-600 font-semibold mb-2">
                        New York
                      </h3>
                    </div>
                    <p className="text-sm tracking-normal">
                      Częstochowski pomnik Jana Pawła II wyjątkowo interesująco
                      wpisuje się w poprzemysłowy krajobraz tego miasta o
                      mocnych lewicowych, robotniczych i socjalistycznych
                      tradycjach. Powstały w 2013 roku, uchodzi za najwyższego
                      Karola Wojtyłę w Polsce.
                    </p>
                    <button className="mt-12 w-full text-center bg-yellow-400 py-2 rounded-lg">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
           {/* <!-- Box-4 --> */}
           <div className="bg-white">
            <div>
              <div className="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
                <div>
                  <Image
                    className="w-full"
                    src="https://i.imgur.com/chvO4cX.png"
                  />
                  <div className="px-4 py-2">
                    <h1 className="text-xl font-gray-700 font-bold">
                      Papież gigant
                    </h1>
                    <div className="flex space-x-2 mt-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7 text-yellow-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </span>
                      <h3 className="text-lg text-gray-600 font-semibold mb-2">
                        New York
                      </h3>
                    </div>
                    <p className="text-sm tracking-normal">
                      Częstochowski pomnik Jana Pawła II wyjątkowo interesująco
                      wpisuje się w poprzemysłowy krajobraz tego miasta o
                      mocnych lewicowych, robotniczych i socjalistycznych
                      tradycjach. Powstały w 2013 roku, uchodzi za najwyższego
                      Karola Wojtyłę w Polsce.
                    </p>
                    <button className="mt-12 w-full text-center bg-yellow-400 py-2 rounded-lg">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div> {/* <!-- Box-5 --> */}
          <div className="bg-white">
            <div>
              <div className="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
                <div>
                  <img
                    className="w-full"
                    src="https://i.imgur.com/chvO4cX.png"
                  />
                  <div className="px-4 py-2">
                    <h1 className="text-xl font-gray-700 font-bold">
                      Papież gigant
                    </h1>
                    <div className="flex space-x-2 mt-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7 text-yellow-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </span>
                      <h3 className="text-lg text-gray-600 font-semibold mb-2">
                        New York
                      </h3>
                    </div>
                    <p className="text-sm tracking-normal">
                      Częstochowski pomnik Jana Pawła II wyjątkowo interesująco
                      wpisuje się w poprzemysłowy krajobraz tego miasta o
                      mocnych lewicowych, robotniczych i socjalistycznych
                      tradycjach. Powstały w 2013 roku, uchodzi za najwyższego
                      Karola Wojtyłę w Polsce.
                    </p>
                    <button className="mt-12 w-full text-center bg-yellow-400 py-2 rounded-lg">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div> {/* <!-- Box-6 --> */}
          <div className="bg-white">
            <div>
              <div className="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
                <div>
                  <img
                    className="w-full"
                    src="https://i.imgur.com/chvO4cX.png"
                  />
                  <div className="px-4 py-2">
                    <h1 className="text-xl font-gray-700 font-bold">
                      Papież gigant
                    </h1>
                    <div className="flex space-x-2 mt-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7 text-yellow-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </span>
                      <h3 className="text-lg text-gray-600 font-semibold mb-2">
                        New York
                      </h3>
                    </div>
                    <p className="text-sm tracking-normal">
                      Częstochowski pomnik Jana Pawła II wyjątkowo interesująco
                      wpisuje się w poprzemysłowy krajobraz tego miasta o
                      mocnych lewicowych, robotniczych i socjalistycznych
                      tradycjach. Powstały w 2013 roku, uchodzi za najwyższego
                      Karola Wojtyłę w Polsce.
                    </p>
                    <button className="mt-12 w-full text-center bg-yellow-400 py-2 rounded-lg">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>:
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 sm:space-y-0">
          <div className="bg-white">
            <div>
              <div className="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
                <div>
                  <img
                    className="w-full"
                    src="https://i.imgur.com/lmYYa2s.png"
                  />
                  <div className="px-4 py-2">
                    <h1 className="text-xl font-gray-700 font-bold">
                      Papież gigant
                    </h1>
                    <div className="flex space-x-2 mt-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7 text-yellow-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </span>
                      <h3 className="text-lg text-gray-600 font-semibold mb-2">
                        New York
                      </h3>
                    </div>
                    <p className="text-sm tracking-normal">
                      Częstochowski pomnik Jana Pawła II wyjątkowo interesująco
                      wpisuje się w poprzemysłowy krajobraz tego miasta o
                      mocnych lewicowych, robotniczych i socjalistycznych
                      tradycjach. Powstały w 2013 roku, uchodzi za najwyższego
                      Karola Wojtyłę w Polsce.
                    </p>
                    <button className="mt-12 w-full text-center bg-yellow-400 py-2 rounded-lg">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Box-2 --> */}
          <div className="bg-white">
            <div>
              <div className="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
                <div>
                  <img
                    className="w-full"
                    src="https://i.imgur.com/csPYilq.png"
                  />
                  <div className="px-4 py-2">
                    <h1 className="text-xl font-gray-700 font-bold">
                      Papież gigant
                    </h1>
                    <div className="flex space-x-2 mt-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7 text-yellow-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </span>
                      <h3 className="text-lg text-gray-600 font-semibold mb-2">
                        New York
                      </h3>
                    </div>
                    <p className="text-sm tracking-normal">
                      Częstochowski pomnik Jana Pawła II wyjątkowo interesująco
                      wpisuje się w poprzemysłowy krajobraz tego miasta o
                      mocnych lewicowych, robotniczych i socjalistycznych
                      tradycjach. Powstały w 2013 roku, uchodzi za najwyższego
                      Karola Wojtyłę w Polsce.
                    </p>
                    <button className="mt-12 w-full text-center bg-yellow-400 py-2 rounded-lg">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Box-3 --> */}
          <div className="bg-white">
            <div>
              <div className="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
                <div>
                  <img
                    className="w-full"
                    src="https://i.imgur.com/chvO4cX.png"
                  />
                  <div className="px-4 py-2">
                    <h1 className="text-xl font-gray-700 font-bold">
                      Papież gigant
                    </h1>
                    <div className="flex space-x-2 mt-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7 text-yellow-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </span>
                      <h3 className="text-lg text-gray-600 font-semibold mb-2">
                        New York
                      </h3>
                    </div>
                    <p className="text-sm tracking-normal">
                      Częstochowski pomnik Jana Pawła II wyjątkowo interesująco
                      wpisuje się w poprzemysłowy krajobraz tego miasta o
                      mocnych lewicowych, robotniczych i socjalistycznych
                      tradycjach. Powstały w 2013 roku, uchodzi za najwyższego
                      Karola Wojtyłę w Polsce.
                    </p>
                    <button className="mt-12 w-full text-center bg-yellow-400 py-2 rounded-lg">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}
       
        <div className="flex justify-end pt-8 ">
        <div
          onClick={() => {
            setShowMore(!showMore);
          }}
          className="flex gap-2 bg-blue-400  py-3 shadow-lg rounded-md w-36 justify-center hover:bg-blue-300 cursor-pointer "
        >
          <div className="pt-1">
            {showMore ? <FaArrowUp/> : <FaArrowDown/>}
          </div>

          <button type="submit" className="text-sm font-extralight ">
            {showMore ? "Show Less  " : "Show More"}
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Teams;
