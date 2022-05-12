import axios from "axios";

export const getPosts = () => {
  return axios.get("/api/posts");
};

export const createPostService = (postData, token) => {
  return axios.post(
    `/api/posts`,
    { postData: postData },
    { headers: { authorization: token } }
  );
};

export const getUserPostService = (username) => {
  return axios.get(`/api/posts/user/${username}`);
};


export const editPostService = (id, post, token) => {
  return axios.post(
    `/api/posts/edit/${id}`,
    { postData: post },
    {
      headers: { authorization: token },
    }
  );
};