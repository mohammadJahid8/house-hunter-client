/* eslint-disable react/prop-types */
// import { format } from "date-fns";
import { Button, Modal } from "flowbite-react";

import "rc-slider/assets/index.css";
import { useContext, useState } from "react";
import { UserAuthContext } from "../../context/userContext";
export default function FilterModal({ openModal, setOpenModal }) {
  const props = { openModal, setOpenModal };
  const { filters, handleFilterChange, handleRentRangeChange } =
    useContext(UserAuthContext);
  const [bedroomsFilter, setBedroomsFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [bathroomFilter, setBathroomFilter] = useState("");

  const handleBedroomsChange = (event) => {
    setBedroomsFilter(event.target.value);
    handleFilterChange(event);

    if (cityFilter === event.target.value) {
      setBedroomsFilter("");

      event.target.value = "";
      handleFilterChange(event);
    } else {
      setBedroomsFilter(event.target.value);
      handleFilterChange(event);
    }
  };
  const handlecityChange = (event) => {
    if (cityFilter === event.target.value) {
      setCityFilter("");

      event.target.value = "";
      handleFilterChange(event);
    } else {
      setCityFilter(event.target.value);
      handleFilterChange(event);
    }
  };
  const handleBathroomChange = (event) => {
    if (cityFilter === event.target.value) {
      setBathroomFilter("");

      event.target.value = "";
      handleFilterChange(event);
    } else {
      setBathroomFilter(event.target.value);
      handleFilterChange(event);
    }
  };

  return (
    <>
      <Modal
        show={props.openModal === "default"}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header>Filter Houses</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <label
                htmlFor="large-range"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Rent per month
              </label>
              <input
                id="large-range"
                type="range"
                min={0}
                max={1000000}
                defaultValue={filters?.rentPerMonth}
                onChange={handleRentRangeChange}
                // onChange={(e) => setrangeChange(e.target.value)}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700"
              />
              {console.log(filters)}
              <div>From 0$ To {filters?.rentPerMonth}$</div>
            </div>

            {/* city */}

            <div>
              <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                Top Cities
              </h3>
              <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="horizontal-list-radio-license"
                      type="radio"
                      defaultValue
                      value="Chittagong"
                      name="city"
                      checked={cityFilter === "Chittagong"}
                      onChange={handlecityChange}
                      onClick={handlecityChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="horizontal-list-radio-license"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Chittagong{" "}
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="horizontal-list-radio-id"
                      type="radio"
                      defaultValue
                      value="Dhaka"
                      name="city"
                      checked={cityFilter === "Dhaka"}
                      onChange={handlecityChange}
                      onClick={handlecityChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="horizontal-list-radio-id"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Dhaka
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="horizontal-list-radio-millitary"
                      type="radio"
                      defaultValue
                      value="Sylhet"
                      name="city"
                      checked={cityFilter === "Sylhet"}
                      onChange={handlecityChange}
                      onClick={handlecityChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="horizontal-list-radio-millitary"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Sylhet
                    </label>
                  </div>
                </li>
                <li className="w-full dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="horizontal-list-radio-passport"
                      type="radio"
                      defaultValue
                      value="Rajshahi"
                      name="city"
                      checked={cityFilter === "Rajshahi"}
                      onChange={handlecityChange}
                      onClick={handlecityChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="horizontal-list-radio-passport"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Rajshahi
                    </label>
                  </div>
                </li>
              </ul>
            </div>

            {/* city */}

            <div>
              <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                Bedrooms
              </h3>
              <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="horizontal-list-radio-license"
                      type="radio"
                      defaultValue
                      value="2"
                      name="bedrooms"
                      checked={bedroomsFilter === "2"}
                      onChange={handleBedroomsChange}
                      onClick={handleBedroomsChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="horizontal-list-radio-license"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      2{" "}
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="horizontal-list-radio-id"
                      type="radio"
                      defaultValue
                      value="4"
                      name="bedrooms"
                      checked={bedroomsFilter === "4"}
                      onChange={handleBedroomsChange}
                      onClick={handleBedroomsChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="horizontal-list-radio-id"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      4
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="horizontal-list-radio-millitary"
                      type="radio"
                      defaultValue
                      value="6"
                      name="bedrooms"
                      checked={bedroomsFilter === "6"}
                      onChange={handleBedroomsChange}
                      onClick={handleBedroomsChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="horizontal-list-radio-millitary"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      6
                    </label>
                  </div>
                </li>
                <li className="w-full dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="horizontal-list-radio-passport"
                      type="radio"
                      defaultValue
                      value="8+"
                      name="bedrooms"
                      checked={bedroomsFilter === "8+"}
                      onChange={handleBedroomsChange}
                      onClick={handleBedroomsChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="horizontal-list-radio-passport"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      8+
                    </label>
                  </div>
                </li>
              </ul>
            </div>

            {/*  */}
            <div>
              <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                Bathrooms
              </h3>
              <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="horizontal-list-radio-license"
                      type="radio"
                      defaultValue
                      value="2"
                      name="bathrooms"
                      checked={bathroomFilter === "2"}
                      onChange={handleBathroomChange}
                      onClick={handleBathroomChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="horizontal-list-radio-license"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      2{" "}
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="horizontal-list-radio-id"
                      type="radio"
                      defaultValue
                      value="3"
                      name="bathrooms"
                      checked={bathroomFilter === "3"}
                      onChange={handleBathroomChange}
                      onClick={handleBathroomChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="horizontal-list-radio-id"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      3
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="horizontal-list-radio-millitary"
                      type="radio"
                      defaultValue
                      value="4"
                      name="bathrooms"
                      checked={bathroomFilter === "4"}
                      onChange={handleBathroomChange}
                      onClick={handleBathroomChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="horizontal-list-radio-millitary"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      4
                    </label>
                  </div>
                </li>
                <li className="w-full dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="horizontal-list-radio-passport"
                      type="radio"
                      defaultValue
                      value="5+"
                      name="bathrooms"
                      checked={bathroomFilter === "5+"}
                      onChange={handleBathroomChange}
                      onClick={handleBathroomChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="horizontal-list-radio-passport"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      5+
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            {/*  */}
            <div>
              <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                Room size
              </h3>
              <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="horizontal-list-radio-license"
                      type="radio"
                      defaultValue
                      name="list-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="horizontal-list-radio-license"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      500 Sq. ft.{" "}
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="horizontal-list-radio-id"
                      type="radio"
                      defaultValue
                      name="list-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="horizontal-list-radio-id"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      1000 Sq. ft.
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="horizontal-list-radio-millitary"
                      type="radio"
                      defaultValue
                      name="list-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="horizontal-list-radio-millitary"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      2000 Sq. ft.
                    </label>
                  </div>
                </li>
                <li className="w-full dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="horizontal-list-radio-passport"
                      type="radio"
                      defaultValue
                      name="list-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="horizontal-list-radio-passport"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      3000 Sq. Ft. +
                    </label>
                  </div>
                </li>
              </ul>
            </div>

            {/*  */}

            <div>
              <label>Availability:</label>
              <input
                type="text"
                name="availability"
                value={filters.availability}
                onChange={handleFilterChange}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            color="gray"
            onClick={() => props.setOpenModal(undefined)}
            className="bg-red-600 text-white"
          >
            Cancel
          </Button>
          <Button
            onClick={() => props.setOpenModal(undefined)}
            className="bg-blue-600"
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
