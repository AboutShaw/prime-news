import Voter from "./Voter";
import moment from "moment";
import { useState } from "react";

export default function SingleArticleTile({
  article_id,
  title,
  topic,
  author,
  body,
  created_at,
  votes,
}) {
  const topicFormat = topic.toUpperCase();
  const date = moment(created_at).format("MMM Do YY");
  const [voteUp, setVoteUp] = useState(0);

  return (
    <article id={article_id}>
      <h3>{title}</h3>
      <div id="articleHolder">
        <p>Topic: {topicFormat}</p>
        <p>Author: {author}</p>
        <p>Submitted: {date}</p>
        <Voter
          voteUp={voteUp}
          setVoteUp={setVoteUp}
          article_id={article_id}
          votes={votes}
        />
      </div>
      <p id="singleBody">{body}</p>
    </article>
  );
}
