import Post from "components/Post";

export function Posts({ posts }) {
  if (!posts) return null;

  return (
    <>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </>
  );
}
