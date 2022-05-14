import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Topbar, PostModal, Loading,Users, BookmarkCard} from "../../Components//Index"
import { getBookmarkPost } from '../../Store/Slice/BookmarkSlice'

 


const Bookmark = () => {

  const state = useSelector((state) => state);
  const dispatch =  useDispatch()

   
  //User data to follow
  const {auth: { token, userInfo},post: { allPost, loading },user: { users }, bookmark: {bookmarks}} = state;

 useEffect(() => {
  dispatch(getBookmarkPost({token: token}))
 }, [token, dispatch])


//Getting bookmark posts by filtering from all post 
const bookmarkPost = allPost?.filter((eachPost) =>  bookmarks?.includes(eachPost._id))


  // filter user on the basis of user name for follow/ unfollow
  const filteredUser = users.filter(
    (eachUser) => eachUser.username !== userInfo.username
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
                <>{bookmarks ? <h1 className='text-white-color p-2  '>There is no post in the Bookmark</h1> : <div className=" h-auto md:h-128 md:overflow-y-scroll">
                {bookmarkPost?.map((eachPost) => <BookmarkCard key={eachPost._id} eachPost ={eachPost}/>)}
              </div>} 
              </>
            )}
          </div>
          <div className="users-suggestion hidden p-2 h-min md:block">
            <div className="admin-short-info p-2   border-b-0 rounded-3xl mb-2 bg-light-bg">
              <div className="flex items-center">
                <img
                  src={
                    userInfo?.avatar === ""
                      ? "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"
                      : userInfo?.avatar
                  }
                  alt="admin"
                  className="post-avatar"
                />
                <div className="ml-2">
                  <h1 className="post-user-name leading-none">
                    {userInfo?.firstName} {userInfo?.lastName}
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
  )
}

export { Bookmark}