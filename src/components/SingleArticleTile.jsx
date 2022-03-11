export default function SingleArticleTile({
  article_id,
  title,
  topic,
  author,
  body,
  created_at,
  votes,
  comment_count,
  setVoteUp,
}) {
  const topicFormat = topic.toUpperCase();

  return (
    <article id={article_id}>
      <h3>{title}</h3>
      <div id="articleHolder">
        <p>Topic: {topicFormat}</p>
        <p>Author: {author}</p>
        <p>
          Votes:
          <button onclick={() => setVoteUp("1")}>↟1↟</button>
          {votes}
          <button onclick={() => setVoteUp("-1")}>↡1↡</button>
        </p>
      </div>
      <p id="singleBody">{body}</p>
    </article>
  );
}
