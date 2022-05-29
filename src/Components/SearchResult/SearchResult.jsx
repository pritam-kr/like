import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchResult = ({ searchQuery, setShowSearchResult, inputRef }) => {
  const navigate = useNavigate();

  const state = useSelector((state) => state);
  const {
    auth: { userInfo },
    user: { users },
  } = state;

  const isSearched = [...users]?.filter((eachUser) =>
    eachUser.username.toLowerCase().includes(searchQuery.query.toLowerCase())
  );

  //Single profile handler
  const singleProfileHandler = (username) => {
      
    if (username === userInfo.username) {
      navigate("/profile");
    } else {
      navigate(`/profile/${username}`);
    }

    inputRef.current.value = "";
    setShowSearchResult(false);
  };

  return (
    <div className="search-user-suggestions   text-[#363535] absolute  right-0 left-0  p-[10px] rounded-md">
      {isSearched?.length === 0 ? (
        <p className="text-xl  text-[#f7f7f7] font-semibold mt-1">
          Match not found 😞
        </p>
      ) : (
        isSearched?.map((eachUser) => (
          <div className="flex items-center mt-4" onClick={() => singleProfileHandler(eachUser.username)}>
            <img
              src={eachUser.avatar}
              alt={eachUser.username}
              className="post-avatar"
              ref={inputRef}
            />
            <div className="post-user-name leading-none flex flex-col  items-start text-[#f7f7f7] ml-2">
              <p className="cursor-pointer">
                {eachUser.firstName} {eachUser.lastName}
              </p>
              <p className="text-[#909090] cursor-pointer text-[12px]">
                {eachUser.username}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export { SearchResult };

 