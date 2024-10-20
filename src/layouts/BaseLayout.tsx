import { useLocation, useNavigate } from "react-router-dom";
import useLogic from "../pages/profile_page/_logic";
const BaseLayout = ({ children }: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  const session: any = localStorage.getItem("session_id");
  const {account} = useLogic();

  return (
    <>
      {location?.pathname !== "/sign-in" ? (
        <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md lg:border lg:border-gray-100 bg-gray-900 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
          <div className="px-4">
            <div className="flex items-center justify-between">
              <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                <div
                  onClick={() => navigate(`/`)}
                  className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-200 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                >
                  Home
                </div>
              </div>
              <div className="flex items-center justify-end gap-3">
                {/* <a
                className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                href="/login"
              >
                Sign in
              </a> */}

                {session ? (
                  <div
                    onClick={() => navigate(`/profile`)}
                    className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
                  >
                    <span className="sr-only">Toggle dashboard menu</span>

                    <img
                      src={`https://media.themoviedb.org/t/p/w32_and_h32_face/${account?.avatar?.tmdb?.avatar_path}`}
                      alt=""
                      className="size-10 object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    onClick={() => navigate(`/sign-in`)}
                  >
                    Login
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>
      ) : null}

      <div className="bg-gray-900">{children}</div>

      {location?.pathname !== "/sign-in" ? (
        <footer className="bg-gray-900 dark:bg-gray-900">
          <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
            <div className="lg:flex lg:items-end lg:justify-between">
              <div>
                <div className="flex place-items-start text-teal-600 lg:justify-start dark:text-teal-300">
                <img
                    alt=""
                    src="/ek.png"
                    className="h-20 lg:w-[14rem] rounded-xl object-cover"
                  />
                </div>

                <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left dark:text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Incidunt consequuntur amet culpa cum itaque neque.
                </p>
              </div>

              <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Projects
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <p className="mt-12 text-center text-sm text-gray-500 lg:text-right dark:text-gray-400">
              EK Movie &copy; {new Date().getFullYear()}. All rights
              reserved.
            </p>
          </div>
        </footer>
      ) : null}
    </>
  );
};

export default BaseLayout;
