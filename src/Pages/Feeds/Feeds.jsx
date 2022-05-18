import React from "react";
import "./Feed.css";
import {
  Topbar,
  FeedPostCard,
  PostModal,
  Users,
  Loading,
} from "../../Components/Index";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredPost } from "../../Store/Slice/PostSlice";
import { Link } from "react-router-dom";
 

const Feeds = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  //User data to follow
  const {
    auth: { token, userInfo },
    post: { allPost, loading },
    user: { users },
  } = state;

  // filter user on the basis of user name for follow/ unfollow
  const filteredUser = users.filter(
    (eachUser) => eachUser.username !== userInfo.username
  );

   

   //Filter Post on the basis of logged user following array 
   const loggedUser = users?.find((eachUser) => eachUser.username === userInfo.username)
   const loggedUserFollowing = loggedUser?.following
 
 
   const feedPost = allPost.filter((eachPost) =>  loggedUserFollowing.find((each) => each.username === eachPost.username ) || eachPost.username === loggedUser.username)

  const recentPost = [...feedPost].reverse();

  const trendingPost = [...feedPost].sort(
    (a, b) => b.likes.likeCount - a.likes.likeCount
  );

  const sortByDate = [...feedPost].sort(
    (a, b) => new Date(b.createdAt).getDate() - new Date(a.createdAt).getDate()
  );

  const filterPostHandler = (post, type) => {
    if (type === "trending") {
      dispatch(getFilteredPost({ trendingPost: [...post].reverse() }));
    } else if (type === "sortByDate") {
      dispatch(getFilteredPost({ trendingPost: [...post].reverse() }));
    } else {
      dispatch(getFilteredPost({ trendingPost: post }));
    }
  };


  return (
    <>
      <Topbar />
      <div className="parent-container feed-container ">
        <div className="feed-wrapper  max-w-screen-lg mx-auto grid gap-2 grid-cols-1 md:grid-cols-feed-col px-2 my-2 ">
          <div className="feed-post p-2">
            <div className=" flex justify-between items-center text-white-color p-2">
              <h1 className="text-xl">Feeds</h1>
              <div className="flex">
                <button
                  className="mr-2 flex items-center icons text-sm"
                  onClick={() => filterPostHandler(trendingPost, "trending")}
                >
                  Trending
                </button>
                <button
                  className="mr-2 flex items-center icons text-sm"
                  onClick={() => filterPostHandler(sortByDate, "sortByDate")}
                >
                  Sort By Date
                </button>
                <button
                  className="mr-2 flex items-center icons text-sm"
                  onClick={() => filterPostHandler(recentPost, "recent")}
                >
                  Recent
                </button>
              </div>
            </div>

            {loading ? (
              <Loading />
            ) : (
              <div className=" h-auto md:h-120 md:overflow-y-scroll">
                {recentPost.map((eachPost) => {
                  return (
                    <FeedPostCard eachPost={eachPost} key={eachPost._id} />
                  );
                })}
              </div>
            )}
          </div>
          <div className="users-suggestion hidden p-2 h-min md:block">
            <div className="admin-short-info p-2   border-b-0 rounded-3xl mb-2 bg-light-bg">
              <div className="flex items-center">
                <img
                  src={
                    "https://res.cloudinary.com/dhqxln7zi/image/upload/v1652266218/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws_o3oigd.jpg"
                  }
                  alt="admin"
                  className="post-avatar"
                />
                <div className="ml-2">
                  <h1 className="post-user-name leading-none">
                  <Link to="/profile" className="font-bold"> {userInfo?.firstName} {userInfo?.lastName} </Link>
                  </h1>
                  <p className="text-[#909090]">{userInfo?.username}</p>
                </div>
              </div>
            </div>

            <div className="suggestion-people-wrapper p-4 bg-light-bg  rounded-3xl">
              <h1 className=" font-bold">Suggestions for You</h1>

              <ul className="suggestions-people-list h-96 overflow-y-scroll">
                {filteredUser?.map((each) => (
                  <Users eachUser={each} key={each._id} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <PostModal />
    </>
  );
};

export { Feeds };
