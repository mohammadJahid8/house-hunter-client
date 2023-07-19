import axios from "axios";
import { useEffect, useState } from "react";

const HousesBooked = () => {
  const [houses, setHouses] = useState([]);

  // const { user } = useContext(UserAuthContext);

  useEffect(() => {
    const getHouse = async () => {
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
              const bookedHouses = res.data.data.filter(
                (house) => house.label === "booked"
              );

              setHouses(bookedHouses);
            }
          });
      }
    };
    getHouse();
  }, []);

  return (
    <div>
      <h1 className="text-white text-xl mb-4">Booked Houses</h1>

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
                <td className="px-6 py-4">{house?.name}</td>
                <td className="px-6 py-4">
                  {house?.address} {house?.city}
                </td>
                <td className="px-6 py-4">{house?.bedrooms}</td>
                <td className="px-6 py-4">{house?.bathrooms}</td>
                <td className="px-6 py-4">{house?.roomSize} Sq. Ft.</td>
                <td className="px-6 py-4">{house?.availabilityDate}</td>
                <td className="px-6 py-4">${house?.rentPerMonth}</td>
                <td className="px-6 py-4">{house?.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HousesBooked;
