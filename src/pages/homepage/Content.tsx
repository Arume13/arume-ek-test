import HeroCarousel from "./_components/HeroCarousel";
import useLogic from "./_logic";

const Content = () => {
  const {
    setPopularPage,
    popularPage,
    loadingNowPlaying,
    loadingPopular,
    topRated,
    nowPlaying,
    popular,
  } = useLogic();

  return (
    <>
      <HeroCarousel datas={topRated} />

      <div className="bg-gray-900 dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-200 sm:text-3xl dark:text-white">
                Now Playing Movie
              </h1>

              <p className="mt-1.5 text-sm text-gray-400 dark:text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,
                recusandae.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 m-auto md:grid-cols-4 lg:grid-cols-6 px-4">
        {loadingNowPlaying
          ? [1, 2, 3, 4, 5, 6].map((_i: any, _k: number) => {
              return (
                <div role="status" className="max-w-screen p-4 animate-pulse">
                  <div className="h-80 bg-gray-200 rounded-xl dark:bg-gray-700 w-full lg:w-[14rem] mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded-xl dark:bg-gray-700 w-full lg:w-[14rem] mb-4"></div>
                  <div className="h-2 bg-gray-200 rounded-xl dark:bg-gray-700 w-full lg:w-[14rem] mb-4"></div>
                  <div className="h-2 bg-gray-200 rounded-xl dark:bg-gray-700 w-full lg:w-[14rem] mb-4"></div>
                </div>
              );
            })
          : null}

        {nowPlaying?.length > 0
          ? nowPlaying.map((item: any, key: any) => {
              return (
                <div className="group" key={key}>
                  <img
                    alt=""
                    src={`${import.meta.env.VITE_TMDB_IMG_URL}/${
                      item.backdrop_path
                    }`}
                    className="h-80 object-fit mx-auto lg:w-[14rem] rounded-xl object-cover shadow-xl transition group-hover:grayscale-[0%] hover:scale-110 ease-in duration-200 dark:shadow-gray-700/25"
                  />

                  <div className="p-4">
                    <a href="#">
                      <h3 className="text-lg font-medium text-gray-200 dark:text-white">
                        {item?.title}
                      </h3>
                    </a>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-400 dark:text-gray-400">
                      {item?.overview}
                    </p>
                  </div>
                </div>
              );
            })
          : null}
      </div>

      <div className="bg-gray-900 dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-200 sm:text-3xl dark:text-white">
                Popular Movie
              </h1>

              <p className="mt-1.5 text-sm text-gray-400 dark:text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,
                recusandae.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 m-auto md:grid-cols-4 lg:grid-cols-6 px-4">
        {popular?.length > 0
          ? popular.map((item: any, key: any) => {
              return (
                <article
                  key={key}
                  className="relative overflow-hidden p-3 rounded-xl shadow transition hover:shadow-lg hover:scale-110 ease-in duration-200"
                >
                  <img
                    alt=""
                    src={`${import.meta.env.VITE_TMDB_IMG_URL}/${
                      item.poster_path
                    }`}
                    className="  h-full w-full object-cover"
                  />
                  <div className="">

                  </div>
                </article>
              );
            })
          : null}

        {loadingPopular
          ? [1, 2, 3, 4, 5, 6].map((_i: any, _k: number) => {
              return (
                <div role="status" className="max-w-screen p-4 animate-pulse">
                  <div className="h-80 bg-gray-200 rounded-xl dark:bg-gray-700 w-full lg:w-[15rem] mb-4"></div>
                </div>
              );
            })
          : null}
      </div>

      <div className="bg-gray-900 dark:bg-gray-900">
        <div className="mx-auto max-w-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-center">
            <div>
              {/* <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900"> */}
              <button
                onClick={() => setPopularPage(popularPage + 1)}
                className={`${
                  popularPage >= 5 ? "hidden" : ""
                } inline-block px-4 py-2 text-sm font-medium bg-gray-500 rounded-lg min-w-xl text-gray-800 hover:bg-gray-500 hover:text-gray-200 focus:relative dark:text-gray-200 dark:hover:bg-gray-800`}
              >
                {loadingPopular ? "Please Wait..." : "Load more"}
              </button>
              {/* </span> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;