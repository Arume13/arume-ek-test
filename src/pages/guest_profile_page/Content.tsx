import useLogic from "./_logic";

const Content = () => {
  const { session } = useLogic();

  return (
    <>
      <div className="bg-gray-900 p-4 md:p-6 font-sans text-gray-200">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6 mt-24">
          {/* Left Column (Profile Info) */}
          <div className="w-full md:w-1/3 max-h-[28rem] bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center">
              <img
                src={`https://th.bing.com/th/id/OIP.-TwcC0f1nWtspUYKYjYWdwHaHX?w=1200&h=1194&rs=1&pid=ImgDetMain`}
                alt="Profile"
                className="rounded-full w-20 h-20 mb-4"
              />
              <h2 className="text-xl font-bold mb-2 text-white">
                Guest_{session.substr(1, 6)}
              </h2>
              {/* <p className="text-gray-400 text-sm mb-4">@pikamy</p> */}
              <div className="flex justify-center w-full mb-4">
                <div className="text-center">
                  <p className="font-bold text-blue-400">
                    {/* {favouriteMovie?.results?.length} */}
                  </p>
                  <p className="text-xs text-gray-400">Favourite's</p>
                </div>
              </div>
              <div className="w-full">
                <h3 className="font-bold mb-2 text-white">About Me</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Hi! My name is Pikamy. I've been the creative mind behind the
                  camera since the 1990s.
                </p>
                <div className="mb-2">
                  <p className="text-sm">
                    <span className="font-bold">Mobile:</span> 1234567890
                  </p>
                  <p className="text-sm">
                    <span className="font-bold">Email:</span> example@email.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Posts) */}
          <div className="w-full md:w-2/3 space-y-6">
            {/* Posts */}

            <div className="bg-gray-900 dark:bg-gray-900">
              <div className="mx-auto max-w-screen-xl py-2 sm:py-4">
                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-200 sm:text-2xl dark:text-white">
                      Rated Movie`s
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            {/* {!loading && favouriteMovie?.results?.length > 0
              ? favouriteMovie?.results?.map((item: any, key: number) => {
                  return (
                    <div
                      key={key}
                      className="bg-gray-800 rounded-lg shadow-md p-4"
                    >
                      <div className="flex items-center mb-4">
                        <div>
                          <p className="font-bold text-white">{item?.title}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <img
                          src={`${import.meta.env.VITE_TMDB_IMG_URL}/${
                            item.poster_path
                          }`}
                          alt={`Post image`}
                          className="w-[calc(50%-4px)] md:w-40 h-60 rounded-lg object-cover"
                        />
                      </div>
                    </div>
                  );
                })
              : null} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
