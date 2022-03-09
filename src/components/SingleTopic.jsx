import React, { useEffect, useState } from "react"
import DisplayArticles from "./DisplayArticles"
import { getArticles } from "../api";
import { useParams } from "react-router-dom";
import Sorter from "./Sorter";

export default function SingleTopic({articles, setArticles}) {
    const [isLoading, setIsLoading] = useState(true);
    const {topic} = useParams()
    

    useEffect(() => {
        setIsLoading(true);
        getArticles(topic).then((articles) => {
          setArticles(articles);        
          setIsLoading(false);
        });
      }, [topic]);
    
    if (isLoading) return <p>loading..</p>;
    return (
        <div id="homepage">
          <Sorter />
          <DisplayArticles topic={topic} articles={articles} setArticles={setArticles}/>
        </div>
    )
}