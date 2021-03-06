import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
 
import {
  Topbar,
  PostModal,
  Loading,
  Users,
  BookmarkCard,
  LoggedUser,
} from "../../Components//Index";
import { getBookmarkPost } from "../../Store/Slice/BookmarkSlice";

const Bookmark = () => {

  useEffect(() => {

    document.title = "Bookmark"

  }, [])

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const {
    auth: { token, userInfo },
    post: { allPost, loading },
    user: { users },
    bookmark: { bookmarks },
  } = state;

  useEffect(() => {
    dispatch(getBookmarkPost({ token: token }));
  }, [token, dispatch]);

  //Getting bookmark posts by filtering from all post
  const bookmarkPost = bookmarks?.map((eachId) =>
    allPost?.find((eachPost) => eachPost._id === eachId)
  );

  // filter user on the basis of user name for follow/ unfollow

  const currentUser = users?.find(
    (each) => each.username === userInfo.username
  );

  const currentUserFollowing = currentUser?.following;

  const allSuggestionUser = [...users].filter(
    (eachUser) =>
      !currentUserFollowing.find(
        (each) => eachUser.username === each.username
      ) && eachUser.username !== currentUser.username
  );

  return (
    <>
      <Topbar />
      <div className="parent-container feed-container ">
        <div className="feed-wrapper  max-w-screen-lg mx-auto grid gap-2 grid-cols-1 md:grid-cols-feed-col px-2 my-2 ">
          <div className="feed-post p-2">
            <div className=" flex justify-between items-center text-white-color p-2">
              <h1 className="text-xl">Bookmark</h1>
            </div>

            {loading ? (
              <Loading />
            ) : (
              <>
                {bookmarks.length === 0 ? (
                  <h1 className="text-white-color p-2  ">
                    There is no post in the Bookmark
                  </h1>
                ) : (
                  <div className=" h-auto md:h-128  ">
                    {[...bookmarkPost]?.reverse()?.map((eachPost) => (
                      <BookmarkCard key={eachPost._id} eachPost={eachPost} />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
          <div className="users-suggestion hidden p-2 h-min md:block">
            <LoggedUser />
            <div className="suggestion-people-wrapper p-4 bg-light-bg  rounded-3xl">
              <h1 className=" font-bold text-center">Suggestions for You</h1>

              <ul className="suggestions-people-list h-96 overflow-y-scroll">
              {allSuggestionUser.length === 0 ? <h1 className="text-lg text-center">There is no suggestion for Follow. </h1> : (allSuggestionUser?.map((each) => (
                  <Users eachUser={each} key={each._id} />
                )))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <PostModal />
    </>
  );
};

export { Bookmark };
