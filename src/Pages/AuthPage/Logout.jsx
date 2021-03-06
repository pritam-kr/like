import React from "react";
import * as FaIcons from "react-icons/fa";
import {Link} from "react-router-dom"

const Logout = () => {
  return (
    <div className="container logout-container mx-auto">
      <div className="auth-wrapper min-h-screen flex justify-center items-center">
        <div className="w-full max-w-lg max-h-96">
          <div className="text-center text-xl logout-box">
            <FaIcons.FaSignOutAlt className="icons logout-icons text-logout-logo mr-auto ml-auto mb-3 text-[4rem] text-[#f7f7f7]" />
            <h3 className="text-2xl font-semibold">
              Oh no! You're leaving... Are you sure{" "}
            </h3>
           <Link to="/"> <button className="btn btn-login mt-3 text-lg rounded-full">Login</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Logout };
