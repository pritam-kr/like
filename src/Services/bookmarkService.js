import axios from "axios";

 
export const getBookmarkService = (token) => {
    return axios.get(`/api/users/bookmark`, {
      headers: { authorization: token },
    });
  };



  export const addToBookmarkService = (postId, token) => {

    return axios.post(
      `/api/users/bookmark/${postId}`,
      {},
      {
        headers: { authorization: token },
      }
    );
  
  }

  export const removeBookmarkService = (postId, token) => {

    return axios.post(
      `/api/users/remove-bookmark/${postId}`,
      {},
      {
        headers: { authorization: token },
      }
    );
  
  }