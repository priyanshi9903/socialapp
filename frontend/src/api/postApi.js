import axios from "axios";

const API = "http://localhost:5000/api/posts";

export const getPosts = () => {
  return axios.get(`${API}/feed`);
};

export const createPost = (postData)=>{
    return axios.post(
        `${API}/create`,
        postData,
        {
            headers:{
                "Content-Type":"multipart/form-data"
            }
        }
    );
};

export const likePost = (id) => {
  return axios.put(`${API}/like/${id}`, {
    username: localStorage.getItem("username")
  });
};

export const commentPost = (id, username, comment) => {
  return axios.put(`${API}/comment/${id}`, {
    username,
    comment
  });
};
