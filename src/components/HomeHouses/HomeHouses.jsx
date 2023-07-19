import { useContext } from "react";
import HouseSearch from "./HouseSearch";
import "./HomeHouses.css";
import { UserAuthContext } from "../../context/userContext";
import { Link } from "react-router-dom";
import { TfiArrowLeft, TfiArrowRight, TfiFaceSad } from "react-icons/tfi";

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

  return (
    <div className="mt-8" id="house">
      <HouseSearch />

      <>
        {isLoading ? (
          <p className="text-center text-blue-400">Loading houses..</p>
        ) : (
          <>
            {filteredProperties?.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full ">
                  {filteredProperties?.map((property, index) => (
                    <div
                      key={index}
                      className="w-full  border  rounded-lg shadow  house-card-body"
                    >
                      <a>
                        <img
                          className=" rounded-t-lg w-full h-64 object-cover"
                          src={property.picture}
                          alt="product image"
                        />
                      </a>
                      <div className="px-3 pt-2 pb-2">
                        <div className="flex items-center gap-2">
                          <h5 className="text-lg font-semibold tracking-tight text-white house-name">
                            {property.name}
                          </h5>

                          <h5 className="text-md font-medium tracking-tight text-gray-400">
                            {property.address} {property.city}
                          </h5>
                        </div>
                        <div className="flex items-center gap-2">
                          <h5 className="text-sm font-medium tracking-tight text-gray-400">
                            {property.bedrooms} Bedrooms
                          </h5>

                          <h5 className="text-sm font-medium tracking-tight text-gray-400">
                            {property.bathrooms} Bathrooms
                          </h5>
                          <h5 className="text-sm font-medium tracking-tight text-gray-400">
                            {property.roomSize} Sq. ft.
                          </h5>
                        </div>
                        <div className="flex items-center gap-2">
                          <h5 className="text-sm font-medium tracking-tight text-gray-400">
                            Available till {property.availabilityDate}
                          </h5>
                        </div>
                        <div className="flex items-center mt-2.5 mb-"></div>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-white">
                            ${property.rentPerMonth}{" "}
                            <span className="text-xs text-gray-400">
                              /month
                            </span>
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
              </>
            ) : (
              <p className="text-center text-red-500">
                <TfiFaceSad className="text-4xl inline mr-2" />
                No houses found!
              </p>
            )}
          </>
        )}
      </>

      <div className="flex gap-4 justify-center items-center mt-6">
        <button
          disabled={currentPage === 1}
          onClick={handlePrevClick}
          className="font-medium text-white hover:underline   px-4 py-2 rounded "
          style={{
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
            background: currentPage === 1 ? "#272f38" : "#3b434c",
            textDecoration: "none",
          }}
        >
          <TfiArrowLeft className="inline mr-2  text-white" />
          Previous
        </button>

        <p className="text-white">Page {currentPage}</p>

        <button
          className="font-medium text-white hover:underline bg-[#3b434c] px-4 py-2 rounded"
          disabled={
            currentPage >= Math.ceil(houses?.meta?.total / houses?.meta?.limit)
          }
          onClick={handleNextClick}
          style={{
            cursor: currentPage === 2 ? "not-allowed" : "pointer",
            background: currentPage === 2 ? "#272f38" : "#3b434c",
            textDecoration: "none",
          }}
        >
          Next
          <TfiArrowRight className="inline ml-2  text-white" />
        </button>
      </div>
    </div>
  );
};

export default HomeHouses;
