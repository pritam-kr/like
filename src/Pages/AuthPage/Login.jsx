import React, { useState } from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import { useLogin } from "../../Services/useLogin";


const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const { loginFormHandler, error } = useLogin();

 
  const loginSubmitHandler = (event) => {
    event.preventDefault();
    loginFormHandler(formData);
  };

  //Text credential
  const loginTextHandler = () => {
    setFormData({ username: "adarshbalika", password: "adarshBalika123" });
  };

  return (
    <>
      <div className="container login-container mx-auto ">
        <div className="auth-wrapper login-wrapper min-h-screen grid p-6 md:grid-cols-2  gap-2">
          <div className="gif-wrapper flex justify-center items-baseline max-h-36 md:max-h-full md:justify-center md:items-center">
            <img src="./likeGIf.gif" alt="gif" className="gif" />
          </div>

          <div className="flex justify-center items-center">
            <div className="form w-full max-w-xl p-7 text-xl">
              <div className="mt-4 mb-4 text-center">
                <h1 className="form-heading font-bold">Login</h1>
              </div>

              <label className="block">Username: </label>
              <input
                type="text"
                placeholder="Enter username"
                required
                value={formData.username}
                className="input mt-3 mb-3"
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    username: event.target.value,
                  }))
                }
              />

              <p className="text-sm error"></p>

              <label className="input-label block">
                Password: <span className="required">*</span>
              </label>
              <input
                type="password"
                placeholder="******"
                className="input mt-3 mb-3"
                value={formData.password}
                required
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    password: event.target.value,
                  }))
                }
              />

              <label className="input-label flex items-center justify-start mt-2 mb-3">
                <input type="checkbox" className="mr-3 " />
                <span className="checkbox-text">Remember me</span>
              </label>

              <div className="input-row">
                <Link to="/feeds">
                  {" "}
                  <button
                    className="btn btn-primary w-full p-4 font-semibold"
                    onClick={(event) => loginSubmitHandler(event)}
                  >
                    login
                  </button>
                </Link>
              </div>

              <div className="form-footer text-center mt-4">
                <p
                  className="underline underline-offset-1 cursor-pointer text"
                  onClick={() => loginTextHandler()}
                >
                  Login with Test Credential
                </p>
                <p className="paragraph mt-2 ">
                  <Link to="/signup" className="links font-bold">
                    Create an Account.
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Login };
