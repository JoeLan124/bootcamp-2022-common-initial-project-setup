import Post from "components/Post";

export function Posts({ posts }) {
  if (!posts) return null;

  return (
    <>
      {post.image && (
        <img
          className="flex-shrink text-base font-normal color-primary width-auto mt-2"
          src={post.image}
        />
      )}
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </>
  );
}
