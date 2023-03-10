import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { usePosts } from "../context/postContext";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function PostForm() {
  const { createPost, getPost, updatePost } = usePosts();
  const navigate = useNavigate();
  const params = useParams();
  const [post, setPost] = useState({
    title: "",
    description: "",
    image: null,
  });

  useEffect(() => {
    (async () => {
      if (params.id) {
        const post = await getPost(params.id);
        setPost(post);
        console.log(post);
      }
    })();
  }, [params.id]);

  return (
    <div className="bg-zinc-700 p-7 flex flex-col justify-start sm:w-full md:w-1/2 lg:w-1/3 shadow-md shadow-black rounded-sm">
      <header className="flex justify-between pb-4">
        <h3 className=" font-bold  text-xl  ">New Post</h3>
        <Link
          to="/"
          className="bg-red-600 hover:bg-red-200 hover:text-red-600  text-sm  px-2  w-1/5 rounded-sm shadow-sm shadow-black font-semibold h-10 justify-center items-center flex"
        >
          Go Back
        </Link>
      </header>
      <Formik
        className=""
        initialValues={post}
        validationSchema={Yup.object({
          title: Yup.string().required("title is required"),
          description: Yup.string().required("Description is required"),
        })}
        onSubmit={async (values, actions) => {
          if (params.id) {
            await updatePost(params.id, values);
          } else {
            await createPost(values);
          }
          actions.setSubmitting(false);
          navigate("/");
        }}
        enableReinitialize
      >
        {({ handleSubmit, setFieldValue, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="min-h-[100%] w-full flex flex-col justify-center items-start "
          >
            <label
              htmlFor="title"
              className="text-sm block font-bold text-gray-300 "
            >
              Title
            </label>
            <Field
              name="title"
              placeholder="title"
              className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full mb-4"
            />
            <ErrorMessage
              component="p"
              className="text-red-400 text-sm"
              name="title"
            />
            <label
              htmlFor="description"
              className="text-sm block font-bold text-gray-300 "
            >
              Description
            </label>
            <Field
              name="description"
              className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full mb-4"
              placeholder="description"
              component="textarea"
              rows={3}
            />
            <ErrorMessage
              component="p"
              name="description"
              className="text-red-400 text-sm"
            />
            <label
              htmlFor="name"
              className="text-sm block font-bold text-gray-300 "
            >
              Image
            </label>
            <input
              className="mb-4 px-3 py-2 focus:outline-none rounded-md bg-gray-600 text-white w-full"
              type="file"
              name="image"
              onChange={(e) => setFieldValue("image", e.target.files[0])}
            />
            <button
              className="bg-indigo-700 hover:bg-indigo-800 text-sm  px-2  w-1/5 rounded-sm shadow-sm shadow-black  font-semibold h-10 justify-center items-center flex  "
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <AiOutlineLoading3Quarters className="animate-spin h-5 w-5" />
              ) : (
                "Save"
              )}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
