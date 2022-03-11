import moment from "moment";
import { Link } from "react-router-dom";
import { updateVotes } from "../api";
export default function ArticleCard({
  article_id,
  title,
  topic,
  author,
  created_at,
  votes,
  comment_count,
  setVoteUp,
}) {
  const topicFormat = topic.toUpperCase();
  const date = moment(created_at).format("MMM Do YY");

  return (
    <article id={article_id}>
      <Link to={`/articles/${article_id}`}>{title}</Link>
      <div className="infoHolder">
        <p>Topic: {topicFormat}</p>
        <p>Author: {author}</p>
        <p>Submitted: {date}</p>
        <p>Comments: {comment_count}</p>
        <p>
          Votes:
          <button onClick={() => setVoteUp(1)}>↟1↟</button>
          {votes}
          <button onClick={() => setVoteUp(-1)}>↡1↡</button>
        </p>
      </div>
    </article>
  );
}
