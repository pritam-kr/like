import React, { useState, useEffect } from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { Nav } from "../../Components/Index";
import toast from "react-hot-toast";
 
import { useLogin } from "../../Hooks/useLogin";

const Signup = () => {
  useEffect(() => {

    document.title = "Sign up"

  }, [])
  const { signupForm } = useLogin();

  const [showHide, setShowHide] = useState(false);

  const [signupFormData, setSignupFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
    checked: false,
  });

  const signupFormHandler = (event) => {
    event.preventDefault();

    if (
      signupFormData.firstName === "" ||
      signupFormData.lastName === "" ||
      signupFormData.username === "" ||
      signupFormData.password === "" ||
      signupFormData.confirmPassword === ""
    ) {
      toast.error("Input field can not be Empty.", {
        duration: 2000,
        position: "top-right",
      });
    } else if (signupFormData.password.length < 6) {
      toast.error("Please enter more than six character.", {
        duration: 2000,
        position: "top-right",
      });
    } else if (signupFormData.password !== signupFormData.confirmPassword) {
      toast.error("Password does not matched.", {
        duration: 2000,
        position: "top-right",
      });
    } else {
      toast.success("Form successfully submit.", {
        duration: 2000,
        position: "top-right",
      });

      //Sending Data to Auth context
      signupForm(signupFormData);

      setSignupFormData({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        confirmPassword: "",
        checked: false,
      });
    }
  };

  return (
    <>
      <Nav />
      <div className="container login-container mx-auto ">
        <div className="auth-wrapper login-wrapper min-h-screen grid p-6 md:grid-cols-2  gap-2">
          <div className="gif-wrapper flex justify-center items-baseline max-h-40 md:max-h-full md:justify-center md:items-center">
            <img
              src="https://res.cloudinary.com/dhqxln7zi/image/upload/v1652208993/giph-unscreen_jcskdl.gif"
              alt="gif"
              className="gif"
            />
          </div>

          <div className="flex justify-center items-center">
            <form className="form w-full max-w-xl p-7 text-xl bg-light-bg rounded-3xl text-[#f7f7f7]">
              <div className="mt-4 mb-10 text-center">
                <h1 className="form-heading font-bold">Signup</h1>
              </div>

              <div className="flex gap-3">
                <div>
                  <label className="input-label block">First Name:</label>
                  <input
                    value={signupFormData.firstName}
                    type="text"
                    placeholder="First Name"
                    className="input mt-3 mb-3 rounded-full text-[#292929]"
                    onChange={(event) =>
                      setSignupFormData((prev) => ({
                        ...prev,
                        firstName: event.target.value,
                      }))
                    }
                  />
                </div>

                <div>
                  <label className="input-label block">Last Name:</label>
                  <input
                    value={signupFormData.lastName}
                    type="text"
                    placeholder="Last Name"
                    className="input mt-3 mb-3 rounded-full text-[#292929]"
                    onChange={(event) =>
                      setSignupFormData((prev) => ({
                        ...prev,
                        lastName: event.target.value,
                      }))
                    }
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <div>
                  <label className="input-label block">
                    Password: <span className="required">*</span>{" "}
                  </label>
                  <input
                    value={signupFormData.password}
                    type="password"
                    placeholder="******"
                    className="input mt-3 mb-3 rounded-full text-[#292929]"
                    required
                    onChange={(event) =>
                      setSignupFormData((prev) => ({
                        ...prev,
                        password: event.target.value,
                      }))
                    }
                  />
                </div>

                <div>
                  <label className="input-label block">
                    Confirm Password: <span className="required">*</span>
                  </label>

                  <div className="relative">
                    <input
                      value={signupFormData.confirmPassword}
                      type={!showHide ? "password" : "text"}
                      placeholder="******"
                      className="input mt-3 mb-3 rounded-full text-[#292929]"
                      required
                      onChange={(event) =>
                        setSignupFormData((prev) => ({
                          ...prev,
                          confirmPassword: event.target.value,
                        }))
                      }
                    />
                    {showHide ? (
                      <FaIcons.FaEye
                        className="icons eye-icon"
                        onClick={() => setShowHide(!showHide)}
                      />
                    ) : (
                      <FaIcons.FaEyeSlash
                        className="icons eye-icon"
                        onClick={() => setShowHide(!showHide)}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="input-label block">
                  Username: <span className="required">*</span>{" "}
                </label>
                <input
                  value={signupFormData.username}
                  type="text"
                  placeholder="username"
                  className="input mt-3 mb-3 rounded-full text-[#292929]"
                  required
                  onChange={(event) =>
                    setSignupFormData((prev) => ({
                      ...prev,
                      username: event.target.value,
                    }))
                  }
                />
              </div>

              <label className="input-label flex items-center justify-start mt-2 mb-3">
                <input type="checkbox" className="mr-3 " />
                <span className="checkbox-text">Remember me</span>
              </label>

              <div>
                <button
                  className="btn btn-primary w-full p-4 font-semibold rounded-full"
                  onClick={(event) => signupFormHandler(event)}
                >
                  Create Account
                </button>
              </div>

              <div className="form-footer text-center mt-4">
                <p className="paragraph mt-2 ">
                  <Link to="/" className="links font-bold">
                    Already Account!
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export { Signup };
