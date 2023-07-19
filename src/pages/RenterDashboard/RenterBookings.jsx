import axios from "axios";
import { useContext, useEffect, useState } from "react";

import swal from "sweetalert";

import { TfiFaceSad } from "react-icons/tfi";
import { UserAuthContext } from "../../context/userContext";

const RenterBookings = () => {
  const { refetchHouse, setrefetchHouse } = useContext(UserAuthContext);
  const [bookingHouses, setbookingHouses] = useState([]);
  const [refetchBooking, setrefetchBooking] = useState(false);

  useEffect(() => {
    const getHouse = async () => {
      const localToken = localStorage.getItem("houseToken");
      if (localToken) {
        await axios
          .get(`https://house-hunter-server-bay.vercel.app/api/v1/bookings`, {
            headers: {
              authorization: `${localToken}`,
            },
          })
          .then((res) => {
            if (res.status === 200) {
              setbookingHouses(res.data.data);
            }
          });
      }
    };
    getHouse();
  }, [refetchBooking]);

  const handleDeleteHouse = async (id) => {
    await axios
      .delete(
        `https://house-hunter-server-bay.vercel.app/api/v1/bookings/${id}`,

        {
          headers: {
            authorization: `${localStorage.getItem("houseToken")}`,
          },
        }
      )
      .then((res) => {
        if (res.data.success === true) {
          setrefetchBooking(!refetchBooking);
          setrefetchHouse(!refetchHouse);
          swal({
            text: "Booking deleted successfully!",
            icon: "success",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        swal({
          text: "Something went wrong!",
          icon: "error",
        });
      });
  };

  return (
    <div>
      <h1 className="text-white text-xl">My bookings</h1>

      {bookingHouses?.length > 0 ? (
        <>
          {bookingHouses?.length === 2 ? (
            <p className="text-red-600 mb-2 text-sm">
              Note: You have already booked two houses. Remove one house for new
              booking.
            </p>
          ) : bookingHouses?.length === 1 ? (
            <p className="text-red-600 mb-2 text-sm">
              Note: You can book one more house.
            </p>
          ) : (
            <p className="text-red-600 mb-2 text-sm">
              Note: You can book two house only.
            </p>
          )}

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-white">
              <thead className="text-xs text-white uppercase bg-[#262626] ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    picture
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Address
                  </th>
                  <th scope="col" className="px-6 py-3">
                    bedrooms
                  </th>
                  <th scope="col" className="px-6 py-3">
                    bathrooms
                  </th>
                  <th scope="col" className="px-6 py-3">
                    roomSize
                  </th>
                  <th scope="col" className="px-6 py-3">
                    availabilityDate
                  </th>
                  <th scope="col" className="px-6 py-3">
                    rentPerMonth
                  </th>
                  <th scope="col" className="px-6 py-3">
                    phoneNumber
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {bookingHouses?.map((house, index) => (
                  <tr
                    className=" border-b dark:bg-gray-800 dark:border-gray-700"
                    key={index}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        src={house?.house?.picture}
                        className="w-12 rounded-full"
                      />
                    </th>
                    <td className="px-6 py-4">{house?.house?.name}</td>
                    <td className="px-6 py-4">
                      {house?.house?.address} {house?.house?.city}
                    </td>
                    <td className="px-6 py-4">{house?.house?.bedrooms}</td>
                    <td className="px-6 py-4">{house?.house?.bathrooms}</td>
                    <td className="px-6 py-4">
                      {house?.house?.roomSize} Sq. Ft.
                    </td>
                    <td className="px-6 py-4">
                      {house?.house?.availabilityDate}
                    </td>
                    <td className="px-6 py-4">${house?.house?.rentPerMonth}</td>
                    <td className="px-6 py-4">{house?.house?.phoneNumber}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleDeleteHouse(house._id)}
                        className="font-medium text-red-600 hover:underline dark:text-cyan-500"
                      >
                        <p>Delete</p>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <p className="text-center text-red-500">
          <TfiFaceSad className="text-4xl inline mr-2" />
          Sorry you have no booking yet!
        </p>
      )}
    </div>
  );
};

export default RenterBookings;
