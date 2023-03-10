import { usePosts } from "../context/postContext";
import { VscEmptyWindow } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { PostCard } from "../components/PostCard";

export function HomePage() {
  const { posts } = usePosts();

  if (posts?.length === 0)
    return (
      <div className="flex flex-col justify-center items-center">
        <VscEmptyWindow className="w-36 h-48 text-white   " />
        <h1 className="text-xl">There are no posts</h1>
        <Link
          to="/new"
          className="text-sm font-bold bg-indigo-600 rounded-sm shadow-sm shadow-black px-4 py-2 mt-4"
        >
          Create New Post
        </Link>
      </div>
    );

  return (
    <div className="flex flex-col  overflow-auto  object-contain ">
      <header className="flex  justify-between py-3 px-4  sm:items-center sm:justify-between  sm:flex-col  sm:h-28  md:items-center md:h-28 md:flex-row     ">
        <h1 className="text-xl text-gray-300 font-bold">
          Posts({posts?.length})
        </h1>
        <Link
          className="font-bold sm:w-4/5  md:w-1/3 lg:w-1/4 xl:w-1/5  w-1/6 mb-10 bg-lime-600 px-4 py-2 shadow-sm shadow-black text-white rounded-sm sm:m-0 mr-4"
          to="/new"
        >
          Create new post
        </Link>
      </header>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 max-h-[80vh]  p-7 overflow-scroll ">
        {posts?.map((post) => (
          <PostCard post={post} key={post._id} className="w-full h-full" />
        ))}
      </div>
    </div>
  );
}
