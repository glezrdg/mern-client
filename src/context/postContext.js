import { useState, createContext, useContext, useEffect } from "react";
import { toast } from "react-hot-toast";

import {
  getPostsRequests,
  createPostRequest,
  deletePostRequest,
  getPostRequest,
  updatePostRequest,
} from "../api/posts";

const postsContext = createContext();

export const usePosts = () => {
  const context = useContext(postsContext);
  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const res = await getPostsRequests();
      setPosts(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Realmente, hay un fallo.");
    }
  };
  const createPost = async (post) => {
    try {
      const res = await createPostRequest(post);
      setPosts([...posts, res.data]);
      toast.success("Post added successfully", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
          fontWeight: "bold",
        },
      });
    } catch (error) {
      console.error(error);
      toast.error("Realmente, hay un fallo.", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
          fontWeight: "bold",
        },
      });
    }
  };

  const deletePost = async (id) => {
    try {
      const res = await deletePostRequest(id);
      if (res.status === 204) {
        setPosts(posts?.filter((post) => post._id !== id));
        toast.success("Post deleted successfully", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
            fontWeight: "bold",
          },
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Realmente, hay un fallo.", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
          fontWeight: "bold",
        },
      });
    }
  };

  const getPost = async (id) => {
    try {
      const res = await getPostRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
      toast.error("Realmente, hay un fallo.", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
          fontWeight: "bold",
        },
      });
    }
  };

  const updatePost = async (id, post) => {
    try {
      const res = await updatePostRequest(id, post);
      setPosts(posts?.map((post) => (post._id === id ? res.data : post)));
      toast.success("Post updated successfully", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
          fontWeight: "bold",
        },
      });
    } catch (error) {
      console.error(error);
      toast.error("Realmente, hay un fallo.", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
          fontWeight: "bold",
        },
      });
    }
  };

  return (
    <postsContext.Provider
      value={{
        posts,
        getPosts,
        createPost,
        deletePost,
        getPost,
        updatePost,
      }}
    >
      {children}
    </postsContext.Provider>
  );
};
