import moment from "moment";
import DeleteComment from "./DeleteComment";

export default function SingleArticleComments({
  comment_id,
  votes,
  created_at,
  author,
  body,
}) {
  const date = moment(created_at).format("MMM Do YY");

  const user = "jessjelly";

  return (
    <article id={comment_id}>
      <div id="commentsInfo">
        <p>{body}</p>
        <div className="infoHolderPlus">
          <p>Author: {author}</p>
          <p>Submitted: {date}</p>
          {author === user && <DeleteComment comment_id={comment_id} />}
        </div>
      </div>
    </article>
  );
}
