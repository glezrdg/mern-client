import axios from "axios";

export const getPostsRequests = async () =>
  await axios.get("https://mern-stack-backend-g56q.onrender.com/");

export const createPostRequest = async (post) => {
  const form = new FormData();

  for (let key in post) {
    form.append(key, post[key]);
  }

  return await axios.post(
    "https://mern-stack-backend-g56q.onrender.com/",
    form,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

export const deletePostRequest = async (_id) =>
  await axios.delete("https://mern-stack-backend-g56q.onrender.com/" + _id);

export const getPostRequest = async (_id) =>
  await axios.get("https://mern-stack-backend-g56q.onrender.com/" + _id);

export const updatePostRequest = async (_id, newFields) =>
  await axios.put(
    `https://mern-stack-backend-g56q.onrender.com/${_id}`,
    newFields
  );
