import { useState, useEffect } from "react";
import SingleArticleTile from "./SingleArticleTile";
import { getArticle, getComments, postComment } from "../api";
import SingleArticleComments from "./SingleArticleComments";
import CommentsPopUp from "./CommentsPopUp";

export default function ArticleAndComments({ article_id }) {
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState({});
  const [buttonPopup, setButtonPopup] = useState(false);
  const [commentBody, setCommentBody] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getArticle(article_id).then((article) => {
      setArticle(article);
      setIsLoading(false);
    });
    getComments(article_id).then((comments) => {
      setComments(comments);
    });
  }, [article_id, buttonPopup]);

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

      <div id="ArtComms">
        <h3>Comments</h3>
        <button onClick={() => setButtonPopup(true)}>What You Sayin</button>
        <CommentsPopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>What You Sayin: jessjelly</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              postComment(article_id, commentBody)
                .then((response) => {
                  return response.data.comment;
                })
                .then(() => setButtonPopup(false));
            }}
          >
            <h4>Empty your mind (↡below↡)</h4>
            <textarea
              type="text"
              value={commentBody}
              onChange={(e) => setCommentBody(e.target.value)}
            />
            <button>Submit</button>
          </form>
        </CommentsPopUp>
      </div>

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
