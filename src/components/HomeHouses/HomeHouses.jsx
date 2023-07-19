import { useContext, useEffect, useState } from "react";
import HouseSearch from "./HouseSearch";
import axios from "axios";
import { UserAuthContext } from "../../context/userContext";
import { Link } from "react-router-dom";

const HomeHouses = () => {
  const [houses, setHouses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { user } = useContext(UserAuthContext);

  useEffect(() => {
    const getHouse = async () => {
      setIsLoading(true);
      const localToken = localStorage.getItem("houseToken");
      if (localToken) {
        console.log("currentPage", currentPage);

        await axios
          .get(`http://localhost:5000/api/v1/house?page=${currentPage}`, {
            headers: {
              authorization: `${localToken}`,
            },
          })
          .then((res) => {
            console.log(res.data);
            if (res.status === 200) {
              setIsLoading(false);
              setHouses(res.data);
            }
          });
      }
    };
    getHouse();
  }, [currentPage]);

  const handlePrevClick = () => {
    window.scrollTo(0, document.getElementById("house").offsetTop - 100);

    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextClick = () => {
    window.scrollTo(0, document.getElementById("house").offsetTop - 100);
    if (currentPage < Math.ceil(houses?.meta.total / houses?.meta.limit)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="mt-8" id="house">
      {houses?.data?.length > 0 ? (
        <>
          {isLoading ? (
            <p className="text-center">Loading houses..</p>
          ) : (
            <>
              <HouseSearch />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                {houses?.data?.map((property, index) => (
                  <div
                    key={index}
                    className="w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                  >
                    <a href="#">
                      <img
                        className=" rounded-t-lg"
                        src={property.picture}
                        alt="product image"
                      />
                    </a>
                    <div className="px-3 pt-4 pb-5">
                      <a href="#">
                        <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white house-name">
                          {property.name}
                        </h5>
                      </a>
                      <a href="#">
                        <h5 className="text-lg font-medium tracking-tight text-gray-500 dark:text-white">
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
                        <span className="text-lg font-bold text-gray-900 dark:text-white">
                          ${property.rentPerMonth}
                        </span>
                        {property?.label === "booked" ? (
                          <button
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            disabled
                          >
                            BOOKED
                          </button>
                        ) : (
                          <>
                            {user?.role === "renter" && (
                              <Link
                                to={`/book-house/${property._id}`}
                                href="#"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              >
                                BOOK
                              </Link>
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
        <p className="text-center">No houses found</p>
      )}
    </div>
  );
};

export default HomeHouses;
