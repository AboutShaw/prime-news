import React from "react"
import ArticleDisplay from "./ArticleDisplay"

export default function Coding({topic}) {

    return (
        <div id="homepage">
            <ArticleDisplay topic={topic}/>
        </div>
    )
}