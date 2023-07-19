/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import FilterModal from "./FilterModal";
import { UserAuthContext } from "../../context/userContext";

const HouseSearch = () => {
  const [openModal, setOpenModal] = useState();
  const { searchQuery, handleSearchChange } = useContext(UserAuthContext);

  return (
    <div className="mb-6">
      <form className="max-w-2xl mx-auto">
        <div className="flex">
          <label
            htmlFor="search-dropdown"
            className="mb-2 text-sm font-medium  sr-only text-white"
          >
            Your Email
          </label>
          <button
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            className=" inline-flex items-center py-2.5 px-4 text-sm font-medium text-center    rounded-l-lg  focus:ring-4 focus:outline-none  bg-gray-700 hover:bg-gray-600 focus:ring-gray-700 text-white border-gray-600"
            type="button"
            onClick={() => setOpenModal("default")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                height: 14,
                width: 14,
                fill: "currentcolor",
              }}
            >
              <path d="M5 8a3 3 0 0 1 2.83 2H14v2H7.83A3 3 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.83 4H2V4h6.17A3 3 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            </svg>
            Filter{" "}
          </button>

          <div className="relative w-full">
            <input
              defaultValue={searchQuery}
              onChange={handleSearchChange}
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm  outline-none  rounded-r-lg  border-l-2 border  focus:ring-blue-500  bg-gray-700 border-l-gray-600  border-gray-600 placeholder-gray-400 text-white focus:border-blue-500"
              placeholder="Search by house name or address..."
              required
            />
          </div>
        </div>
      </form>

      <FilterModal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default HouseSearch;
