import moment from "moment";
import { Link } from "react-router-dom";
import { useState } from "react";
import Voter from "./Voter";
export default function ArticleCard({
  article_id,
  title,
  topic,
  author,
  created_at,
  votes,
  comment_count,
}) {
  const topicFormat = topic.toUpperCase();
  const date = moment(created_at).format("MMM Do YY");
  const [voteUp, setVoteUp] = useState(0);

  return (
    <article id={article_id}>
      <Link to={`/articles/${article_id}`}>{title}</Link>
      <div className="infoHolder">
        <p>Topic: {topicFormat}</p>
        <p>Author: {author}</p>
        <p>Submitted: {date}</p>
        <p>Comments: {comment_count}</p>
        <Voter
          voteUp={voteUp}
          setVoteUp={setVoteUp}
          article_id={article_id}
          votes={votes}
        />
      </div>
    </article>
  );
}
