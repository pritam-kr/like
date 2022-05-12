import axios from "axios";
export const followUserService = (followUserId, token) => {
    return axios.post(
      `/api/users/follow/${followUserId}`,
      {},
      {
        headers: { authorization: token },
      }
    );
  };
  

  export const unFollowUserService = (unFollowUserId, token) => {
    return axios.post(
      `/api/users/unfollow/${unFollowUserId}`,
      {},
      {
        headers: { authorization: token },
      }
    );
  };
  