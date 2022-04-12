import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="container login-container mx-auto ">
        <div className="auth-wrapper login-wrapper min-h-screen grid p-6 md:grid-cols-2">

          <div className="gif-wrapper flex justify-center items-center">
            <img src="./likeGIf.gif" alt="gif" className="gif"/>
          </div>

          <div className="flex justify-center items-center">
            <form className="form">
              <div className="form-header">
                <h1 className="form-heading">Login</h1>
              </div>

              <label className="input-label form-label">Email: </label>
              <input
                type="text"
                placeholder="Enter email"
                className="input primary-input"
              />

              <p className="text-sm error"></p>

              <label className="input-label form-label">
                Password: <span className="required">*</span>
              </label>
              <input
                type="password"
                placeholder="******"
                className="input required-input form-password-input"
                required
              />

              <label className="input-label">
                <input
                  type="checkbox"
                  className="input checkbox-input"
                  required
                />
                <span className="checkbox-text">Remember me</span>
              </label>

              <div className="input-row">
                <button className="btn btn-primary btn-submit text-md">
                  Login
                </button>
              </div>

              <div className="form-footer mt-4">
              <p className="text-credential center text-sm underline cursor-pointer">
                  Login with Test Credential
                </p>
                <p className="paragraph mt-2">
                  <Link to="/signup" className="links">
                    Create an Account.
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

export { Login };
