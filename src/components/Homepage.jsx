import React from "react"
import ArticleDisplay from "./ArticleDisplay"

export default function HomePage({topic}) {

    return (
        <div id="homepage">
            <ArticleDisplay topic={topic}/>
        </div>
    )
}