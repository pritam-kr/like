import { useState, useEffect, createContext, useContext } from "react";
import { useLocation } from "react-router-dom";

const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const location = useLocation();
  const [postModal, setPostModal] = useState(false);
  const [followerModal, setFollowerModal] = useState(false);
  const [followingModal, setFollowingModal] = useState(false);
  const [editPostModal, setEditPostModal] = useState(false)

  useEffect(() => {
    setPostModal(false);
    setFollowerModal(false);
    setFollowingModal(false);
    setEditPostModal(false)
  }, [location]);

  return (
    <ModalContext.Provider
      value={{
        postModal,
        setPostModal,
        setFollowerModal,
        followerModal,
        followingModal,
        setFollowingModal,
        editPostModal, 
        setEditPostModal
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModalContext = () => useContext(ModalContext);

export { ModalContextProvider, useModalContext };
