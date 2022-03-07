import { useState, useEffect } from "react";
import ArticleTile from "./ArticleTile"
import { getArticles } from "../api";


  export default function ArticleDisplay({topic}) {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setIsLoading(true);
      getArticles(topic).then((articles) => {
        setArticles(articles);        
        setIsLoading(false);
      });
    }, [topic]);

    if (isLoading) return <p>loading..</p>;
    return (
      <section className="articlesTiles">
        {articles.articles.map(({ article_id, title, topic, author, body, created_at, votes, comment_count }) => {
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
        })}
      </section>
    );
  }
  





  