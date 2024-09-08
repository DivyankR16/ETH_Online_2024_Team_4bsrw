import React from 'react'

const AnalyticsCard = () => {
  return (
    <>
        <div className="rounded-xl p-4 bg-gray-900 shadow-2xl shadow-gray-600 pr-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
            <div className="md:col-span-3">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 p-2 md:p-4">
                <svg
                  id="logo-39"
                  width="50"
                  height="40"
                  viewBox="0 0 50 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.0001 0L50 15.0098V24.9863L25.0001 40L0 24.9863V15.0099L25.0001 0Z"
                    fill="#A5B4FC"
                    className="ccompli2"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 15.0098L25 0L50 15.0098V24.9863L25 40L0 24.9863V15.0098ZM25 33.631L44.6967 21.8022V18.1951L44.6957 18.1945L25 30.0197L5.30426 18.1945L5.3033 18.1951V21.8022L25 33.631ZM25 24.5046L40.1018 15.4376L36.4229 13.2298L25 20.0881L13.5771 13.2298L9.89822 15.4376L25 24.5046ZM25 14.573L31.829 10.4729L25 6.37467L18.171 10.4729L25 14.573Z"
                    fill="#4F46E5"
                    className="ccustom"
                  ></path>
                  <path
                    d="M25.0001 0L0 15.0099V24.9863L25 40L25.0001 0Z"
                    fill="#A5B4FC"
                    className="ccompli2"
                    fillOpacity="0.3"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="col-span-1 md:col-span-9">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-white">
                  Divyank Khajuria
                </h2>
                <p className="mt-2 font-semibold text-white">@divyank</p>
                <p className="mt-4 text-gray-400">
                  The channel was Created on 21/01/2024
                </p>
              </div>

              <hr className="mt-4" />

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
                <div>
                  <p className="font-bold text-white">345</p>
                  <p className="text-sm text-white">Videos</p>
                </div>

                <div>
                  <p className="font-bold text-white">200k</p>
                  <p className="text-sm text-white">Subscribers</p>
                </div>

                <div>
                  <p className="font-bold text-white">38</p>
                  <p className="text-sm text-white">Subscribed</p>
                </div>
              </div>

              <hr className="mt-4" />

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left">
                <div>
                  <p className="font-bold text-white">345 hrs</p>
                  <p className="text-sm text-white">Watch time</p>
                </div>

                <div>
                  <p className="font-bold text-white">200k</p>
                  <p className="text-sm text-white">Views</p>
                </div>
              </div>

              <hr className="mt-4" />

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="w-full rounded-xl border-2 bg-white px-1 py-1 font-semibold text-cyan-900 hover:bg-blue-600 hover:text-white">
                  View Profile
                </button>
                <button className="w-full rounded-xl border-2 bg-white px-1 py-1 font-semibold text-cyan-900 hover:bg-blue-600 hover:text-white">
                  Analytics
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default AnalyticsCard