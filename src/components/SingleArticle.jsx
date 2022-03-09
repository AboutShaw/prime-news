import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleAndComments from "./ArticleAndComments"
import { getArticle } from "../api";

export default function SingleArticle({articles, setArticles}) {
    const [isLoading, setIsLoading] = useState(true);
    const {article_id} = useParams()
    

    useEffect(() => {
        setIsLoading(true);
        getArticle(article_id).then((articles) => {
          setArticles(articles);        
          setIsLoading(false);
        });
      }, [article_id]);
    
    if (isLoading) return <p>loading..</p>;
    return (
        <div id="homepage">
            <ArticleAndComments article_id={article_id} articles={articles} setArticles={setArticles}/>
        </div>
    )
}