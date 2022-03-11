import { useState, useEffect } from "react";
import ArticleTile from "./ArticleTile";
import { getArticles } from "../api";
import { useParams, useSearchParams } from "react-router-dom";

export default function ArticleDisplay({ articles, setArticles }) {
  const [isLoading, setIsLoading] = useState(true);
  const [voteUp, setVoteUp] = useState([]);

  const { topic } = useParams();
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sort_by");
  const order = searchParams.get("order");

  console.log(sortBy, order, "dispArt");

  useEffect(() => {
    setIsLoading(true);
    if (!topic) {
      getArticles(sortBy, order).then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      });
    }
    getArticles(topic, sortBy, order).then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic, sortBy, order]);

  if (isLoading) return <p>loading..</p>;
  return (
    <section className="articlesTiles">
      {articles.articles.map(
        ({
          article_id,
          title,
          topic,
          author,
          body,
          created_at,
          votes,
          comment_count,
        }) => {
          return (
            <ArticleTile
              key={article_id}
              article_id={article_id}
              title={title}
              topic={topic}
              author={author}
              body={body}
              created_at={created_at}
              votes={votes}
              comment_count={comment_count}
            />
          );
        }
      )}
    </section>
  );
}
