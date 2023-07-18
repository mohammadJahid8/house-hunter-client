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
      const localToken = localStorage.getItem("heroHunter");
      if (localToken) {
        await axios
          .get("https://localhost:5000/current-user", {
            headers: {
              authorization: `Bearer ${localToken}`,
            },
          })
          .then((res) => {
            if (res.status === 200) {
              setUser(res.data.result);
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
    localStorage.removeItem("hunterUser");

    swal({
      title: "Success",
      text: `Sign out successfully.`,
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
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
}
