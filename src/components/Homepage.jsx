import React from "react"
import DisplayArticles from "./DisplayArticles"
import Sorter from "./Sorter"

export default function HomePage({articles, setArticles}) {

    return (
        <div id="homepage">
            <Sorter />
            <DisplayArticles articles={articles} setArticles={setArticles}/>
        </div>
    )
}