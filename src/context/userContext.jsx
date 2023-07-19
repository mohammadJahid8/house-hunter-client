/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

import swal from "sweetalert";

export const UserAuthContext = createContext();

export default function UserAuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const [token, setToken] = useState(null);

  const [userRefetch, setUserRefetch] = useState(false);

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
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
}
