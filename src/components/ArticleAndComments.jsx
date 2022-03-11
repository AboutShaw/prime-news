import { useState, useEffect } from "react";
import SingleArticleTile from "./SingleArticleTile";
import { getArticle, getComments, updateVotes } from "../api";
import SingleArticleComments from "./SingleArticleComments";

export default function ArticleAndComments({ article_id }) {
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState({});
  const [voteUp, setVoteUp] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getArticle(article_id).then((article) => {
      setArticle(article);
      setIsLoading(false);
    });
    getComments(article_id).then((comments) => {
      setComments(comments);
    });
    updateVotes(article_id, voteUp);
  }, [article_id, voteUp]);

  if (isLoading) return <p>loading..</p>;
  return (
    <section className="articleTile">
      <SingleArticleTile
        key={article.article_id}
        article_id={article.article_id}
        title={article.title}
        topic={article.topic}
        author={article.author}
        body={article.body}
        created_at={article.created_at}
        votes={article.votes}
        comment_count={article.comment_count}
        setVoteUp={setVoteUp}
      />

      <h3 id="ArtComms">Comments: {comments.length}</h3>
      {comments.map(({ comment_id, votes, created_at, author, body }) => {
        return (
          <div id="commentsWrap">
            <SingleArticleComments
              key={comment_id}
              votes={votes}
              created_at={created_at}
              author={author}
              body={body}
            />
          </div>
        );
      })}
    </section>
  );
}
