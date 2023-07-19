/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

import swal from "sweetalert";

export const UserAuthContext = createContext();

export default function UserAuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const [token, setToken] = useState(null);

  const [userRefetch, setUserRefetch] = useState(false);
  const [refetchHouse, setrefetchHouse] = useState(false);

  const [houses, setHouses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    city: "",
    bedrooms: "",
    bathrooms: "",
    roomSize: "",
    availability: "",
    rentPerMonth: "", // Default rent range from 0 to 10000
  });

  useEffect(() => {
    const getHouse = async () => {
      setIsLoading(true);
      const localToken = localStorage.getItem("houseToken");

      await axios
        .get(
          `https://house-hunter-server-bay.vercel.app/api/v1/house?page=${currentPage}`,
          {
            headers: {
              authorization: `${localToken}`,
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            setIsLoading(false);
            setHouses(res.data);
          }
        });
    };
    getHouse();
  }, [currentPage, refetchHouse]);

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
    if (event?.target) {
      const { name, value } = event.target;

      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value,
      }));
    } else {
      setFilters(event);
    }
  };

  const handleRentRangeChange = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      rentPerMonth: event.target.value,
    }));
  };

  const filteredProperties = houses?.data?.filter((property) => {
    const {
      name,
      address,
      city,
      phoneNumber,
      bedrooms,
      bathrooms,
      roomSize,
      availabilityDate,
      rentPerMonth,
    } = property;

    // Search filter logic
    if (searchQuery) {
      const normalizedSearchQuery = searchQuery.toLowerCase().toString();

      if (
        name.toLowerCase().includes(normalizedSearchQuery) ||
        address.toLowerCase().includes(normalizedSearchQuery) ||
        city.toLowerCase().includes(normalizedSearchQuery) ||
        phoneNumber.includes(searchQuery) ||
        bedrooms == searchQuery ||
        bathrooms == searchQuery ||
        roomSize == searchQuery ||
        availabilityDate.includes(searchQuery) ||
        rentPerMonth == searchQuery
      ) {
        return true;
      }
      return false;
    }

    // City filter logic
    if (
      filters.city.toLowerCase() &&
      city.toLowerCase() !== filters.city.toLowerCase() &&
      !city.includes(filters.city)
    ) {
      return false;
    }

    if (
      filters.bedrooms &&
      (property.bedrooms > parseInt(filters.bedrooms) ||
        filters.bedrooms === "8+")
    ) {
      if (filters.bedrooms === "8+" && property.bedrooms > 8) {
        return true;
      } else {
        return false;
      }
    }
    if (
      filters.bathrooms &&
      (property.bathrooms > parseInt(filters.bathrooms) ||
        filters.bathrooms === "5+")
    ) {
      if (filters.bathrooms === "5+" && property.bathrooms > 5) {
        return true;
      } else {
        return false;
      }
    }
    if (
      filters.roomSize &&
      (property.roomSize > parseInt(filters.roomSize) ||
        filters.roomSize === "3000+")
    ) {
      if (filters.roomSize === "3000+" && property.roomSize > 3000) {
        return true;
      } else {
        return false;
      }
    }

    // Availability filter logic
    if (filters.availability) {
      const userInputDate = new Date(filters.availability);

      const availableTillDate = new Date(property.availabilityDate);
      return availableTillDate >= userInputDate;
    }
    // Rent per month filter logic

    if (property.rentPerMonth > parseInt(filters.rentPerMonth)) {
      return false;
    }

    return true; // Property matches all filters
  });

  useEffect(() => {
    const getUser = async () => {
      const localToken = localStorage.getItem("houseToken");
      if (localToken) {
        setIsLoadingUser(true);
        await axios
          .get(
            "https://house-hunter-server-bay.vercel.app/api/v1/users/my-profile",
            {
              headers: {
                authorization: `${localToken}`,
              },
            }
          )
          .then((res) => {
            if (res.status === 200) {
              setUser(res.data.data);
              setIsLoadingUser(false);
            }
          })
          .finally(() => {});
        setUserRefetch(false);
      }
    };
    getUser();
  }, [userRefetch]);

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
        isLoadingUser,
        setIsLoadingUser,
        setIsLoading,
        refetchHouse,
        setrefetchHouse,
        setrefetchBooking,
        bookingHouses,
        setbookingHouses,
        refetchBooking,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
}
