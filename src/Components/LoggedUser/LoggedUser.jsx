import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LoggedUser = () => {
  const state = useSelector((state) => state);
  const {
    auth: { userInfo },
    user: { users },
  } = state;
  const loggedUser = users?.find(
    (eachUser) => eachUser.username === userInfo.username
  );

  return (
    <div className="admin-short-info p-3   border-b-0 rounded-3xl mb-2 bg-light-bg">
      <div className="flex items-center">
        <img
          src={loggedUser?.avatar}
          alt="admin"
          className="post-avatar border-2"
        />
        <div className="ml-2">
          <h1 className="post-user-name leading-none">
            <Link to="/profile" className="font-bold">
              {loggedUser?.firstName} {loggedUser?.lastName}
            </Link>
          </h1>
          <Link to="/profile">
            <p className="text-[#909090]">{loggedUser?.username} </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { LoggedUser };
