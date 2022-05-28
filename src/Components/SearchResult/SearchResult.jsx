import React from "react";
import { useSelector } from "react-redux";

const SearchResult = ({ searchQuery, setShowSearchResult, inputRef }) => {
  const state = useSelector((state) => state);
  const {
    user: { users },
  } = state;

  const isSearched = [...users]?.filter((eachUser) =>
    eachUser.username.toLowerCase().includes(searchQuery.query.toLowerCase())
  );

  console.log(isSearched);

  return (
    <div className="search-user-suggestions   text-[#363535] absolute  right-0 left-0  p-[10px] rounded-md">
      {isSearched?.length === 0 ? <p className="text-xl  text-[#f7f7f7] font-semibold mt-1" >
            Match not found 😞
          </p> : isSearched?.map((eachUser) => (
        <div className="flex items-center mt-4">
          <img
            src={eachUser.avatar}
            alt={eachUser.username}
            className="post-avatar"
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
      ))}
    </div>
  );
};

export { SearchResult };

{
  /* <div className="flex items-center">
<img
  src="https://res.cloudinary.com/dhqxln7zi/image/upload/v1652867276/istockphoto-1168369629-612x612_wko9dt.jpg"
  alt="users-avatar"
  className="post-avatar"
/>
<div className="post-user-name leading-none flex flex-col  items-start text-[#f7f7f7] ml-2">
  <p className="cursor-pointer">Pritam Kumar</p>
  <p className="text-[#909090] cursor-pointer text-[12px]">pritamkr</p>
</div>
</div> */
}
