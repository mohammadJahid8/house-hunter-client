/* eslint-disable react/prop-types */
// import { format } from "date-fns";
import { Button, Modal } from "flowbite-react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";
export default function FilterModal({ openModal, setOpenModal }) {
  const props = { openModal, setOpenModal };
  const minDate = new Date();
  const maxDate = new Date();

  const [selectedRange, setSelectedRange] = useState([minDate, maxDate]);

  const handleRangeChange = (values) => {
    const datetime = values.map((value) => {
      const demo = new Date(value);
      // const formatt = format(demo, "MMM dd, yyyy");
      return demo;
    });
    console.log(datetime);
    setSelectedRange(datetime);
  };

  const formatLabel = (value) => {
    console.log(value.toLocaleDateString());
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
                defaultValue={50}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700"
              />
            </div>

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
                      name="list-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="horizontal-list-radio-license"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Driver License{" "}
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
                      State ID
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
                      US Millitary
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
                      US Passport
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
                      name="list-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="horizontal-list-radio-license"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Driver License{" "}
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
                      State ID
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
                      US Millitary
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
                      US Passport
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
                      Driver License{" "}
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
                      State ID
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
                      US Millitary
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
                      US Passport
                    </label>
                  </div>
                </li>
              </ul>
            </div>

            {/*  */}

            <Slider
              range
              minValue={minDate.getTime()} // Convert date objects to timestamp
              maxValue={maxDate.getTime()}
              // defaultValue={[minDate.getTime(), maxDate.getTime()]} // Convert date objects to timestamp
              // value={selectedRange.map((date) => date.getTime())}
              onChange={handleRangeChange}
              tipFormatter={formatLabel}
            />
            {/* You can also display the selected date range */}
            <div>
              <span>Selected Range: {formatLabel(selectedRange[0])}</span> -{" "}
              <span>{formatLabel(selectedRange[1])}</span>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => props.setOpenModal(undefined)}>
            I accept
          </Button>
          <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
