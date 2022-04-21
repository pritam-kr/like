import React from "react";
import "./Feed.css";
import { Topbar, FeedPostCard,PostModal } from "../../Components/Index";
import { useSelector } from "react-redux";
 

const Feeds = () => {

  const state = useSelector((state) => state);
  const { auth } = state;
  const token = auth.token;
  const userProfile = auth.userInfo


  return (
    <>
      <Topbar />
      <div className="parent-container feed-container ">
        <div className="feed-wrapper  max-w-screen-lg mx-auto grid gap-2 grid-cols-1 md:grid-cols-feed-col px-2 my-2">
          <div className="feed-post p-2">
            <FeedPostCard />
            <FeedPostCard />
            <FeedPostCard />
            <FeedPostCard />
          </div>
          <div className="users-suggestion hidden p-2 h-min md:block">
            <div className="admin-short-info p-2 border-2 border-b-0">
              <div className="flex items-center">
                <img
                  src={userProfile?.avatar === "" ? "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png" : userProfile?.avatar}
                  alt="admin"
                  className="post-avatar"
                />
                <div className="ml-2">
                  <h1 className="post-user-name leading-none">{userProfile?.firstName} {userProfile?.lastName}</h1>
                  <p>{userProfile?.username}</p>
                </div>
              </div>
            </div>

            <div className="suggestion-people-wrapper p-2 bg-[#fff]  border-2">
              <h1 className=" font-bold">Suggestions for You</h1>

              <ul className="suggestions-people-list">
                <li className="my-2  py-2">
                  <div className="admin-short-info border-b-0">
                    <div className="flex items-center">
                      <img
                        src="https://avatars.githubusercontent.com/u/84632214?v=4"
                        alt="admin"
                        className="post-avatar"
                      />
                      <div className="ml-2">
                        <h1 className="post-user-name leading-none ">
                          Pritam Kumar
                        </h1>
                        <p>@pritamkr</p>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="my-2  py-2">
                  <div className="admin-short-info border-b-0">
                    <div className="flex items-center">
                      <img
                        src="https://avatars.githubusercontent.com/u/84632214?v=4"
                        alt="admin"
                        className="post-avatar"
                      />
                      <div className="ml-2">
                        <h1 className="post-user-name leading-none">
                          Pritam Kumar
                        </h1>
                        <p>@pritamkr</p>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="my-2  py-2">
                  <div className="admin-short-info border-b-0">
                    <div className="flex items-center">
                      <img
                        src="https://avatars.githubusercontent.com/u/84632214?v=4"
                        alt="admin"
                        className="post-avatar"
                      />
                      <div className="ml-2">
                        <h1 className="post-user-name leading-none">
                          Pritam Kumar
                        </h1>
                        <p>@pritamkr</p>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="my-2  py-2">
                  <div className="admin-short-info border-b-0">
                    <div className="flex items-center">
                      <img
                        src="https://avatars.githubusercontent.com/u/84632214?v=4"
                        alt="admin"
                        className="post-avatar"
                      />
                      <div className="ml-2">
                        <h1 className="post-user-name leading-none">
                          Pritam Kumar
                        </h1>
                        <p>@pritamkr</p>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="my-2  py-2">
                  <div className="admin-short-info border-b-0">
                    <div className="flex items-center">
                      <img
                        src="https://avatars.githubusercontent.com/u/84632214?v=4"
                        alt="admin"
                        className="post-avatar"
                      />
                      <div className="ml-2">
                        <h1 className="post-user-name leading-none">
                          Pritam Kumar
                        </h1>
                        <p>@pritamkr</p>
                      </div>
                    </div>
                  </div>
                </li>
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
