import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { regEx } from "../Utils/RegEx";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { authInfo, getToken } from "../Store/Slice/AuthSlice";

export const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //State for Forms error
  const [error, setError] = useState("");

  const loginFormHandler = async (formData) => {
    if (regEx.test(formData.email)) {
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
          navigate("/feeds");
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
    } else if (!regEx.test(formData.email)) {
      setError("Email is not valid. Try Again");
    } else {
      setError("");
    }
  };

  return { loginFormHandler, error };
};
