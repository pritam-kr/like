import React, {useState} from "react";
import * as FaIcons from "react-icons/fa";
import {useModalContext} from "../../Context/ModalContext"
import { usePost } from "../../Hooks";
import "./PostModal.css"
 
 

const PostModal = () => {
  const {postModal, setPostModal} = useModalContext()
  const [postData, setPostData] = useState({ content: ""})
  
  const {addNewPost} = usePost()


  const postHandler = (event) => {
    event.preventDefault()
     addNewPost(postData)

     setPostModal(false)
  }

  
  return (
    postModal && <div className= "post-form-modal fixed top-0 left-0 right-0 bottom-0 flex  justify-center items-start w-full">
    <div className="post-form-wrapper mx-3">
      <p className="p-6 border-b-2">
        <FaIcons.FaTimes className="icons" onClick={() => setPostModal(false)}/>
      </p>
       
      <form className="post-form p-2">
        <input
          className="input mt-2"
          type="text"
          placeholder="Write Caption" onChange={(event) => setPostData((prev) =>  ({...prev, caption: event.target.value}))}
        />
        <textarea
          className="input mt-2"
          type="text"
          placeholder="What's Happening..." onChange={(event) => setPostData((prev) =>  ({...prev, content: event.target.value}))}
        ></textarea>
        <div className="flex gap-2 mt-2 mb-2">
          <input
            type="file"
            className="input file-upload w-3/4 cursor-pointer" 
          />
          <button className="btn w-3/4 text-caption" onClick={(event) => postHandler(event)}> Post </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export { PostModal };
