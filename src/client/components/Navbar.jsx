import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();
  const activeLinkStyle =
    "block py-2 pl-3 pr-4 rounded text-white bg-blue-700 md:bg-transparent md:text-blue-500 md:p-0";
  const nonActiveLinkStyle =
    "block py-2 pl-3 pr-4 rounded text-white md:border-0 md:p-0 md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent";

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={""} className="flex items-center">
          <img src="/microsoft_tick.svg" className="h-8 mr-3" alt="Cool Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            TODOLO
          </span>
        </Link>
        <div className="w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to={""}
                className={
                  pathname === "/" ? activeLinkStyle : nonActiveLinkStyle
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"add"}
                className={
                  pathname === "/add" ? activeLinkStyle : nonActiveLinkStyle
                }
              >
                Add TODO
              </Link>
            </li>
            <li>
              <Link
                to={"impressum"}
                className={
                  pathname === "/impressum"
                    ? activeLinkStyle
                    : nonActiveLinkStyle
                }
              >
                Impressum
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
