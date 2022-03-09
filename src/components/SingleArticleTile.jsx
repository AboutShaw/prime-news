export default function SingleArticleTile({ article_id, title, topic, author, body, created_at, votes, comment_count }) {
    
const topicFormat = topic.toUpperCase()
  

    return (
      <article id={article_id}>
        <h3>{title}</h3>
          <div id="articleHolder">
            <p>Topic: {topicFormat}</p>
            <p>Author: {author}</p>
          </div>
        <p id="singleBody">{body}</p>
      </article>
    )

}