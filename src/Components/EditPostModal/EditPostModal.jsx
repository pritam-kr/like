import React from "react";
import * as FaIcons from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useModalContext } from "../../Context/ModalContext";
import { editPost } from "../../Store/Slice/PostSlice";


const EditPostModal = ({setPostEditData, editPostData}) => {
    const state = useSelector((state) => state);
    const { auth:  {token }} = state
    const dispatch = useDispatch()

    const {setEditPostModal} = useModalContext()
    
    const editPostHandler = (event) => {
        event.preventDefault()
        dispatch(editPost({editPostData: editPostData, token: token}))
        setEditPostModal(false)
    }

  return (
    <div className="post-form-modal fixed top-0 left-0 right-0 bottom-0 flex  justify-center items-start w-full ">
      <div className="post-form-wrapper mx-3 rounded-3xl">
        <p className="p-6 border-b-2">
          <FaIcons.FaTimes
            className="icons"
             onClick={() => setEditPostModal(false)}
          />
        </p>

        <form className="post-form p-2">
          <input
             value={editPostData.caption}
            className="input mt-2 text-xl"
            type="text"
            placeholder="Write Caption"
              onChange={(event) =>
                setPostEditData((prev) => ({
                  ...prev,
                  caption: event.target.value,
                }))
              }
          />
          <textarea
            value={editPostData.content}
            className="input mt-2 text-xl border-0"
            type="text"
            placeholder="What's Happening..."
              onChange={(event) =>
                setPostEditData((prev) => ({
                  ...prev,
                  content: event.target.value,
                }))
              }
          ></textarea>
          <div className="flex gap-2 mt-2 mb-2">
            <button
              className="btn w-full p-2 rounded-full text-caption"
              onClick={(event) => editPostHandler(event)}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { EditPostModal };
