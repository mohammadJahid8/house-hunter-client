import axios from "axios";
import { useContext, useEffect, useState } from "react";
// import { UserAuthContext } from "../../context/userContext";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { UserAuthContext } from "../../context/userContext";

const OwnerHouses = () => {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(false);

  const { refetchOwnerHouses, setrefetchOwnerHouses } =
    useContext(UserAuthContext);

  useEffect(() => {
    const getHouse = async () => {
      setLoading(true);
      const localToken = localStorage.getItem("houseToken");
      if (localToken) {
        await axios
          .get(
            `https://house-hunter-server-bay.vercel.app/api/v1/house/get/my-houses`,
            {
              headers: {
                authorization: `${localToken}`,
              },
            }
          )
          .then((res) => {
            if (res.status === 200) {
              setHouses(res.data.data.reverse());
              setLoading(false);
            }
          });
      }
    };
    getHouse();
  }, [refetchOwnerHouses]);

  const handleDeleteHouse = async (id) => {
    await axios
      .delete(`https://house-hunter-server-bay.vercel.app/api/v1/house/${id}`, {
        headers: {
          authorization: `${localStorage.getItem("houseToken")}`,
        },
      })
      .then((res) => {
        if (res.data.success === true) {
          setrefetchOwnerHouses(!refetchOwnerHouses);
          swal({
            title: "House deleted successfully!",
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
    <div>
      <div className="flex item-center justify-between mb-4">
        <h1 className="text-white text-xl">My Houses</h1>
        <Link to="addhouse">
          <button className="text-white  bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-md text-xs px-3 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            ADD NEW HOUSE
          </button>
        </Link>
      </div>

      <div className="relative overflow-x-auto">
        {loading ? (
          <p className="text-center text-blue-400">Loading houses..</p>
        ) : (
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
                  availability Date
                </th>
                <th scope="col" className="px-6 py-3">
                  rent Per Month
                </th>
                <th scope="col" className="px-6 py-3">
                  phone Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {houses?.map((house, index) => (
                <tr
                  className=" border-b dark:bg-gray-800 dark:border-gray-700"
                  key={index}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img src={house?.picture} className="w-12 rounded-full" />
                  </th>
                  <td className="px-6 py-4">{house.name}</td>
                  <td className="px-6 py-4">
                    {house.address} {house.city}
                  </td>
                  <td className="px-6 py-4">{house.bedrooms}</td>
                  <td className="px-6 py-4">{house.bathrooms}</td>
                  <td className="px-6 py-4">{house.roomSize} Sq. Ft.</td>
                  <td className="px-6 py-4">{house.availabilityDate}</td>
                  <td className="px-6 py-4">${house.rentPerMonth}</td>
                  <td className="px-6 py-4">{house.phoneNumber}</td>
                  <td className="px-6 py-4 ">
                    <Link
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      to={`edit-house/${house._id}`}
                    >
                      <p>Edit</p>
                    </Link>
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
        )}
      </div>
    </div>
  );
};

export default OwnerHouses;
