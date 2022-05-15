import React from "react";

const Avatar = ({username}) => {
  return (
    <div className="avatar post-avatar mr-2 ">
      <span className="text-xl">{username[0].toUpperCase()}</span>
    </div>
  );
};

export { Avatar };
