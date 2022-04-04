import { useState } from "react";

export const useToken = () => {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");

    if (tokenString) {
      let userToken = JSON.parse(tokenString);
      return userToken?.accessToken;
    }
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: any) => {
    sessionStorage.setItem("token", JSON.stringify(userToken));

    setToken(userToken.accessToken);
  };

  return {
    setToken: saveToken,
    token,
    getToken: getToken,
  };
};
