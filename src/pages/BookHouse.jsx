import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import { UserAuthContext } from "../context/userContext";

const BookHouse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [house, setHouse] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(UserAuthContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    const getSingleHouse = async () => {
      setIsLoading(true);
      const localToken = localStorage.getItem("houseToken");
      if (localToken) {
        await axios
          .get(
            `https://house-hunter-server-bay.vercel.app/api/v1/house/${id}`,
            {
              headers: {
                authorization: `${localToken}`,
              },
            }
          )
          .then((res) => {
            console.log(res.data);
            if (res.status === 200) {
              setIsLoading(false);
              setHouse(res.data.data);
            }
          });
      }
    };
    getSingleHouse();
  }, [id]);

  const handleBookHouse = async () => {
    const data = {
      house: house?._id,
      renter: user?.email,
      renterId: user?._id,
      owner: user?.email,
    };

    await axios
      .post(
        `https://house-hunter-server-bay.vercel.app/api/v1/bookings`,
        data,
        {
          headers: {
            authorization: `${localStorage.getItem("houseToken")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);

        if (res.data.success === true) {
          swal({
            title: "House booked successfully!",
            icon: "success",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        swal({
          title: "Something went wrong!",
          icon: "error",
        });
      });
  };

  return (
    <div className="px-8 mt-28">
      <h4 className="text-center font-extrabold tracking-tight text-3xl mb-4 ">
        Book House
      </h4>

      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <>
          <div className="flex justify-center mb-4">
            <img src={house?.picture} className="flex justify-center w-96" />
          </div>

          <dl className=" text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="flex flex-col pb-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Name
                </dt>
                <dd className="text-lg font-semibold">{house?.name}</dd>
              </div>
              <div className="flex flex-col ">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Address
                </dt>
                <dd className="text-lg font-semibold">
                  {house?.address}, {house?.city}
                </dd>
              </div>

              <div className="flex flex-col ">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Availability Date
                </dt>
                <dd className="text-lg font-semibold">
                  {house?.availabilityDate}
                </dd>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="flex flex-col ">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Bedrooms
                </dt>
                <dd className="text-lg font-semibold">{house?.bedrooms}</dd>
              </div>
              <div className="flex flex-col ">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Bathrooms
                </dt>
                <dd className="text-lg font-semibold">{house?.bathrooms}</dd>
              </div>
              <div className="flex flex-col ">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Room Size
                </dt>
                <dd className="text-lg font-semibold">{house?.roomSize}</dd>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="flex flex-col ">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Rent Per Month
                </dt>
                <dd className="text-lg font-semibold">{house?.rentPerMonth}</dd>
              </div>
              <div className="flex flex-col ">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Phone Number
                </dt>
                <dd className="text-lg font-semibold">{house?.phoneNumber}</dd>
              </div>
              <div className="flex flex-col pt-3 ">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400 ">
                  Description
                </dt>
                <dd className="text-lg font-semibold">{house?.description}</dd>
              </div>
            </div>
          </dl>

          <div className="flex gap-1 mb-4 justify-center mt-8">
            <>
              <button
                onClick={() => navigate(-1)}
                className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                BACK
              </button>

              <button
                onClick={handleBookHouse}
                className="text-white  bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-sm text-xs px-3 py-1.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                BOOK NOW
              </button>
            </>
          </div>
        </>
      )}
    </div>
  );
};

export default BookHouse;
