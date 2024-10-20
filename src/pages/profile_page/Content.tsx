import useLogic from "./_logic";

const Content = () => {
  const { fetchSignout, loading, account, favouriteMovie } = useLogic();

  return (
    <>
      <div className="bg-gray-900 p-4 md:p-6 font-sans text-gray-200">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6 mt-24">
          {/* Left Column (Profile Info) */}
          <div className="w-full md:w-1/3 max-h-[19rem] bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center">
              <img
                src={`https://media.themoviedb.org/t/p/w32_and_h32_face/${account?.avatar?.tmdb?.avatar_path}`}
                alt="Profile"
                className="rounded-full w-20 h-20 mb-4"
              />
              <h2 className="text-xl font-bold mb-2 text-white">
                {account?.username}
              </h2>
              {/* <p className="text-gray-400 text-sm mb-4">@pikamy</p> */}
              <div className="flex justify-center w-full mb-4">
                <div className="text-center">
                  <p className="font-bold text-blue-400">
                    {favouriteMovie?.results?.length}
                  </p>
                  <p className="text-xs text-gray-400">Favourite's</p>
                </div>
              </div>
            <button
            onClick={() => fetchSignout()}
              disabled={loading}
              className="inline-block  shrink-0 rounded-md border mt-6 border-red-600 bg-red-600 px-12 py-2 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            >
              Sign out
            </button>
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
                      Favourite`s
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-4 lg:grid-cols-2 px-4">
            {!loading && favouriteMovie?.results?.length > 0
              ? favouriteMovie?.results?.map((item: any, key: number) => {
                  return (
                    <div
                      key={key}
                      className="bg-gray-800 mx-auto min-w-[15rem] rounded-lg shadow-md p-4"
                    >
                      <div className="flex justify-center mb-4">
                        <div>
                          <p className="font-bold text-white">{item?.title}</p>
                          {/* <p className="text-xs text-gray-400">about 1 hour ago</p> */}
                        </div>
                      </div>
                      <div className="flex flex-wrap justify-center mb-4">
                        <img
                          src={`${import.meta.env.VITE_TMDB_IMG_URL}/${
                            item.poster_path
                          }`}
                          alt={`Post image`}
                          className="w-[calc(80%-4px)] md:w-50 h-60 rounded-lg object-cover"
                        />
                      </div>
                    </div>
                  );
                })
              : null}
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
