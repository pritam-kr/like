import React, { useState } from "react";
import "./Feed.css";
import {
  Topbar,
  FeedPostCard,
  PostModal,
  Users,
  Loading,
} from "../../Components/Index";
import { useSelector } from "react-redux";
import { usePost } from "../../Hooks/index";
import * as BiIcons from "react-icons/bi";

const Feeds = () => {
  const state = useSelector((state) => state);

  //User data to follow
  const {
    auth: { token, userInfo },
    post: { allPost, loading },
    user: { users },
  } = state;

  const userProfile = userInfo;

  // filter user on the basis of user name for follow/ unfollow
  const filteredUser = users.filter(
    (eachUser) => eachUser.username !== userProfile.username
  );

  //Filter post with
  const recentPost = [...allPost].sort((a, b) => b.id - a.id);
  //Trending post which post has more like
  const trendingPost = [...allPost].sort(
    (a, b) => b.likes.likeCount - a.likes.likeCount
  );

  const sortByDate = [...allPost].sort(
    (a, b) => new Date(b.createdAt).getDate() - new Date(a.createdAt).getDate()
  );

  const [filterPost, setFilterPost] = useState(recentPost);

  const currentUser = users.find((each) => each.username === userInfo.username);

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
                  onClick={() => setFilterPost(trendingPost)}
                >
                  Trending
                </button>
                <button
                  className="mr-2 flex items-center icons text-sm"
                  onClick={() => setFilterPost(sortByDate)}
                >
                  Sort By Date
                </button>
                <button
                  className="mr-2 flex items-center icons text-sm"
                  onClick={() => setFilterPost(recentPost)}
                >
                  Recent
                </button>
              </div>
            </div>

            {loading ? (
              <Loading />
            ) : (
              <div className=" h-auto md:h-128 md:overflow-y-scroll">
                {[...allPost].reverse().map((eachPost) => {
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
                    userProfile?.avatar === ""
                      ? "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"
                      : userProfile?.avatar
                  }
                  alt="admin"
                  className="post-avatar"
                />
                <div className="ml-2">
                  <h1 className="post-user-name leading-none">
                    {userProfile?.firstName} {userProfile?.lastName}
                  </h1>
                  <p className="text-[#909090]">{userProfile?.username}</p>
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
