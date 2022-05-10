import React, { useState } from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { Nav } from "../../Components/Index";


const Signup = () => {
  const [showHide, setShowHide] = useState(false);

  return (
    <>
    <Nav />
      <div className="container login-container mx-auto ">
        <div className="auth-wrapper login-wrapper min-h-screen grid p-6 md:grid-cols-2  gap-2">
          <div className="gif-wrapper flex justify-center items-baseline max-h-36 md:max-h-full md:justify-center md:items-center">
            <img src="./likeGIf.gif" alt="gif" className="gif" />
          </div>

          <div className="flex justify-center items-center">
            <form className="form w-full max-w-xl p-7 text-xl bg-[#070f1f] rounded-3xl text-[#f7f7f7]">
              <div className="mt-4 mb-10 text-center">
                <h1 className="form-heading font-bold">Signup</h1>
              </div>

              <div className="flex gap-3">
                <div>
                  <label className="input-label block">First Name:</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="input mt-3 mb-3 rounded-full text-[#292929]"
                  />
                </div>

                <div>
                  <label className="input-label block">Last Name:</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="input mt-3 mb-3 rounded-full text-[#292929]"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <div>
                  <label className="input-label block">
                    Password: <span className="required">*</span>{" "}
                  </label>
                  <input
                    type="password"
                    placeholder="******"
                    className="input mt-3 mb-3 rounded-full text-[#292929]"
                    required
                  />
                </div>

                <div>
                  <label className="input-label block">
                    Confirm Password: <span className="required">*</span>
                  </label>

                  <div className="relative">
                    <input
                      type={!showHide ? "password" : "text"}
                      placeholder="******"
                      className="input mt-3 mb-3 rounded-full text-[#292929]"
                      required
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
                  Email: <span className="required">*</span>{" "}
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="input mt-3 mb-3 rounded-full text-[#292929]"
                  required
                />
              </div>

              <label className="input-label flex items-center justify-start mt-2 mb-3">
                <input type="checkbox" className="mr-3 " />
                <span className="checkbox-text">Remember me</span>
              </label>

              <div>
                <button className="btn btn-primary w-full p-4 font-semibold rounded-full">
                  Signup
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
