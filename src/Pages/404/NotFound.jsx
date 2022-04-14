import React from "react";
import "./NotFound.css"
import {Link} from "react-router-dom"

const NotFound = () => {
  return <div className="container relative min-h-screen   mr-auto ml-auto">
          <div className="not-found-wrapper absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center  items-center w-80 mr-auto ml-auto mx-auto">
              <img alt="not-found" src="https://res.cloudinary.com/dhqxln7zi/image/upload/v1649922123/404_o0mjey.svg" className="w-full h-auto" />
              <Link to="/"> <button className="btn btn-login mt-6 text-xl">Login</button></Link>
          </div>
  </div>;
};

export { NotFound };
