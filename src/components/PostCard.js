import toast from "react-hot-toast";
import { usePosts } from "../context/postContext";
import { useNavigate } from "react-router-dom";

export function PostCard({ post }) {
  const { deletePost } = usePosts();
  const navigate = useNavigate();

  const handleDelete = (_id) => {
    toast(
      (t) => (
        <div className="text-white w-full  flex flex-col justify-evenly items-center text-center text-base   ">
          <p>
            Do you want to delete the item? <strong>{_id}</strong>
          </p>
          <div className="w-full flex justify-around items-center">
            <button
              className="bg-red-500 hover:bg-red-400 px-3 py-2 text-sm mx-2"
              onClick={(t) => {
                deletePost(_id);
                toast.dismiss(t.id);
              }}
            >
              Delete
            </button>
            <button
              className="bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white text-sm rounded-sm mx-2"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        style: {
          background: "#202020",
          width: "250px",
          height: "150px",
          display: "flex",
          flex: "column",
          justifyContent: "space-between",
          alignItems: "space-between",
        },
      }
    );
  };

  return (
    <div
      className="bg-zinc-800 text-white rounded-sm shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer "
      onClick={() => navigate(`/posts/${post._id}`)}
    >
      <div className=" ">
        <div className="flex justify-between  px-4 py-7  ">
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className=" break-all text-sm "> {post.description}</p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(post._id);
            }}
            className="bg-red-600 hover:bg-red-200 hover:text-red-600  text-sm  px-2  w-1/4 rounded-sm shadow-sm shadow-black  ml-12 font-semibold h-10"
          >
            Delete
          </button>
        </div>
        <div className=" obje">
          {post.image && (
            <img
              src={post.image.url}
              alt="imagen "
              className="w-full  h-72 object-cover "
            />
          )}
        </div>
      </div>
    </div>
  );
}
