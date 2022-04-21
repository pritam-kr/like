import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { regEx } from "../Utils/RegEx";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { authInfo, getToken } from "../Store/Slice/AuthSlice";

export const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation()
  //State for Forms error
  const [error, setError] = useState("");

  //from we are comming from 

  const from = location.state?.from?.pathname || "/";

   

  const loginFormHandler = async (formData) => {

      try {
        const {
          status,
          data: { foundUser, encodedToken },
        } = await axios.post("/api/auth/login", formData);

        if (status === 200) {
          toast.success("Successfully Login", {
            position: "top-right",
            duration: 500,
          });
          navigate(from);
          localStorage.setItem("login-token", encodedToken);
          localStorage.setItem("user", JSON.stringify(foundUser));

          //Updating initial States
          dispatch(authInfo(foundUser));
          dispatch(getToken(encodedToken));
        }
      } catch (error) {
        const {
          data: { errors },
        } = error.response;
        setError(errors);
      }
    
  };

  return { loginFormHandler, error };
};
