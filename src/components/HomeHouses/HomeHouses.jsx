import { useContext } from "react";
import HouseSearch from "./HouseSearch";
import "./HomeHouses.css";
import { UserAuthContext } from "../../context/userContext";
import { Link } from "react-router-dom";
import { TfiFaceSad } from "react-icons/tfi";

const HomeHouses = () => {
  const {
    user,
    houses,
    isLoading,
    handleNextClick,
    currentPage,
    handlePrevClick,
    filteredProperties,
  } = useContext(UserAuthContext);

  console.log({ houses, filteredProperties });

  return (
    <div className="mt-8" id="house">
      <HouseSearch />
      {filteredProperties?.length > 0 ? (
        <>
          {isLoading ? (
            <p className="text-center">Loading houses..</p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                {filteredProperties?.map((property, index) => (
                  <div
                    key={index}
                    className="w-full border  rounded-lg shadow  house-card-body"
                  >
                    <a>
                      <img
                        className=" rounded-t-lg w-full"
                        src={property.picture}
                        alt="product image"
                      />
                    </a>
                    <div className="px-3 pt-4 pb-5">
                      <a href="#">
                        <h5 className="text-lg font-semibold tracking-tight text-white house-name">
                          {property.name}
                        </h5>
                      </a>
                      <a href="#">
                        <h5 className="text-md font-medium tracking-tight text-gray-400">
                          {property.address} {property.city}
                        </h5>
                      </a>
                      <div className="flex items-center mt-2.5 mb-5">
                        <svg
                          className="w-4 h-4 text-yellow-300 mr-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 mr-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 mr-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 mr-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-gray-200 dark:text-gray-600"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                          5.0
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-white">
                          ${property.rentPerMonth}
                        </span>
                        {user?.role === "renter" && (
                          <>
                            {property?.label === "booked" ? (
                              <button
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                disabled
                              >
                                BOOKED
                              </button>
                            ) : (
                              <>
                                <Link
                                  to={`/book-house/${property._id}`}
                                  href="#"
                                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                  BOOK
                                </Link>
                              </>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 justify-center mt-6">
                <button
                  disabled={currentPage === 1}
                  onClick={handlePrevClick}
                  className="font-medium text-blue-600 hover:underline dark:text-cyan-500"
                >
                  Previous
                </button>
                <button
                  className="font-medium text-blue-600 hover:underline dark:text-cyan-500"
                  disabled={
                    currentPage >=
                    Math.ceil(houses?.meta.total / houses?.meta.limit)
                  }
                  onClick={handleNextClick}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </>
      ) : (
        <p className="text-center text-red-500">
          <TfiFaceSad className="text-4xl inline mr-2" />
          No houses found!
        </p>
      )}
    </div>
  );
};

export default HomeHouses;
