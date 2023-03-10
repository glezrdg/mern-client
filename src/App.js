import { PostForm, NotFoundPage, HomePage } from "./pages/";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PostProvider } from "./context/postContext";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/new", element: <PostForm /> },
  { path: "/posts/:id", element: <PostForm /> },
  { path: "/*", element: <NotFoundPage /> },
]);

function App() {
  return (
    <div className="min-h-screen bg-zinc-800 text-white flex ">
      <div className="container m-auto grid place-items-center  p-2 ">
        <PostProvider>
          <RouterProvider router={router} />
          <Toaster />
        </PostProvider>
      </div>
    </div>
  );
}

export default App;
