import { Star, Play, BookmarkPlus, Check } from "lucide-react";
import useLogic from "./_logic";
import { useState } from "react";

const Content = () => {
  const { fetchRating, fetchFavourite, detail } = useLogic();
  const [ratingValue, setRatingValue] = useState<number>(0);

  return (
    <>
      <div className="bg-gray-900 text-gray-200 font-sans pt-28 p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-white">{detail?.title}</h1>
          {/* <div className="flex space-x-4 text-sm">
            <span>Cast & crew</span>
            <span>User reviews</span>
            <span>Trivia</span>
            <span>FAQ</span>
            <span className="font-bold text-blue-400">IMDbPro</span>
            <span>All topics</span>
            <Share2 className="w-5 h-5" />
          </div> */}
        </div>

        <div className="flex items-center space-x-4 mb-4">
          {detail?.adult ? (
            <span className="bg-red-500 text-black px-2 py-1 rounded font-bold">
              A
            </span>
          ) : (
            <span className="bg-yellow-500 text-black px-2 py-1 rounded font-bold">
              R
            </span>
          )}
          <span>2h 18m</span>
          <div className="flex items-center">
            IMDb&nbsp;
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span className="ml-1 text-white">
              {detail?.vote_average?.toFixed(2)} / 10
            </span>
          </div>
          {/* <button className="text-blue-400 hover:underline">Rate</button>
          <div className="flex items-center">
            <span className="rotate-90">⟳</span>
            <span className="ml-1">1</span>
          </div> */}
        </div>

        <div className="flex space-x-4 mb-4">
          <div className="w-1/3">
            <img
              src={`${import.meta.env.VITE_TMDB_IMG_URL}/${
                detail?.poster_path
              }`}
              alt={detail?.title}
              className="w-full rounded"
            />
          </div>
          <div className="w-2/3">
            <div className="relative">
              <img
                src={`${import.meta.env.VITE_TMDB_IMG_URL}/${
                  detail?.backdrop_path
                }`}
                alt={detail?.title}
                className="w-full rounded"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <a href={detail?.homepage} target="tab">
                  <button className="bg-black bg-opacity-70 rounded-full p-4 hover:bg-opacity-90 transition-colors">
                    <Play className="w-12 h-12 text-white" />
                  </button>
                </a>
              </div>
            </div>
            <div className="mt-2 flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Play trailer</span>
              {/* <span className="text-gray-400">1:53</span> */}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {detail?.genres?.map((genre: any, index: number) => (
            <span
              key={index}
              className="bg-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition-colors"
            >
              {genre.name}
            </span>
          ))}
          {/* <ChevronRight className="w-5 h-5" /> */}
        </div>

        <p className="mb-4 text-gray-300">{detail?.overview}</p>

        <div className="space-y-2 mb-4 text-gray-300">
          <div>
            <span className="font-bold text-white">Director:</span> Todd
            Phillips
          </div>
          <div>
            <span className="font-bold text-white">Writers:</span> Scott Silver
            · Todd Phillips · Bob Kane
          </div>
          <div>
            <span className="font-bold text-white">Stars:</span> Joaquin Phoenix
            · Lady Gaga · Brendan Gleeson
          </div>
        </div>

        <button
          onClick={() => fetchFavourite({ id: detail?.id, favourite: true })}
          className="bg-yellow-500 text-black font-bold py-2 px-4 rounded flex items-center hover:bg-yellow-600 transition-colors"
        >
          <BookmarkPlus className="w-5 h-5 mr-2" />
          Add to Favourite
        </button>

        <div className="mt-4 flex justify-between text-gray-300">
          <div>
            <div className="hover:text-white">
              {detail?.vote_count} User reviews
            </div>
            <div className="hover:text-white">283 Critic reviews</div>
          </div>
          {/* <div className="bg-green-800 px-2 py-1 rounded text-white">
            45 Metascore
          </div> */}
        </div>

        <div className="flex justify-between mt-10 mb-5">
          <h1 className="text-xl font-bold text-white">Rating</h1>

          <button
            onClick={() => fetchRating({ id: detail?.id, value: ratingValue })}
            className="bg-emerald-800 hover:bg-emerald-700 text-white font-semibold py-1 px-4 rounded-xl flex items-center space-x-2 transition-colors duration-200"
          >
            <Check size={18} />
            <span>I'm Done</span>
          </button>
        </div>

        <div className="relative mb-10">
          <label htmlFor="labels-range-input" className="sr-only">
            Labels range
          </label>
          <input
            id="labels-range-input"
            type="range"
            defaultValue={ratingValue}
            min={1}
            max={10}
            onChange={(e) => setRatingValue(+e.target.value)}
            className="w-full h-4 bg-gray-200 mb-4 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
          <span className="text-2xl text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
            🥴
          </span>
          <span className="text-2xl text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
            🥱
          </span>
          <span className="text-2xl text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
            🤔
          </span>
          <span className="text-2xl text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
            😍
          </span>
        </div>
      </div>
    </>
  );
};

export default Content;
