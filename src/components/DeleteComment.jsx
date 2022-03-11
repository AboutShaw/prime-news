import { deleteComment } from "../api";

export default function DeleteComment({ comment_id }) {
  console.log(comment_id, "deleter");

  const handleDel = (comment_id) => {
    deleteComment(comment_id);
  };

  return (
    <div>
      <button onClick={() => handleDel(comment_id)}>Delete Comment</button>
    </div>
  );
}
