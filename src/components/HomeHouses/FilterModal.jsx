/* eslint-disable react/prop-types */
// import { format } from "date-fns";
import { Button, Modal } from "flowbite-react";

import "rc-slider/assets/index.css";
import { useContext, useState } from "react";
import { UserAuthContext } from "../../context/userContext";
import { Toaster, toast } from "react-hot-toast";
export default function FilterModal({ openModal, setOpenModal }) {
  const props = { openModal, setOpenModal };
  const {
    filters,
    handleFilterChange,
    handleRentRangeChange,
    houses,
    setisFilterApplied,
  } = useContext(UserAuthContext);
  const [bedroomsFilter, setBedroomsFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [bathroomFilter, setBathroomFilter] = useState("");
  const [roomSizeFilter, setRoomSizeFilter] = useState("");

  const [availabilityDateFilter, setAvailabilityDateFilter] = useState("");
  const [rentRange, setRentRange] = useState("");

  const handleBedroomsChange = (event) => {
    handleFilterChange(event);
    setBedroomsFilter(event.target.value);
  };
  const handlecityChange = (event) => {
    handleFilterChange(event);
    setCityFilter(event.target.value);
  };
  const handleBathroomChange = (event) => {
    handleFilterChange(event);
    setBathroomFilter(event.target.value);
  };
  const handleRoomSize = (event) => {
    setRoomSizeFilter(event.target.value);
    handleFilterChange(event);
  };

  const handleAvailabilityDate = (event) => {
    setAvailabilityDateFilter(event.target.value);
    handleFilterChange(event);
  };
  // check if any filter is empty or contain "yes". if it is empty and "yes" then the variable will be false
  const isFilterApplied =
    (bedroomsFilter !== "" && bedroomsFilter !== "All") ||
    (cityFilter !== "" && cityFilter !== "All") ||
    (bathroomFilter !== "" && bathroomFilter !== "All") ||
    (roomSizeFilter !== "" && roomSizeFilter !== "All") ||
    (availabilityDateFilter !== "" && availabilityDateFilter !== "All") ||
    (rentRange !== "" && rentRange !== "All");

  const handleCancelFilters = () => {
    setRentRange("");
    setBedroomsFilter("");
    setCityFilter("");
    setBathroomFilter("");
    setRoomSizeFilter("");
    setAvailabilityDateFilter("");
    handleFilterChange({
      city: "",
      bedrooms: "",
      bathrooms: "",
      roomSize: "",
      availability: "",
      rentPerMonth: "",
    });
    // show all products
    if (isFilterApplied) {
      toast.success("Filter removed");
      setisFilterApplied(false);
    }

    props.setOpenModal(undefined);
  };

  const handleSavefilter = () => {
    // show all products
    if (isFilterApplied) {
      toast.success("Filter applied");
      setisFilterApplied(true);
    }
    props.setOpenModal(undefined);
  };

  const allCities = houses?.data?.map((house) => house.city.toUpperCase());
  const uniqueCities = [...new Set(allCities)];

  const allBedrooms = houses?.data?.map((house) => house.bedrooms);
  const uniqueBedrooms = [...new Set(allBedrooms)].sort();

  const allBathrooms = houses?.data?.map((house) => house.bathrooms);
  const uniqueBathrooms = [...new Set(allBathrooms)].sort();

  const allRoomSize = houses?.data?.map((house) => house.roomSize);
  const uniqueRoomSize = [...new Set(allRoomSize)].sort();

  const allAvailabilityDates = houses?.data?.map(
    (house) => house.availabilityDate
  );
  const uniqueAvailabilityDates = [...new Set(allAvailabilityDates)];

  return (
    <>
      <Toaster />
      <Modal
        show={props.openModal === "default"}
        onClose={handleCancelFilters}
        className=""
      >
        <div className="hello bg-[#2c2b2b] text-white">
          <Modal.Header className="text-white">
            <p className="text-white">Filter Houses</p>
          </Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="large-range"
                  className="block mb-2 text-sm font-medium text-gray-200 dark:text-white"
                >
                  Rent per month
                </label>
                <input
                  id="large-range"
                  type="range"
                  min={0}
                  max={100000}
                  defaultValue={filters?.rentPerMonth}
                  onChange={(e) => {
                    handleRentRangeChange(e);
                    setRentRange(e.target.value);
                  }}
                  // onChange={(e) => setrangeChange(e.target.value)}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700"
                />

                <div className="text-gray-200 text-dm">
                  From 0 $ To {filters?.rentPerMonth} $
                </div>
              </div>

              {/* city */}

              <div>
                <h3 className="mb-4 font-semibold text-gray-200 dark:text-white">
                  City
                </h3>
                <select
                  id="city"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="city"
                  onChange={handlecityChange}
                  value={cityFilter}
                >
                  <option selected>All</option>
                  {uniqueCities?.map((city) => (
                    <option value={city} key={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* city */}

              <div>
                <h3 className=" font-semibold text-gray-200 dark:text-white">
                  Bedrooms
                </h3>
                <p className="text-red-600 font-medium text-sm">
                  Note: The houses in range for your selected bedrooms will be
                  filtered
                </p>
                <select
                  id="bedrooms"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="bedrooms"
                  onChange={handleBedroomsChange}
                  value={bedroomsFilter}
                >
                  <option selected>All</option>
                  {uniqueBedrooms?.map((bedroom) => (
                    <option value={bedroom} key={bedroom}>
                      {bedroom}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <h3 className=" font-semibold text-gray-200 dark:text-white">
                  Bathrooms
                </h3>
                <p className="text-red-600 font-medium text-sm">
                  Note: The houses in range for your selected Bathrooms will be
                  filtered
                </p>
                <select
                  id="bathrooms"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="bathrooms"
                  onChange={handleBathroomChange}
                  value={bathroomFilter}
                >
                  <option selected>All</option>
                  {uniqueBathrooms?.map((bathroom) => (
                    <option value={bathroom} key={bathroom}>
                      {bathroom}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <h3 className=" font-semibold text-gray-200 dark:text-white">
                  Room size
                </h3>
                <p className="text-red-600 font-medium text-sm">
                  Note: The houses in range for your selected Room size will be
                  filtered
                </p>
                <select
                  id="roomSize"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="roomSize"
                  onChange={handleRoomSize}
                  value={roomSizeFilter}
                >
                  <option selected>All</option>
                  {uniqueRoomSize?.map((roomSize) => (
                    <option value={roomSize} key={roomSize}>
                      {roomSize}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <h3 className=" font-semibold text-gray-200 dark:text-white">
                  Availability
                </h3>
                <p className="text-red-600 font-medium text-sm">
                  Note: The houses in range for your selected Availability Date
                  will be filtered
                </p>
                <select
                  id="availability"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="availability"
                  onChange={handleAvailabilityDate}
                  value={availabilityDateFilter}
                >
                  <option selected>All</option>
                  {uniqueAvailabilityDates?.map((availabilityDate) => (
                    <option value={availabilityDate} key={availabilityDate}>
                      {availabilityDate}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="flex justify-end">
            {isFilterApplied && (
              <Button
                color="gray"
                onClick={handleCancelFilters}
                className="bg-red-600 text-white"
              >
                {isFilterApplied ? "Remove Filter" : "Close"}
              </Button>
            )}
            <Button onClick={handleSavefilter} className="bg-blue-600">
              {isFilterApplied ? "Done" : "Maybe next time"}
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}
