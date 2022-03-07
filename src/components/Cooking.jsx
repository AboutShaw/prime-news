import React from "react"
import ArticleDisplay from "./ArticleDisplay"

export default function Cooking({topic}) {

    return (
        <div id="homepage">
            <ArticleDisplay topic={topic}/>
        </div>
    )
}