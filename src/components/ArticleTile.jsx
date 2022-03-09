import moment from "moment";
import { Link } from "react-router-dom";
export default function ArticleCard({ article_id, title, topic, author, body, created_at, votes, comment_count }) {
    
const topicFormat = topic.toUpperCase()
const date = moment(created_at).format("MMM Do YY")

    return (
      <article id={article_id}>
        <Link to={`/articles/${article_id}`}>{title}</Link>
        <div className="infoHolder">
          <p>Topic: {topicFormat}</p>
          <p>Author: {author}</p>
          <p>Votes: {votes}</p>
          <p>Comments: {comment_count}</p>
          <p>Submitted: {date}</p>
        </div>
      </article>
    );
  }