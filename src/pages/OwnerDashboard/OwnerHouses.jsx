import axios from "axios";
import { useEffect, useState } from "react";
// import { UserAuthContext } from "../../context/userContext";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const OwnerHouses = () => {
  const [houses, setHouses] = useState([]);
  const [refetch, setrefetch] = useState(false);

  // const { user } = useContext(UserAuthContext);

  useEffect(() => {
    const getHouse = async () => {
      const localToken = localStorage.getItem("houseToken");
      if (localToken) {
        await axios
          .get(`http://localhost:5000/api/v1/house/get/my-houses`, {
            headers: {
              authorization: `${localToken}`,
            },
          })
          .then((res) => {
            console.log(res.data);
            if (res.status === 200) {
              setHouses(res.data.data);
            }
          });
      }
    };
    getHouse();
  }, [refetch]);

  const handleDeleteHouse = async (id) => {
    await axios
      .delete(`http://localhost:5000/api/v1/house/${id}`, {
        headers: {
          authorization: `${localStorage.getItem("houseToken")}`,
        },
      })
      .then((res) => {
        console.log(res);

        if (res.data.success === true) {
          setrefetch(!refetch);
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
      <div className="flex item-center justify-between">
        <h1>Owner Houses</h1>
        <Link to="addhouse">
          <button className="text-white  bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-md text-xs px-3 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            ADD NEW HOUSE
          </button>
        </Link>
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
            {houses?.map((house, index) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
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
                <td className="px-6 py-4 flex gap-3">
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
      </div>
    </div>
  );
};

export default OwnerHouses;
