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
  const [error, setError] = useState("");
  const { user, refetchHouse, setrefetchHouse, bookingHouses } =
    useContext(UserAuthContext);

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
            if (res.status === 200) {
              setIsLoading(false);
              setHouse(res.data.data);
            }
          });
      }
    };
    getSingleHouse();
  }, [id]);

  const handleBookHouse = async (e) => {
    e.preventDefault();
    if (bookingHouses?.length >= 2) {
      swal({
        text: "You cant book more than two houses! Please remove one house from dashboard to book new house.",
        icon: "warning",
      });
    } else {
      const data = {
        house: house?._id,
        renter: user?.email,
        renterId: user?._id,
        owner: user?.email,
      };

      const phoneNumber = e.target.number.value;

      const phoneNumberRegex = /^(\+?88)?01[3-9]\d{8}$/;

      if (!phoneNumberRegex.test(phoneNumber)) {
        setError("Please enter a Bangladeshi phone number!");
        setIsLoading(false);
        return;
      }
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
          if (res.data.success === true) {
            setrefetchHouse(!refetchHouse);
            swal({
              text: "House booked successfully!",
              icon: "success",
            });
            navigate(-1);
          }
        })
        .catch((err) => {
          console.log(err);
          swal({
            text: "Something went wrong!",
            icon: "error",
          });
        });
    }
  };

  return (
    <div className="px-8 mt-28">
      <h4 className="text-center font-extrabold tracking-tight text-3xl mb-4 text-white">
        Book House
      </h4>

      {isLoading ? (
        <p className="text-center text-blue-400">Loading...</p>
      ) : (
        <>
          <div className="flex justify-center mb-4">
            <img
              src={house?.picture}
              className="flex justify-center w-96 rounded"
            />
          </div>

          <form className="max-w-xl mx-auto" onSubmit={handleBookHouse}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
              >
                Your Name
              </label>
              <input
                type="text"
                id="email"
                value={user?.name}
                disabled
                className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                value={user?.email}
                disabled
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
              >
                House Name
              </label>
              <input
                type="text"
                id="email"
                value={house?.name}
                disabled
                className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
              >
                Phone number
              </label>
              <input
                type="number"
                id="email"
                name="number"
                className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="+880 1234567890"
                required
              />

              {error && (
                <p color="red" className="font-sans text-sm text-red-700">
                  {error}
                </p>
              )}
            </div>

            <div className="flex gap-1 mb-4 justify-center mt-8">
              <>
                <button
                  onClick={() => navigate(-1)}
                  className="text-white  bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-sm text-xs px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  BACK
                </button>

                <button
                  type="submit"
                  className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-xs px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  BOOK NOW
                </button>
              </>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default BookHouse;
