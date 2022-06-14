import { useRouter } from "next/router";
import { useState } from "react";

export default function NewComment({ post }) {
  const router = useRouter();
  const [content, setContent] = useState("");

  return (
    <form
      className="flex flex-col mt-10 pt-3 px-20 pb-2 "
      onSubmit={async (e) => {
        e.preventDefault();
        if (!content) {
          alert("Enter some text in the comment");
          return;
        }
        const res = await fetch("/api/comment", {
          body: JSON.stringify({
            post: post.id,
            content: content,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });
        router.reload(window.location.pathname);
      }}
    >
      <textarea
        className="border border-gray-700 p-4 w-full text-lg font-medium bg-blue-500 outline-none color-primary resize-none rounded-md shadow-md"
        rows={1}
        cols={50}
        placeholder="Add a comment"
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="mt-5">
        <button className="border border-gray-700 px-8 py-2 mt-0 mr-8 font-bold rounded-md shadow-md bg-blue-500 ">
          Comment
        </button>
      </div>
    </form>
  );
}
