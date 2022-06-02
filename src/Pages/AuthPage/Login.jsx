import React, { useState, useEffect } from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import { Nav } from "../../Components/Index";
import {useLogin} from "../../Hooks/useLogin"



const Login = () => {

  useEffect(() => {

    document.title = "Login"

  }, [])

  const [formData, setFormData] = useState({ username: "", password: "" });

  
  const { loginForm} = useLogin();

 
  const loginSubmitHandler = (event) => {
    event.preventDefault();
    loginForm(formData);
  };

  //Text credential
  const loginTextHandler = () => {
    setFormData({ username: "tessathom", password: "tessathom123" });
  };

  return (
    <>
    <Nav/>
      <div className="container login-container mx-auto ">
        <div className="auth-wrapper login-wrapper min-h-screen md:min-h-screen grid p-6 md:grid-cols-2  gap-2">
          <div className="gif-wrapper flex flex-col justify-center items-baseline max-h-36 md:max-h-full md:justify-center md:items-center ">
            <img src="https://res.cloudinary.com/dhqxln7zi/image/upload/v1654064381/undraw_social_media_re_sulg_xvxgwt.svg" alt="gif" className="gif w-[4rem]" />
            <p className="text-[2rem] mt-[-2rem] text-[#f7f7f7]">A Social Media App</p>
          </div>

          <div className="flex justify-center items-center">
            <div className="form w-full max-w-xl p-7 text-xl bg-light-bg rounded-3xl text-[#f7f7f7]">
              <div className="mt-4 mb-4 text-center">
             
                <h1 className="form-heading font-bold">Login</h1>
                <p className="text-[1.3rem] mt-[1rem] text-[#f7f7f7] md:hidden">A Social Media App</p>
              </div>

              <label className="block">Username: </label>
              <input
                type="text"
                placeholder="Enter username"
                required
                value={formData.username}
                className="input mt-3 mb-3 rounded-full text-[#292929]"
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
                className="input mt-3 mb-3 rounded-full text-[#292929]"
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
                    className="btn btn-primary w-full p-4 font-semibold rounded-full"
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
