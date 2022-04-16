/* All the needed components for the page are imported */
import { useState } from "react";

/* Token expiration time is augmented */ 
export default function useToken() {
  function getToken() {
    const tokenString = localStorage.getItem("loginData");
    if (tokenString) {

      console.log(tokenString)
      console.log(typeof(tokenString))
      const now = new Date().getTime();
      const expiresIn = tokenString.exp*1000 - now;

      if (expiresIn <= 0) {
        localStorage.removeItem("loginData");
        return undefined;
      } else return tokenString;

    } else return undefined;
  }

  const [token, setToken] = useState(getToken());

  /* When the token is changed, it is saved in the local storage */
  const saveToken = (userToken) => {
    if(userToken)
      localStorage.setItem("loginData", JSON.stringify(userToken));
    setToken(userToken);
  };

  return {
    token,
    setToken: saveToken,
  };
}
