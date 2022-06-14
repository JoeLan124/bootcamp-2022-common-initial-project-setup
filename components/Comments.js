import timeago from "lib/timeago";

const Comment = ({ comment }) => {
  return (
    <div className=" mt-6 border border-3 border-blue-400 mx-20 bg-blue-200">
      <p>
        {comment.author.name} {timeago.format(new Date(comment.createdAt))}
      </p>
      <p>{comment.content}</p>
    </div>
  );
};

export default function Comments({ comments }) {
  if (!comments) return null;

  return (
    <>
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </>
  );
}
