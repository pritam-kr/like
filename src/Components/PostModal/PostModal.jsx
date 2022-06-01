import React from "react";
import toast from "react-hot-toast";
import * as FaIcons from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useModalContext } from "../../Context/ModalContext";
import { usePost } from "../../Hooks";
import { createNewPost } from "../../Store/Slice/PostSlice";
import "./PostModal.css";

const PostModal = () => {
  const {
    auth: { token },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { postModal, setPostModal } = useModalContext();

  const {postData, setPostData} = usePost()


  const postHandler = (event) => {
    event.preventDefault();
    if (postData.content && postData.caption) {
      setPostModal(false);
      dispatch(createNewPost({ postData: postData, token: token }));
      setPostData({ content: "", caption: "" });
    }else{
      toast.error("Input Field can not be empty.", {position: "top-right"})
    }
  };



  return (
    postModal && (
      <div className="post-form-modal fixed top-0 left-0 right-0 bottom-0 flex  justify-center items-start w-full ">
        <div className="post-form-wrapper mx-3 rounded-3xl">
          <div className="p-6 border-b-2 flex justify-between">
            <span><FaIcons.FaTimes
              className="icons"
              onClick={() => setPostModal(false)}
            /></span>

            <h1 className="text-xl text-[#2a2929] font-bold">Create a new Post</h1>
          </div>

          <form className="post-form p-2">
            <input
              value={postData.caption}
              className="input mt-2 text-xl"
              type="text" autoFocus
              placeholder="Write Caption"
              onChange={(event) =>
                setPostData((prev) => ({
                  ...prev,
                  caption: event.target.value,
                }))
              }
            />
            <textarea
              value={postData.content}
              className="input mt-2 text-xl border-0"
              type="text" autoFocus
              placeholder="What's Happening..."
              onChange={(event) =>
                setPostData((prev) => ({
                  ...prev,
                  content: event.target.value,
                }))
              }
            ></textarea>
            <div className="flex gap-2 mt-2 mb-2">
              <button
                className="btn w-full p-2 rounded-full text-caption"
                onClick={(event) => postHandler(event)}
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export { PostModal };
