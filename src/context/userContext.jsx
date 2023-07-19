/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

import swal from "sweetalert";

export const UserAuthContext = createContext();

export default function UserAuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const [token, setToken] = useState(null);

  const [userRefetch, setUserRefetch] = useState(false);

  const [houses, setHouses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    city: "",
    bedrooms: "",
    bathrooms: "",
    roomSize: "",
    availability: "",
    rentPerMonth: [0, 1000000], // Default rent range from 0 to 10000
  });

  useEffect(() => {
    const getHouse = async () => {
      setIsLoading(true);
      const localToken = localStorage.getItem("houseToken");
      if (localToken) {
        console.log("currentPage", currentPage);

        await axios
          .get(`http://localhost:5000/api/v1/house?page=${currentPage}`, {
            headers: {
              authorization: `${localToken}`,
            },
          })
          .then((res) => {
            console.log(res.data);
            if (res.status === 200) {
              setIsLoading(false);
              setHouses(res.data);
            }
          });
      }
    };
    getHouse();
  }, [currentPage]);

  const handlePrevClick = () => {
    window.scrollTo(0, document.getElementById("house").offsetTop - 100);

    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextClick = () => {
    window.scrollTo(0, document.getElementById("house").offsetTop - 100);
    if (currentPage < Math.ceil(houses?.meta.total / houses?.meta.limit)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handleSearchChange = (event) => {
    event.preventDefault();
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleRentRangeChange = (event) => {
    // console.log(event.target.value, newValue);

    setFilters((prevFilters) => ({
      ...prevFilters,
      rentPerMonth: event.target.value,
    }));
  };

  const filteredProperties = houses?.data?.filter((property) => {
    const { name, address, city, phoneNumber } = property;

    // Search filter logic
    if (searchQuery) {
      console.log("inside search");

      const normalizedSearchQuery = searchQuery.toLowerCase();
      if (
        name.toLowerCase().includes(normalizedSearchQuery) ||
        address.toLowerCase().includes(normalizedSearchQuery) ||
        city.toLowerCase().includes(normalizedSearchQuery) ||
        phoneNumber.includes(searchQuery)
      ) {
        return true;
      }
      return false;
    }

    // City filter logic
    if (filters.city && city !== filters.city) {
      console.log("inside city");
      return false;
    }

    // Bedrooms filter logic
    if (filters.bedrooms && property.bedrooms !== parseInt(filters.bedrooms)) {
      console.log("inside bedrooms");
      return false;
    }

    // Bathrooms filter logic
    if (
      filters.bathrooms &&
      property.bathrooms !== parseInt(filters.bathrooms)
    ) {
      console.log("inside bathrooms");
      return false;
    }

    // Room size filter logic
    if (filters.roomSize && property.roomSize !== parseInt(filters.roomSize)) {
      console.log("inside roomSize");
      return false;
    }

    // Availability filter logic
    if (
      filters.availability &&
      property.availabilityDate !== filters.availability
    ) {
      console.log("inside availabilityDate");
      return false;
    }

    // Rent per month filter logic

    if (property.rentPerMonth > filters.rentPerMonth) {
      console.log("inside rentPerMonth");
      return false;
    }

    return true; // Property matches all filters
  });

  console.log(filters?.rentPerMonth);

  useEffect(() => {
    const getUser = async () => {
      const localToken = localStorage.getItem("houseToken");
      if (localToken) {
        await axios
          .get("http://localhost:5000/api/v1/users/my-profile", {
            headers: {
              authorization: `${localToken}`,
            },
          })
          .then((res) => {
            if (res.status === 200) {
              setUser(res.data.data);
            }
          })
          .finally(() => {});
        setUserRefetch(false);
      }
    };
    getUser();
  }, [userRefetch]);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("houseToken");

    swal({
      title: "Success",
      text: `You have been logged out!`,
      icon: "success",
      button: "OK!",
      className: "modal_class_success",
    });
  };

  return (
    <UserAuthContext.Provider
      value={{
        logout,
        user,
        setUser,
        token,
        setToken,
        setUserRefetch,
        userRefetch,
        isLoading,
        setSearchQuery,
        searchQuery,
        currentPage,
        setCurrentPage,
        handlePrevClick,
        handleNextClick,
        handleSearchChange,
        handleFilterChange,
        handleRentRangeChange,
        filteredProperties,
        houses,
        setHouses,
        filters,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
}
