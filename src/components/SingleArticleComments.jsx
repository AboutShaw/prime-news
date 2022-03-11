import moment from "moment";

export default function SingleArticleComments({
  comment_id,
  votes,
  created_at,
  author,
  body,
}) {
  const date = moment(created_at).format("MMM Do YY");

  return (
    <article id={comment_id}>
      <div id="commentsInfo">
        <p>{body}</p>
        <div className="infoHolderPlus">
          <p>Author: {author}</p>
          <p>Submitted: {date}</p>
        </div>
      </div>
    </article>
  );
}
