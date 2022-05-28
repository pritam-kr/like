import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../Store/Slice/UserSlice";

const ProfileEdit = ({ updateData, setUpdateData, setEditProfileModal, currentUser }) => {
  const [newUrl, setNewUrl] = useState("");
   

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const {
    auth: { token, },
  } = state;

  const updateHandler = (event) => {
    event.preventDefault();

    if (newUrl) {
      const file = newUrl;
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.readyState === 2) {
          dispatch(
            updateUser({
              bio: updateData.bio,
              website: updateData.website,
              avatar: reader.result,
              token: token,
            })
          );
        }
      };
    } else {
      dispatch(
        updateUser({
          bio: updateData.bio,
          website: updateData.website,
          token: token,
        })
      );
    }

    setEditProfileModal(false)
  };

  return (
    <>
      <div className="post-form-modal fixed top-0 left-0 right-0 bottom-0 flex  justify-center items-start w-full ">
        <div className="post-form-wrapper mx-3 rounded-3xl">
        <div className="p-6 border-b-2 flex justify-between">
          <span>
            <FaIcons.FaTimes
              className="icons"
              onClick={() => setEditProfileModal(false)}
            />
          </span>

          <h1 className="text-xl text-[#2a2929] font-bold">Profile Edit</h1>
        </div>

          <form className="post-form p-2">

          <img className="w-40 h-40 mx-auto  rounded-full object-cover" src={newUrl ? URL.createObjectURL(newUrl) : currentUser.avatar} alt=""/>

            <div className="flex items-center justify-center py-4">
              <label className="cursor-pointer">

                <FaIcons.FaUpload className="icons mx-auto" />
                <input
                  type="file"
                  className="input hidden"
                  placeholder="Update Bio"
                  onChange={(event) => setNewUrl(event.target.files[0])}
                />
                <p>Upload Profile</p>
              </label>
            </div>

            <input
              value={updateData.bio}
              className="input mt-2 text-xl"
              type="text"
              placeholder="Update Bio"
              onChange={(event) =>
                setUpdateData((prev) => ({
                  ...prev,
                  bio: event.target.value,
                }))
              }
            />
            <input
              value={updateData.website}
              className="input mt-2 text-xl border-0"
              type="text"
              placeholder="Update Website"
              onChange={(event) =>
                setUpdateData((prev) => ({
                  ...prev,
                  website: event.target.value,
                }))
              }
            />
            <div className="flex gap-2 mt-2 mb-2">
              <button
                className="btn w-full p-2 rounded-full text-caption"
                onClick={(event) => updateHandler(event)}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export { ProfileEdit };
